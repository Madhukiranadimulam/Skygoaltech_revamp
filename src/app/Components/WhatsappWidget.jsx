'use client';

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappWidget() {

    const handleNavigateToWhatsapp = () => {
        const isMobile = /iphone|ipod|ipad|android/.test(navigator.userAgent.toLowerCase());

        // Generate WhatsApp URL
        const whatsappUrl = `https://wa.me/+918143965247`;

        // Step 1: Share Referral Link on WhatsApp
        if (isMobile) {
            window.location.href = whatsappUrl;
        } else {
            window.open(whatsappUrl, "_blank");
        }
    }

    return (
        <div className='fixed bottom-35 right-8 z-100 max-md:bottom-28 max-md:right-4'>
            <FaWhatsapp
                className='text-white bg-green-400 rounded-full w-[70px] h-[70px] p-4 cursor-pointer'
                onClick={handleNavigateToWhatsapp}
            />
        </div>
    )
}
