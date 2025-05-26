'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaHome } from "react-icons/fa";

export default function BreadCrumb() {

    const navigate = useRouter();
    const pathName = usePathname();
    // console.log("Path Name", pathName)

    const handleDynamicHeading = () => {
        switch (pathName) {
            case '/business-enquiry':
                return "Business Enquiry";
            case '/aboutUs':
                return 'About Us';
            case '/caseStudyAndBlogs':
                return "Case-Study & Blogs"
            case '/termsAndConditions':
                return 'Terms & Conditions'
            case '/dataDeletionPolicy':
                return 'Data Deletion Policy'
            case '/privacyPolicy':
                return 'Privacy Policy'
            case '/refundPolicy':
                return 'Refund Policy'
            case '/cancellationPolicy':
                return 'Cancellation Policy'
        }
    }

    return (
        <>
            <div className='flex items-center gap-2 pt-2 pl-[2.5rem]'>
                <div
                    className='flex items-center gap-1 text-blue-500 cursor-pointer'
                    onClick={() => navigate.push("/")}
                >
                    <FaHome className='text-[1.1rem]' />
                    <span className='text-base'>Home</span>
                </div>
                /
                <span className='text-base'>{handleDynamicHeading()}</span>
            </div>
        </>
    )
}
