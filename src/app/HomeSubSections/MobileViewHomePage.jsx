"use client";

import React, { useEffect, useState } from 'react';
import './Home.css';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import InstantCallBackModal from './InstantCallBackModal';
import { Tooltip } from 'react-tooltip';

export default function MobileViewHomePage() {

    const [windowSize, setWindowSize] = useState("");
    const [widgetOpen, setWidgetOpen] = useState(false);

    const servicesIcons = [
        {
            id: 1,
            icon: <Icon icon="material-symbols:design-services" />,
            link: "/graphic-design",
            name: "Graphic Design"
        },
        {
            id: 2,
            icon: <Icon icon="iconoir:design-nib-solid" />,
            link: "/ui-ux",
            name: "UI/UX"
        },
        {
            id: 3,
            icon: <Icon icon="tabler:code" />,
            link: "/web-development",
            name: "Web Development"
        },
        {
            id: 4,
            icon: <Icon icon="ic:round-developer-mode" />,
            link: "/mobileApp-development",
            name: "Mobile App Development"
        },
        {
            id: 5,
            icon: <Icon icon="nimbus:marketing" />,
            link: "/digital-marketing",
            name: "Marketing"
        },
        {
            id: 6,
            icon: <Icon icon="pixel:cloud" />,
            link: "/cloud-solutions",
            name: "Cloud Solutions"
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window?.innerWidth;
            if (windowWidth < 768) {
                // console.log("Window Size is less than 768px", windowWidth);
                setWindowSize(true);
            }
        };
        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call once on mount to log the initial size
        handleResize();

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleCallBackModal = () => {
        setWidgetOpen(true);
    }

    return (
        <div className='bgHomePage'>
            <div className="w-full flex items-center flex-col justify-center gap-8 h-full max-md:gap-5">
                <div className='text-center'>
                    <p className="text-2xl md:text-[45px] font-black px-[2rem]">Leading Best Software Development</p>
                    <span className="text-2xl md:text-[45px] font-black">Company In Hyderabad</span>
                </div>
                <p className='text-sm md:text-lg font-semibold text-[#3F3F3F] text-wrap px-[2rem] text-center'>Empowering digital transformation through next-gen products, services, and collaborative delivery with trusted partners.</p>

                <div className='w-[632px] bg-[#E4E4E4] rounded-full p-2 overflow-auto'>
                    <div className='flex items-center gap-10 bg-white p-2 rounded-full'>
                        {windowSize ?
                            <Marquee
                                pauseOnHover={true}
                                speed={80}
                            >
                                <div className='flex items-center gap-4 bg-[#E4E4E4] rounded-full px-2 py-1 mx-10'>
                                    <span className='text-[#3E3E3E] font-semibold text-lg text-nowrap'>Build your future with us</span>
                                    <Icon icon="hugeicons:legal-document-01" className='text-black text-[2rem] bg-white p-2 rounded-full' />
                                </div>
                                <div className='flex items-center justify-center gap-4'>
                                    {servicesIcons?.map((item) => (
                                        <Link
                                            key={item?.id}
                                            href={item?.link}
                                            className='rounded-full bg-[#E4E4E4] w-9 h-9 flex items-center justify-center'
                                            title={item?.title}
                                        >
                                            {item?.icon}
                                        </Link>
                                    ))}
                                </div>
                            </Marquee>
                            :
                            <>
                                <div className='flex items-center gap-4 bg-[#E4E4E4] rounded-full px-2 py-1 '>
                                    <span className='text-[#3E3E3E] font-semibold text-lg text-nowrap'>Build your future with us</span>
                                    <Icon icon="hugeicons:legal-document-01" className='text-black text-[2rem] bg-white p-2 rounded-full' />
                                </div>
                                <div className='flex items-center justify-center gap-4'>
                                    {servicesIcons?.map((item) => (
                                        <div
                                            key={item?.id}
                                        >
                                            <Link
                                                href={item?.link}
                                                className={`rounded-full w-9 h-9 flex items-center justify-center bg-[#E4E4E4] custom-toolTip`}
                                                data-tooltip-id="shared-tooltip"
                                                data-tooltip-content={item?.name}
                                            >
                                                {item?.icon}
                                            </Link>
                                            <Tooltip
                                                // Don't forget to add this
                                                className="!bg-white !text-black shadow-sm !px-3 !py-1 !rounded"
                                                delayShow={300}
                                                id="shared-tooltip"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div
                    className="p-[3px] bg-gradient-to-t from-[#2A2742] to-[#9A9A9A] rounded-full cursor-pointer md:hidden"
                    onClick={handleCallBackModal}
                >
                    <button className="text-base font-semibold bg-white text-[#2A2742] rounded-full px-4 py-[6px] w-full h-full shadow-[inset_0_0_10px_rgba(217,75,98,0.15)] cursor-pointer">
                        Get Instant Call Back
                    </button>
                </div>
            </div>
            {widgetOpen && (
                <InstantCallBackModal
                    widgetOpen={widgetOpen}
                    setWidgetOpen={setWidgetOpen}
                    from="topNavigationBar"
                />
            )}
        </div >
    )
}
