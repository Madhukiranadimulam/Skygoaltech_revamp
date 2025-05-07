import React from 'react';
import './Footer.css';
import Link from 'next/link';
import linkedImg from '../../assets/linkedin-img.svg';
import Image from 'next/image';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {

    const fullYear = new Date().getFullYear();

    return (
        <footer className='mt-[50px] w-full bg-[#2A2742] text-white'>
            <div className='mx-[7rem]'>
                <hr className='mt-[60px] mb-[40px] text-gray-300'>
                </hr>
                <div className='w-full flex items-start justify-between flex-wrap'>
                    <div>
                        <h3 className="font-extrabold text-lg">Company</h3>
                        <div className="flex flex-col gap-3 pt-2">
                            <Link className="no-underline hoverColor" href="/aboutUs">About us</Link>
                            <Link className="no-underline hoverColor" href="https://careers.skygoaltech.com/jobs/Careers" target='_blank'>Careers</Link>
                            <Link className="no-underline hoverColor" href="/portfolio">portfolio</Link>
                            <Link className="no-underline hoverColor" href="#">Blog</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-lg">Policies</h3>
                        <div className="flex flex-col gap-3 pt-2">
                            <Link className="no-underline hoverColor" href="/termsAndConditions">Terms & Conditions</Link>
                            <Link className="no-underline hoverColor" href="dataDeletionPolicy">Data Deletion Policy</Link>
                            <Link className="no-underline hoverColor" href="/privacyPolicy">Privacy Policy</Link>
                            <Link className="no-underline hoverColor" href="/cookiesPolicy">Cookies Policy</Link>
                            <Link className="no-underline hoverColor" href="/refundPolicy">Refund Policy</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-lg">Contact Us</h3>
                        <div className="">
                            <h5 className="font-semibold my-3">Address, India</h5>
                            <address>
                                PLOT NO: 75, 1ST FLOOR, PVKR ELITE, LUMBINI AVENUE ENCLAVE,
                                <br />
                                Gachibowli, K.V.Rangareddy, Seri Lingampally, Telangana, India, 500032.<br />
                            </address>
                        </div>
                        <h5 className="font-semibold text-lg my-2">Call Us</h5>
                        <div className="flex flex-col gap-2">
                            <div>
                                <label>For Hirings:</label>
                                <a className="no-underline hoverColor" href="tel:++91-9429690593">+91-9429690593</a>
                            </div>
                            <div>
                                <label>For Projects:</label>
                                <a className="no-underline hoverColor" href="tel:++91-9502278778">+91-9502278778</a>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-semibold my-2">Mail Us</h5>
                            <address>
                                <a className="no-underline" href="mailto:sales@skygoaltech.com">sales@skygoaltech.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <Link href="https://www.facebook.com/skygoaltechlabs" title="Facebook" target="_blank">
                        <FaFacebook className='text-[1.7rem]' />
                    </Link>
                    <Link href="https://www.instagram.com/skygoaltech/" title="Instagram" target="_blank">
                        <AiFillInstagram className='text-[1.9rem]' />
                    </Link>
                    <Link href="https://twitter.com/skygoaltech" title="Twitter" target="_blank">
                        <FaSquareXTwitter className='text-[1.7rem]' />
                    </Link>
                    <Link href="https://www.linkedin.com/company/skygoaltech/" title="LinkedIn" target="_blank">
                        <FaLinkedin className='text-[1.7rem]' />
                    </Link>
                </div>
                <div className='w-full py-5'>
                    <p className='text-center'>© {fullYear} Sky Goal INC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
