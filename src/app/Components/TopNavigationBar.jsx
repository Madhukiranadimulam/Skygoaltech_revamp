'use client';

import { usePathname, useRouter } from 'next/navigation';
import sky_logo from '../../assets/skygoal-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import './TopNavBar.css';
import { useEffect, useState } from 'react';

export default function TopNavigationBar() {

    const [showNavbar, setShowNavbar] = useState(false);
    const [bgImgComplete, setBgImgComplete] = useState(false);

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
            // console.log("start")
            const heroHeight = (window.innerHeight) - 135;
            const scrollY = window.scrollY;
            if ((window.innerHeight - window.scrollY) > 600) {
                // console.log("Blurred Nav Bar")
                setShowNavbar(false);
                return;
            } else if (((window.innerHeight - window.scrollY) < 650) && window.scrollY < heroHeight) {
                // console.log("Bg white Nav")
                setShowNavbar(true);
                setBgImgComplete(false);
                return;
            } else {
                // // console.log("inside")
                // console.log("Scroll Y", scrollY);
                // console.log("Hero He", heroHeight)
                if (scrollY > heroHeight) {
                    setBgImgComplete(true);
                    setShowNavbar(false);
                    // console.log("Screen Completed")
                    return;
                } else {
                    // setShowNavbar(false);
                    // setBgImgComplete(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // console.log("Is Home", isHome)
    // console.log("Bg complete", bgImgComplete)

    const handleNavigation = (path) => {
        // console.log("Path from Home Page", path);
        // console.log("Is Home", isHome)
        if (isHome && (path === '/')) {
            window.scrollTo({ top: 0 })
            return;
        } else {
            navigate.push(path);
        }
    }

    return (
        <div
            className={`${isHome && "bgHomePage"}`}
        >
            <div className={`w-full flex items-center pt-[5rem]`}>
                <div
                    className={`fixed flex items-center gap-8 py-2
    ${(showNavbar && pathname === '/') ? 'w-[75%] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out justify-between px-[3rem] rounded-[70px] bg-white z-[100]'
                            : (bgImgComplete || !isHome) ? "w-full bg-white justify-between rounded-none px-[5rem] py-2 mt-[-3.5rem] border-b border-b-gray-300 z-50" : 'lg:w-[80%] xl:w-[70%] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out px-[2rem] justify-between rounded-full bg-white/40 backdrop-blur-xl text-white z-[50]'
                        }`}
                >
                    <div onClick={() => handleNavigation('/')} className='cursor-pointer'>
                        <Image src={sky_logo} alt="Sky-Goal Logo" className='w-32' />
                    </div>
                    <ul className="flex items-center gap-[2rem]">
                        {topNavPaths?.map((item, index) => (
                            <li key={index} className="relative group">
                                <button
                                    className={`${(item?.name !== 'Services' && item?.name !== 'Contact Us') && 'hoverLine'} flex items-center gap-1 font-medium text-lg cursor-pointer`}
                                    onClick={() => handleNavigation(item?.path)}
                                >
                                    {item?.name} {item?.icon}
                                </button>

                                {item?.subPathNames?.length > 0 && (
                                    <ul className="absolute hidden min-w-min text-nowrap hover:transition-all hover:duration-500 group-hover:flex flex-col bg-white text-black/70 font-medium p-2 shadow-lg z-10 rounded-md">
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
                </div>
            </div>
            {isHome &&
                <div className="w-full flex items-center flex-col justify-center gap-3 h-[92%]">
                    <p className="text-[45px] font-semibold text-white text-center">Leading Best Software Development Company</p>
                    <span className="text-[45px] font-semibold text-white text-center">In Hyderabad</span>
                </div>
            }
        </div>
    )
}
