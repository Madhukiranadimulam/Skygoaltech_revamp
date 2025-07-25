'use client';

import { usePathname, useRouter } from 'next/navigation';
import sky_logo from '../../assets/skygoal-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import './TopNavBar.css';
import { useEffect, useState } from 'react';
import MobileViewHomePage from '../HomeSubSections/MobileViewHomePage';
import InstantCallBackModal from '../HomeSubSections/InstantCallBackModal';

export default function TopNavigationBar() {

    const [showNavbar, setShowNavbar] = useState(false);
    const [bgImgComplete, setBgImgComplete] = useState(false);
    const [widgetOpen, setWidgetOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === '/';
    const navigate = useRouter();

    const topNavPaths = [
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
                    sub_Path: "/corporate-services",
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
        // {
        //     name: "Case Study and Blog",
        //     path: "/caseStudyAndBlogs"
        // },
        {
            name: "About Us",
            path: "/aboutus"
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
    ];

    useEffect(() => {
        if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [isHome]);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = (window?.innerHeight) - 135;
            const scrollY = window?.scrollY;
            if ((window?.innerHeight - window?.scrollY) > 720) {
                // console.log("Blurred Nav Bar")
                setShowNavbar(false);
                return;
            } else if (((window?.innerHeight - window?.scrollY) < 750) && scrollY < heroHeight) {
                // console.log("Bg white Nav")
                setShowNavbar(true);
                setBgImgComplete(false);
                return;
            } else {
                if (scrollY > heroHeight) {
                    setBgImgComplete(true);
                    setShowNavbar(false);
                    // console.log("Screen Completed")
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (path) => {
        if (isHome && (path === '/') || path === "") {
            window.scrollTo({ top: 0 })
            return;
        } else {
            navigate.push(path);
        }
    };

    const handleCallBackModal = () => {
        // console.log("Clicked")
        setWidgetOpen(true);
    }

    return (
        <>
            <div
                className={`${isHome && "bgHomePage"}`}
            >
                <div
                    className={`fixed flex items-center gap-8 py-2
                        ${(showNavbar && pathname === '/') ? 'w-[1000px] mt-[3rem] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out justify-between px-[3rem] rounded-[70px] bg-white z-[100] custom-shadow'
                            : (bgImgComplete || !isHome) ? "w-full justify-between rounded-none px-[4rem] border-b border-b-gray-300 z-50 bg-white" : 'w-[900px] mt-[3rem] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out px-[2rem] justify-between rounded-full bg-[#0000000D] text-[#404040] z-[50]'
                        }`}
                >
                    <div onClick={() => handleNavigation('/')} className='cursor-pointer'>
                        <Image src={sky_logo} alt="Sky-Goal Logo" className='w-24' />
                    </div>
                    <ul className="flex items-center gap-[2rem]">
                        {topNavPaths?.map((item, index) => (
                            <li key={index} className="relative group">
                                <button
                                    className={`flex items-center gap-1 font-medium text-lg relative cursor-pointer ${item?.name !== "Services" && item?.name !== "Contact Us" ? "hover:text-[#D94B62]" : ""}`}
                                    onClick={() => handleNavigation(item?.path)}
                                >
                                    {item?.name} {item?.icon}
                                </button>

                                {item?.subPathNames?.length > 0 && (
                                    <ul className="dropdown-menu absolute hidden min-w-min text-nowrap group-hover:flex flex-col bg-white text-black/70 font-medium p-2 shadow-lg z-10 rounded-md">
                                        {item?.subPathNames?.map((subItem) => (
                                            <li key={subItem?.sub_Path}>
                                                <Link
                                                    href={subItem?.sub_Path}
                                                    className={`${subItem?.sub_Path === pathname ? "bg-gray-100" : "hover:bg-gray-100"} text-sm block px-4 py-2`}
                                                    target={subItem?.subName === "Careers" ? "_blank" : ""}
                                                >
                                                    {subItem?.subName}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div
                        className="p-[3px] bg-gradient-to-t from-[#2A2742] to-[#9A9A9A] rounded-full cursor-pointer animate-bounce"
                        onClick={handleCallBackModal}
                    >
                        <button className="text-base font-semibold bg-white text-[#2A2742] rounded-full px-4 py-[6px] w-full h-full shadow-[inset_0_0_10px_rgba(217,75,98,0.15)] cursor-pointer">
                            Get Instant Call Back
                        </button>
                    </div>
                </div>
                {isHome &&
                    <MobileViewHomePage />
                }
            </div>
            {widgetOpen && (
                <InstantCallBackModal
                    widgetOpen={widgetOpen}
                    setWidgetOpen={setWidgetOpen}
                    from="topNavigationBar"
                />
            )}
        </>
    )
}
