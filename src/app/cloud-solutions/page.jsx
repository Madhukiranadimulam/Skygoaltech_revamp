'use client';

import React, { useState } from 'react';
import serviceImg from '../../assets/cloudService-img.jpg';

export default function page() {

    const [activeTab, setActiveTab] = useState("aws");

    const cloudSubServices = [
        {
            name: "AWS",
            value: "aws"
        },
        {
            name: "GCP",
            value: "gcp"
        },
        {
            name: "IBM Cloud",
            value: "ibmCloud"
        },
    ]

    const handleCloudSubServices = (service) => {
        const value = service;
        setActiveTab(value);
    }

    return (
        <>
            <div
                className='relative w-full mt-[-10rem] bg-cover bg-no-repeat h-[70vh] xl:h-[80vh]'
                style={{ backgroundImage: `url(${serviceImg.src})` }}
            >
                <div className="bg-white absolute w-[90%] mr-[100px] ml-[80px] top-[89.5%] h-[100px] shadow-sm rounded-xl">
                    <div className="flex justify-between bg-[#EFEFEF] m-[30px] h-[40px] rounded-md">
                        {cloudSubServices?.map((item) => (
                            <button
                                className={`${activeTab === item?.value ? "text-white bg-gradient-to-l from-[#D94B62] to-[#2A2742]" : "text-black"} font-medium w-full rounded-lg cursor-pointer`}
                                onClick={() => handleCloudSubServices(item?.value)}
                                key={item?.value}
                            >
                                {item?.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pt-[5rem]'>
                <p>{activeTab === 'aws' && 'Tab 1.'}</p>
                <p>{activeTab === 'gcp' && 'Tab 2.'}</p>
                <p>{activeTab === 'ibmCloud' && 'Tab 3.'}</p>
            </div>
        </>
    )
}
