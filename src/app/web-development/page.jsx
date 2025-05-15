'use client';

import React, { useState } from 'react';
import mobileAppImg from '../../assets/mobileDev-img.jpg';
import Image from 'next/image';

export default function page() {

    const [activeTab, setActiveTab] = useState("androidDev");

    const mobileAppSubServices = [
        {
            name: "Android Development",
            value: "androidDev"
        },
        {
            name: "IOS Development",
            value: "iosDev"
        },
    ]

    const handleMobileSubServices = (service) => {
        const value = service;
        setActiveTab(value);
    }

    return (
        <>
            <div
                className='relative min-w-full mt-[-10rem] mx-[-2rem] bg-cover h-[70vh] xl:h-[80vh]'
                style={{ backgroundImage: `url(${mobileAppImg.src})` }}
            >

            </div>
        </>
    )
}
