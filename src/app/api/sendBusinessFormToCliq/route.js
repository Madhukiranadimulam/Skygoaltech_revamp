export async function POST(req) {
    try {
        const body = await req.json();
        const {
            name,
            email,
            phone,
            designation,
            companyName,
            selectedService,
            otherService,
            message,
        } = body;

        const service =
            selectedService === "others"
                ? `others - ${otherService}`
                : selectedService;

        const webhookURL = process.env.ZOHO_CLIQ_WEBHOOK_URL;

        const payload = {
            text: `Business Enquiry Form Data:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Designation: ${designation}
        Company: ${companyName}
        Service: ${service},
        Message: ${message}`,
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
                message: "Enquiry submitted successfully. We’ll be in touch soon.",
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
