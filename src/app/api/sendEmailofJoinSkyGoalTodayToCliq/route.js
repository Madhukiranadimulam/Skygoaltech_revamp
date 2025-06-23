export async function POST(req) {
    try {
        const body = await req.json();
        const {
            email,
        } = body;

        const webhookURL = process.env.ZOHO_CLIQ_WEBHOOK_URL_FOR_JOIN_SKYGOAL_TODAY;

        const payload = {
            text: `Data:
        Email: ${email}
        `
        };

        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
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
                message: "Mail sent successfully. We’ll be in touch soon.",
            }),
            { status: 200 }
        );
    } catch (err) {
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
