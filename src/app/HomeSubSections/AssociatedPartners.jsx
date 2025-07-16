import React from 'react';
import Marquee from "react-fast-marquee";
import amazon_logo from '../../assets/amazon_logo.svg';
import zohoLogo from '../../assets/zohoLogo.svg';
import Razorpay_logo from '../../assets/Razorpay_logo.svg';
import payu_logo from '../../assets/payu_logo.svg';
import icici_logo from '../../assets/icici_logo.svg';
import googleLogo from '../../assets/googleLogo.svg';
import Image from 'next/image';

export default function AssociatedPartners() {

    const associatedPartnersLogos = [
        {
            image: amazon_logo,
            alt: 'amazon-logo',
            width: '170',
            height: '70',
        },
        {
            image: zohoLogo,
            alt: 'zoho-Logo',
            width: '200',
            height: '120',
        },
        {
            image: Razorpay_logo,
            alt: 'Razorpay_logo',
            width: '200',
            height: '100',
        },
        {
            image: payu_logo,
            alt: 'payu_logo',
            width: '180',
            height: '100',
        },
        {
            image: icici_logo,
            alt: 'icici_logo',
            width: '200',
            height: '120',
        },
        {
            image: googleLogo,
            alt: 'google-Logo',
            width: '200',
            height: '120',
        },
    ]

    return (
        <div className='pt-10'>
            <h3 className='text-center text-[#00000099] text-[35px] font-semibold max-md:text-2xl'>Associated With</h3>
            <div className='py-[3rem]'>
                <Marquee
                    pauseOnHover={true}
                    speed={120}
                    gradient={true}
                >
                    {associatedPartnersLogos?.map((item, index) => (
                        <Image
                            key={index}
                            className='pr-[4rem]'
                            src={item?.image}
                            alt={item?.alt}
                            width={item?.width}
                            height={item?.height}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
