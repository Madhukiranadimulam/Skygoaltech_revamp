'use client';

import { usePathname } from 'next/navigation';
import sky_logo from '../../assets/skygoal-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import './TopNavBar.css';
import { useEffect, useState } from 'react';

export default function TopNavigationBar() {

    const [showNavbar, setShowNavbar] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === '/';

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

    useEffect(() => {
        if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [isHome])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 126) {
                setShowNavbar(true); // Show after 200px
            } else {
                setShowNavbar(false);
            }
            // console.log("Screen", window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`${isHome && "bgHomePage"}`}
        >
            <div
                className={`${(isHome && !showNavbar) ? "text-white" : !isHome ? "fixed text-black z-100 bg-[#FFFFFFE6] shadow-sm border-b-gray-200 backdrop-blur" : "fixed text-black z-100 bg-[#FFFFFFE6]"} w-full`}
            >
                <nav className='flex items-center justify-between px-[5rem] py-[1rem]'>
                    <div>
                        <Image src={sky_logo} alt="Sky-Goal Logo" className='w-32' />
                    </div>
                    <ul className="flex items-center gap-[3rem]">
                        {topNavPaths?.map((item, index) => (
                            <li key={index} className="relative group">
                                <Link href={item?.path} className="flex items-center gap-1">
                                    {item?.name} {item?.icon}
                                </Link>

                                {item?.subPathNames?.length > 0 && (
                                    <ul className="absolute hidden min-w-min text-nowrap group-hover:flex flex-col bg-white text-black/70 font-medium p-2 shadow-lg z-10">
                                        {item?.subPathNames?.map((subItem) => (
                                            <li key={subItem?.sub_Path}>
                                                <Link
                                                    href={subItem?.sub_Path}
                                                    className="text-sm block px-4 py-2 hover:bg-gray-100"
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
                </nav>
            </div>
            <div className="w-full flex items-center flex-col justify-center gap-3 h-full">
                <p className="text-[40px] font-semibold text-white text-center">Leading Best Software Development Company</p>
                <span className="text-[40px] font-semibold text-white text-center">In Hyderabad</span>
            </div>
        </div>
    )
}
