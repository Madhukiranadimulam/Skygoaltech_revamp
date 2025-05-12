'use client';

import React, { useState } from 'react';
import serviceImg from '../../assets/eduTech-img.jpg';

export default function page() {

    const [activeTab, setActiveTab] = useState("webSite");

    const eduTechSubServices = [
        {
            name: "Website",
            value: "webSite"
        },
        {
            name: "Hosting",
            value: "hosting"
        },
        {
            name: "School/College ERP",
            value: "schoolCollege"
        },
        {
            name: "Digital Advertising",
            value: "digitalAdvertising"
        },
        {
            name: "Support & Maintenance",
            value: "supportMaintenance"
        },
    ]

    const handleEduTechSubServices = (service) => {
        const value = service;
        setActiveTab(value);
    }

    return (
        <>
            <div
                className='relative min-w-full mt-[-10rem] mx-[-2rem] bg-cover h-[70vh] xl:h-[80vh]'
                style={{ backgroundImage: `url(${serviceImg.src})` }}
            >
                <div className="bg-white absolute w-[90%] mr-[100px] ml-[80px] top-[89.5%] h-[100px] shadow-sm rounded-xl">
                    <div className="flex justify-between bg-[#EFEFEF] m-[30px] h-[40px] rounded-md">
                        {eduTechSubServices?.map((item) => (
                            <button
                                className={`${activeTab === item?.value ? "text-white bg-gradient-to-l from-[#D94B62] to-[#2A2742]" : "text-black"} font-medium w-full rounded-lg cursor-pointer`}
                                onClick={() => handleEduTechSubServices(item?.value)}
                                key={item?.value}
                            >
                                {item?.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pt-[5rem]'>
                <p>{activeTab === 'webSite' && 'Tab 1.'}</p>
                <p>{activeTab === 'hosting' && 'Tab 2.'}</p>
                <p>{activeTab === 'schoolCollege' && 'Tab 3.'}</p>
                <p>{activeTab === 'digitalAdvertising' && 'Tab 4.'}</p>
                <p>{activeTab === 'supportMaintenance' && 'Tab 5.'}</p>
            </div>
        </>
    )
}
