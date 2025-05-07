'use client';

import React, { useState } from 'react';
import serviceImg from '../../assets/consultancyServices-img.jpg';
import Image from 'next/image';
import handImg from '../../assets/consultancy-hand-img.svg';

export default function page() {

    const [activeTab, setActiveTab] = useState("webDesign");

    const corporateSubServices = [
        {
            name: "Web Design & Development",
            value: "webDesign"
        },
        {
            name: "Mobile Apps",
            value: "mobileApps"
        },
        {
            name: "CRM & ERP Software's",
            value: "crmAndErpSoftwares"
        },
        {
            name: "Billing Software",
            value: "billingSoftware"
        },
        {
            name: "Hosting Solutions",
            value: "hostingSolutions"
        },
    ]

    const handleECommerceSubServices = (service) => {
        const value = service;
        setActiveTab(value);
    }

    return (
        <>
            <div
                className='relative min-w-full mt-[-10rem] mx-[-2rem] bg-cover h-[70vh] xl:h-[80vh]'
                style={{ backgroundImage: `url(${serviceImg.src})` }}
            >
                <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
                    <Image
                        className='w-[130px] h-[90px]'
                        alt='hand-img'
                        src={handImg}
                    >
                    </Image>
                    <h2
                        className='text-white text-center font-medium text-3xl'
                    >
                        E-commerce Solutions
                    </h2>
                    <div>
                        <p className="text-white text-center">We provide end to end Edu-Tech Solutions for educational institutions
                            from planning, development,
                        </p>
                        <p className="text-white text-center">implementation, maintenance and upgradation. Our area of expertise is
                            Education Management Systems and</p>
                        <p className="text-white text-center">we cover all Educational Institutions' needs including Students
                            Enrollment, Examination Schedules,</p>
                        <p className="text-white text-center">E-Learning, Result Reporting etc. See Work</p>
                    </div>
                </div>

                <div className="bg-white absolute w-[90%] mr-[100px] ml-[80px] top-[89.5%] h-[100px] shadow-sm rounded-xl">
                    <div className="flex justify-between bg-[#EFEFEF] m-[30px] h-[40px] rounded-md">
                        {corporateSubServices?.map((item) => (
                            <button
                                className={`${activeTab === item?.value ? "text-white bg-gradient-to-l from-[#D94B62] to-[#2A2742]" : "text-black"} font-medium w-full rounded-lg cursor-pointer`}
                                onClick={() => handleECommerceSubServices(item?.value)}
                                key={item?.value}
                            >
                                {item?.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pt-[5rem]'>
                <p>{activeTab === 'webDesign' && 'Tab 1'}</p>
                <p>{activeTab === 'mobileApps' && 'Tab 2'}</p>
                <p>{activeTab === 'crmAndErpSoftwares' && 'Tab 3'}</p>
                <p>{activeTab === 'billingSoftware' && 'Tab 4'}</p>
                <p>{activeTab === 'hostingSolutions' && 'Tab 5'}</p>
            </div>
        </>
    )
}
