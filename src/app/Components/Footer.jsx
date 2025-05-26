'use client';

import React from 'react';
import './Footer.css';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import skyLogo from '../../assets/skygoal-logo.png';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {

    const navigate = useRouter();
    const pathName = usePathname();

    const fullYear = new Date().getFullYear();

    const handleLogoClick = () => {
        if (pathName === '/') {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        navigate.push("/");
    }

    const socialMediaIcons = [
        {
            icon: <FaFacebook />,
            path: "https://www.facebook.com/skygoaltechlabs",
            title: "Facebook",
            size: "27.2"
        },
        {
            icon: <AiFillInstagram />,
            path: "https://www.instagram.com/skygoaltech/",
            title: "Instagram",
            size: "30.4"
        },
        {
            icon: <FaSquareXTwitter />,
            path: "https://twitter.com/skygoaltech",
            title: "Twitter",
            size: "27.2"
        },
        {
            icon: <FaLinkedin />,
            path: "https://www.linkedin.com/company/skygoaltech/",
            title: "LinkedIn",
            size: "27.2"
        },
    ]

    return (
        <footer className='mt-[50px] w-full bg-[#2A2742] text-white'>
            <div className='mx-[10rem] max-lg:mx-[3rem]'>
                <hr className='mt-[60px] mb-[40px] text-gray-300'>
                </hr>
                <div className='w-full flex items-start justify-between gap-10 flex-wrap'>
                    <div>
                        <div
                            className='w-[140px] bg-white rounded-lg px-2 py-1 cursor-pointer'
                            onClick={handleLogoClick}
                        >
                            <Image
                                src={skyLogo}
                                width={120}
                                loading='lazy'
                                alt='skygoal-logo'
                            />
                        </div>
                        <p className='py-4 w-[300px] max-md:w-[270px]'>SkygoalTech is a solution provider for digital transformation. We help you to deliver next generation products, services and ideas. Our collaborative method of delivery with our extended team of partners enables us to ensure that we understand what is required by you.</p>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-2xl">Company</h3>
                        <div className="flex flex-col gap-3 pt-2">
                            <Link className="no-underline hoverColor" href="/aboutUs">About us</Link>
                            <Link className="no-underline hoverColor" href="https://careers.skygoaltech.com/jobs/Careers" target='_blank'>Careers</Link>
                            {/* <Link className="no-underline hoverColor" href="/portfolio">portfolio</Link>
                            <Link className="no-underline hoverColor" href="#">Blog</Link> */}
                        </div>
                    </div>
                    <div className=''>
                        <h3 className="font-extrabold text-2xl">Policies</h3>
                        <div className="flex flex-col gap-3 pt-2">
                            <Link className="no-underline hoverColor" href="/termsAndConditions">Terms & Conditions</Link>
                            <Link className="no-underline hoverColor" href="/dataDeletionPolicy">Data Deletion Policy</Link>
                            <Link className="no-underline hoverColor" href="/privacyPolicy">Privacy Policy</Link>
                            <Link className="no-underline hoverColor" href="/refundPolicy">Refund Policy</Link>
                            <Link className="no-underline hoverColor" href="/cancellationPolicy">Cancellation Policy</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-2xl">Contact Us</h3>
                        <div className="">
                            <h5 className="font-semibold my-3">Address, India</h5>
                            <p>
                                1st Floor, PVKR Elite, Lumbini Enclave, Plot No.75,  <br /> opposite Skyview, Lumbini Avenue,
                                <br />
                                Gachibowli, Hyderabad, Telangana 500032.<br />
                            </p>
                        </div>
                        <h5 className="font-semibold text-lg my-3">Call Us</h5>
                        <div className="flex flex-col gap-2">
                            <div>
                                <label>For Hirings:</label>
                                <a className="no-underline hoverColor" href="tel:++91-9429690593"> +91-9429690593</a>
                            </div>
                            <div>
                                <label>For Projects:</label>
                                <a className="no-underline hoverColor" href="tel:++91-9502278778"> +91-9502278778</a>
                            </div>
                        </div>
                        <div className='max-xl:pb-4'>
                            <h5 className="font-semibold my-3">Mail Us</h5>
                            <a className="no-underline" href="mailto:sales@skygoaltech.com">sales@skygoaltech.com</a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-8 max-lg:pt-3'>
                    {socialMediaIcons?.map((item, index) => (
                        <Link
                            href={item?.path}
                            title={item?.title}
                            target="_blank"
                            style={{ fontSize: item?.size + "px" }}
                            key={index}
                        >
                            {item?.icon}
                        </Link>
                    ))}
                </div>
                <div className='w-full py-5'>
                    <p className='text-center'>© {fullYear} Sky Goal INC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
