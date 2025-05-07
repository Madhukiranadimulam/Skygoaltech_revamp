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
    return (
        <div>
            <h3 className='text-center text-3xl font-semibold'>Associated With</h3>
            <div className='py-[3rem]'>
                <Marquee
                    pauseOnHover={true}
                    speed={120}
                    gradient={true}
                >
                    <Image src={amazon_logo} alt='amazon-logo' width={200} height={80} className='pr-[4rem]' />
                    <Image src={zohoLogo} alt='zoho-Logo' width={200} height={120} className='pr-[4rem]' />
                    <Image src={Razorpay_logo} alt='Razorpay_logo' width={200} height={120} className='pr-[4rem]' />
                    <Image src={payu_logo} alt='payu_logo' width={200} height={120} className='pr-[4rem]' />
                    <Image src={icici_logo} alt='icici_logo' width={200} height={120} className='pr-[4rem]' />
                    <Image src={googleLogo} alt='google-Logo' width={200} height={120} className='pr-[4rem]' />
                </Marquee>
            </div>
        </div>
    )
}
