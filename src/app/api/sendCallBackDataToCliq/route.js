export async function POST(req) {
    try {
        const body = await req.json();
        const {
            name,
            email,
            phone,
        } = body;

        const webhookURL = process.env.ZOHO_CLIQ_WEBHOOK_URL_FOR_CALLBACK;

        console.log("Web Hook URL", webhookURL);

        const payload = {
            text: `Data:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        `
        };

        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.log("Error Text", errorText);
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
