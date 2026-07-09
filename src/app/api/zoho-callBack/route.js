import { getAccessToken } from "@/app/helper/getAccessToken";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // change later to your WP domain
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: corsHeaders,
    });
};

const verifyCaptcha = async (token) => {

    const secret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secret}&response=${token}`,
    });

    const result = await response.json();
    // console.log("Captcha Result", result);
    return result;

};

export async function POST(req) {

    const body = await req.json();

    const { name, email, phone, state, source, googleCaptchaToken } = body || {};

    const webhookURL = process.env.ZOHO_CLIQ_WEBHOOK_URL_FOR_CALLBACK;

    if (!googleCaptchaToken) {
        return Response.json(
            {
                success: false,
                message: "Captcha is required.",
                data: null,
            },
            {
                status: 400,
                headers: corsHeaders,
            },
        );
    };

    if (!name) {
        return Response.json(
            {
                success: false,
                message: "Name is required.",
                data: null,
            },
            {
                status: 400,
                headers: corsHeaders
            },
        );
    };

    if (!email) {
        return Response.json(
            {
                success: false,
                message: "Email is required.",
                data: null,
            },
            {
                status: 400,
                headers: corsHeaders
            },
        );
    };

    if (!phone) {
        return Response.json(
            {
                success: false,
                message: "Mobile Number is required.",
                data: null,
            },
            {
                status: 400,
                headers: corsHeaders
            },
        );
    };

    if (!state) {
        return Response.json(
            {
                success: false,
                message: "State is required.",
                data: null,
            },
            {
                status: 400,
                headers: corsHeaders
            },
        );
    };

    if (!source) {
        return Response.json(
            {
                success: false,
                message: "Lead Source is required.",
                data: null,
            },
            {
                status: 400,
                headers: corsHeaders
            },
        );
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
        return Response.json(
            {
                success: false,
                message: "Email is not valid",
                response: null,
            },
            {
                status: 400,
            },
        );
    };

    const validMobileNumber = phone?.replace(/\s+/g, ""); // remove spaces

    // const USERS = {
    //     RITIKA: "330982000001583002",
    //     JANAKI: "330982000001583031",
    // };

    const USERS = {
        Venu: "1230680000000444001",
        Murthy: "1230680000000445406"
    };

    const getOwnerByState = (s) => {
        const venuStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"];

        if (venuStates?.includes(s)) {
            return USERS.Venu;
        };

        return USERS.Murthy;
    };

    const ownerId = getOwnerByState(state);

    try {

        const captchaRes = await verifyCaptcha(googleCaptchaToken);

        if (!captchaRes.success) {
            return Response.json(
                {
                    success: false,
                    message: "Captcha Verification failed.",
                    data: null,
                },
                {
                    status: 400,
                    headers: corsHeaders
                },
            );
        };

        const cliqPromise = fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: `Data:
Name: ${name}
Email: ${email}
Phone: ${validMobileNumber}`,
            }),
        });

        const accessToken = await getAccessToken();

        const crmPromise = fetch("https://www.zohoapis.in/crm/v2/Leads", {
            method: "POST",
            headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [
                    {
                        Last_Name: name || "Unknown",
                        Email: email,
                        Phone: validMobileNumber,
                        Owner: {
                            id: ownerId,
                        },
                        Lead_Source: source,
                    },
                ],
            }),
        });

        const [cliqRes, crmRes] = await Promise.allSettled([
            cliqPromise,
            crmPromise,
        ]);

        // Check promise-level failure
        if (cliqRes?.status === "rejected") {
            console.error("Cliq network error:", cliqRes?.reason);
        };

        // Check API-level failure
        if (cliqRes?.status === "fulfilled" && !cliqRes?.value.ok) {
            const errorText = await cliqRes.value.text();
            console.error("Cliq API error:", errorText);
        };

        if (crmRes?.status === "rejected") {
            console.error("CRM network error:", crmRes.reason);
        };

        if (crmRes?.status === "fulfilled" && !crmRes?.value?.ok) {
            const errorText = await crmRes.value.text();
            console.error("CRM API error:", errorText);
        };

        const isCliqSuccess = cliqRes?.status === "fulfilled" && cliqRes?.value.ok;

        const isCrmSuccess = crmRes?.status === "fulfilled" && crmRes?.value?.ok;

        if (isCliqSuccess || isCrmSuccess) {
            return Response.json(
                {
                    success: true,
                    message: "Form submitted successfully",
                },
                {
                    status: 201,
                    headers: corsHeaders
                }
            );
        };

        return Response.json(
            {
                success: false,
                message: "Submission failed. Please try again.",
            },
            {
                status: 500,
                headers: corsHeaders
            }
        );

    } catch (error) {
        console.error("Error:", error);

        return Response.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
                headers: corsHeaders
            }
        );
    }
};

// export async function GET(req) {
//     const { searchParams } = new URL(req.url);

//     const code = searchParams.get("code");

//     console.log("Authorization Code:", code);

//     return Response.json({
//         success: true,
//         message: "Authorization successful. You can close this tab.",
//     });
// };