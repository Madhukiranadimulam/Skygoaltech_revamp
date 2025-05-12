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
                <div className="bg-white absolute w-[90%] mr-[100px] ml-[80px] top-[89.5%] h-[100px] shadow-sm rounded-xl">
                    <div className="flex justify-between bg-[#EFEFEF] m-[30px] h-[40px] rounded-md">
                        {mobileAppSubServices?.map((item) => (
                            <button
                                className={`${activeTab === item?.value ? "text-white bg-gradient-to-l from-[#D94B62] to-[#2A2742]" : "text-black"} font-medium w-full rounded-lg cursor-pointer`}
                                onClick={() => handleMobileSubServices(item?.value)}
                                key={item?.value}
                            >
                                {item?.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='pt-[5rem] px-[4rem] mb-[3rem]'>
                {activeTab === 'androidDev' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>Andriod Development</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={mobileAppImg}
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
                {activeTab === 'iosDev' && (
                    <>
                        <h4 className='text-2xl font-semibold pb-[1rem]'>IOS Development</h4>
                        <div className='flex items-start justify-between gap-[2rem] px-[4rem]'>
                            <p>Our graphic designers work with a wide variety of mediums and can deliver anything from basic logos to eye-catching advertising campaigns. Whether you need a logo for your business or a flyer for an upcoming event, our graphic designers can help transform your business's image in an attractive way</p>
                            <div>
                                <Image
                                    src={mobileAppImg}
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
