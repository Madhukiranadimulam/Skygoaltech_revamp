'use client';

import React, { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from 'next/navigation';
import sky_logo from '../../assets/skygoal-logo.png'
import Image from 'next/image';

export default function MobileViewSideBar({ setMobileNavOpen }) {

    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useRouter();
    const pathName = usePathname();

    const mobileViewSidePaths = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Services",
            path: "",
            icon: <IoIosArrowDown />,
            subPathNames: [
                {
                    subName: "Web Development",
                    sub_Path: "/web-development"
                },
                {
                    subName: "E-Commerce Development",
                    sub_Path: "/eCommerce-development"
                },
                {
                    subName: "Graphic Design",
                    sub_Path: "/graphic-design"
                },
                {
                    subName: "Mobile App Development",
                    sub_Path: "/mobileApp-development"
                },
                {
                    subName: "SaaS Development",
                    sub_Path: "/saas-development"
                },
                {
                    subName: "Consultancy Services",
                    sub_Path: "/consultancy-services"
                },
                {
                    subName: "Corporate-Services",
                    sub_Path: "/corporate-services"
                },
                {
                    subName: "Cloud Solutions",
                    sub_Path: "/cloud-solutions"
                },
                {
                    subName: "Edu-Tech Solutions",
                    sub_Path: "/edu-tech-Solutions"
                },
            ]
        },
        {
            name: "Case Study and Blog",
            path: "/caseStudyAndBlogs"
        },
        {
            name: "About Us",
            path: "/aboutUs"
        },
        {
            name: "Contact Us",
            path: "",
            icon: <IoIosArrowDown />,
            subPathNames: [
                {
                    subName: "Business Enquiry",
                    sub_Path: "/business-enquiry"
                },
                {
                    subName: "Careers",
                    sub_Path: "https://careers.skygoaltech.com/jobs/Careers"
                }
            ]
        }
    ]

    const handleCancelMobileViewSideBar = () => {
        setMobileNavOpen(false);
    }

    const toggleSubMenu = (index, path) => {
        console.log("Main Path", path)
        if (path) {
            navigate.push(path);
            setMobileNavOpen(false);
        } else {
            setOpenIndex((prev) => prev === index ? null : index);
        }
    };

    const handleNavigateSubMenu = (path) => {
        console.log("Sub Path", path)
        if (path === 'https://careers.skygoaltech.com/jobs/Careers') {
            window.open(path, "_blank");
            setMobileNavOpen(false);
        } else {
            navigate.push(path);
            setMobileNavOpen(false);
        }
    }

    const handleOutsideClick = (event) => {
        const isClickInside = event.target.closest(".outsideClick") || event.target.closest(".icon-button");
        // console.log("IsClickable", isClickInside)
        if (!isClickInside) {
            setOpenIndex(null); // Close submenu
        }
    };

    const handleLogoNavigation = () => {
        if (pathName === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileNavOpen(false);
            return;
        } else {
            navigate.push("/");
            setMobileNavOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <div className='w-full h-screen bg-white fixed right-0 z-100 overflow-y-auto'>
            <div className='px-[3rem] py-[2rem] max-sm:px-[2rem]'>
                <div className='w-full flex justify-between items-center'>
                    <div onClick={handleLogoNavigation}>
                        <Image src={sky_logo} alt="Sky-Goal Logo" className='w-32 max-sm:w-28' />
                    </div>
                    <button
                        onClick={handleCancelMobileViewSideBar}
                    >
                        <RxCross1 className='text-[2rem] cursor-pointer' />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 pt-[2rem] pl-[1rem] max-[500px]:pl-[0rem]">
                    {mobileViewSidePaths?.map((item, index) => (
                        <li key={item?.name} className="relative">
                            <button
                                className="flex items-center gap-1 font-medium text-lg max-[500px]:text-base icon-button"
                                onClick={() => toggleSubMenu(index, item?.path)}
                            >
                                {item?.name}
                                {item?.icon}
                            </button>

                            {item?.subPathNames?.length > 0 && openIndex === index && (
                                <ul className="absolute left-1/3 top-0 ml-2 bg-white text-black/70 font-medium  p-2 shadow-lg rounded-md z-10 outsideClick">
                                    {item?.subPathNames?.map((subItem) => (
                                        <li key={subItem?.sub_Path}>
                                            <span
                                                onClick={() => handleNavigateSubMenu(subItem?.sub_Path)}
                                                className="text-sm block px-4 py-2 max-[500px]:text-xs text-nowrap"
                                            >
                                                {subItem?.subName}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
