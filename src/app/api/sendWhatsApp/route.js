// src/app/api/send-whatsapp/route.js

import { NextResponse } from 'next/server';
import { Twilio } from 'twilio';

const client = new Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req) {
    try {
        const formData = await req.json();
        const { name, email, phone, designation, companyName, service, formMessage } = formData;

        await client.messages.create({
            from: 'whatsapp:+14155238886',        // Twilio sandbox number
            to: 'whatsapp:+919959031877',         // Your WhatsApp number
            contentSid: 'HX0e6ea459352bdfab143001d3a94c4b7e', // Approved template SID
            contentVariables: JSON.stringify({
                "1": name,
                "2": email,
                "3": phone,
                "4": designation,
                "5": companyName,
                "6": service,
                "7": formMessage,
            }),
        });

        return NextResponse.json({
            success: true,
            message: 'Form submitted successfully and sent to WhatsApp.',
        });
    } catch (error) {
        console.error('Twilio Error:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
