import { getAccessToken } from "@/app/helper/getAccessToken";

export async function POST(req) {
    try {

        const body = await req.json();

        const { name, email, phone } = body || {};

        if (!name) {
            return Response.json(
                {
                    success: false,
                    message: "Name is required.",
                    data: null,
                },
                {
                    status: 400,
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

        const webhookURL = process.env.ZOHO_CLIQ_WEBHOOK_URL_FOR_CALLBACK;

        const payload = {
            text: `Data:
        Name: ${name}
        Email: ${email}
        Phone: ${validMobileNumber}
        `
        };

        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            // console.log("Error Text", errorText);
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Submission failed. Please try again.",
                    error: errorText,
                }),
                { status: response.status }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "Form submitted successfully. We’ll be in touch soon.",
            }),
            { status: 200 }
        );
    } catch (err) {
        console.log("Error from Catch Block", err);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Something went wrong. Please try again.",
                error: err.message,
            }),
            { status: 500 }
        );
    }
}
