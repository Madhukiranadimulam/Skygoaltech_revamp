'use client';

import React, { useState } from 'react';
import serviceImg from '../../assets/consultancyServices-img.svg';
import Image from 'next/image';

export default function page() {

    const [activeTab, setActiveTab] = useState("cloud");

    const consultancySubServices = [
        {
            name: "Cloud",
            value: "cloud"
        },
        {
            name: "Digital Marketing",
            value: "digitalMarketing"
        },
        {
            name: "Digital Identity",
            value: "digitalIdentity"
        },
        {
            name: "ERP & CRM",
            value: "ermAndCrm"
        },
        {
            name: "Payment Gateway",
            value: "paymentGateway"
        },
    ]

    const handleConsultancySubServices = (service) => {
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
                        {consultancySubServices?.map((item) => (
                            <button
                                className={`${activeTab === item?.value ? "text-white bg-gradient-to-l from-[#D94B62] to-[#2A2742]" : "text-black"} font-medium w-full rounded-lg cursor-pointer`}
                                onClick={() => handleConsultancySubServices(item?.value)}
                                key={item?.value}
                            >
                                {item?.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pt-[5rem] px-[4rem] mb-[3rem]'>
                {activeTab === 'cloud' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>Cloud</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={serviceImg}
                                    width={1000}
                                    height={500}
                                    alt='logo-design-img'
                                    className='rounded-lg'
                                />
                            </div>
                        </div>
                    </>
                )
                }
                {activeTab === 'digitalMarketing' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>Digital Marketing</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={serviceImg}
                                    width={1000}
                                    height={500}
                                    alt='logo-design-img'
                                    className='rounded-lg'
                                />
                            </div>
                        </div>
                    </>
                )
                }
                {activeTab === 'digitalIdentity' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>Digital Identity</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={serviceImg}
                                    width={1000}
                                    height={500}
                                    alt='logo-design-img'
                                    className='rounded-lg'
                                />
                            </div>
                        </div>
                    </>
                )
                }
                {activeTab === 'ermAndCrm' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>ERM and ERM</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={serviceImg}
                                    width={1000}
                                    height={500}
                                    alt='logo-design-img'
                                    className='rounded-lg'
                                />
                            </div>
                        </div>
                    </>
                )
                }
                {activeTab === 'paymentGateway' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>Payment Gateway</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={serviceImg}
                                    width={1000}
                                    height={500}
                                    alt='logo-design-img'
                                    className='rounded-lg'
                                />
                            </div>
                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}
