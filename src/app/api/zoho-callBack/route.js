// import { getAccessToken } from "@/app/helper/getAccessToken";

// export async function POST(req) {

//     const body = await req.json();

//     const { name, email, phone, id } = body || {};

//     const webhookURL = process.env.ZOHO_CLIQ_WEBHOOK_URL_FOR_CALLBACK;

//     if (!name) {
//         return Response.json(
//             {
//                 success: false,
//                 message: "Name is required.",
//                 data: null,
//             },
//             {
//                 status: 400,
//             },
//         );
//     };

//     if (!email) {
//         return Response.json(
//             {
//                 success: false,
//                 message: "Email is required.",
//                 data: null,
//             },
//             {
//                 status: 400,
//             },
//         );
//     };

//     if (!phone) {
//         return Response.json(
//             {
//                 success: false,
//                 message: "Mobile Number is required.",
//                 data: null,
//             },
//             {
//                 status: 400,
//             },
//         );
//     };

//     if (!id) {
//         return Response.json(
//             {
//                 success: false,
//                 message: "State is required.",
//                 data: null,
//             },
//             {
//                 status: 400,
//             },
//         );
//     };

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     const isValidEmail = emailRegex.test(email);

//     if (!isValidEmail) {
//         return Response.json(
//             {
//                 success: false,
//                 message: "Email is not valid",
//                 response: null,
//             },
//             {
//                 status: 400,
//             },
//         );
//     };

//     const validMobileNumber = phone?.replace(/\s+/g, ""); // remove spaces

//     try {

//         const cliqPromise = fetch(webhookURL, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 text: `Data:
// Name: ${name}
// Email: ${email}
// Phone: ${validMobileNumber}`,
//             }),
//         });

//         const accessToken = await getAccessToken();

//         const crmPromise = fetch("https://www.zohoapis.in/crm/v2/Leads", {
//             method: "POST",
//             headers: {
//                 Authorization: `Zoho-oauthtoken ${accessToken}`,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 data: [
//                     {
//                         Last_Name: name || "Unknown",
//                         Email: email,
//                         Phone: validMobileNumber,
//                         Owner: {
//                             id: id,
//                         },
//                     },
//                 ],
//             }),
//         });

//         const [cliqRes, crmRes] = await Promise.allSettled([
//             cliqPromise,
//             crmPromise,
//         ]);

//         // Check promise-level failure
//         if (cliqRes.status === "rejected") {
//             console.error("Cliq network error:", cliqRes.reason);
//         };

//         // Check API-level failure
//         if (cliqRes.status === "fulfilled" && !cliqRes.value.ok) {
//             const errorText = await cliqRes.value.text();
//             console.error("Cliq API error:", errorText);
//         };

//         if (crmRes.status === "rejected") {
//             console.error("CRM network error:", crmRes.reason);
//         };

//         if (crmRes.status === "fulfilled" && !crmRes.value.ok) {
//             const errorText = await crmRes.value.text();
//             console.error("CRM API error:", errorText);
//         };

//         const isCliqSuccess = cliqRes.status === "fulfilled" && cliqRes.value.ok;

//         const isCrmSuccess = crmRes.status === "fulfilled" && crmRes.value.ok;

//         if (isCliqSuccess || isCrmSuccess) {
//             return Response.json({
//                 success: true,
//                 message: "Form submitted successfully",
//             });
//         };

//         return Response.json(
//             {
//                 success: false,
//                 message: "Submission failed. Please try again.",
//             },
//             { status: 500 }
//         );

//     } catch (error) {
//         console.error("Error:", error);

//         return Response.json(
//             {
//                 success: false,
//                 message: "Internal Server Error",
//             },
//             { status: 500 }
//         );
//     }
// };

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

    console.log("Authorization Code:", code);

    return Response.json({
        success: true,
        message: "Authorization successful. You can close this tab.",
    });
};