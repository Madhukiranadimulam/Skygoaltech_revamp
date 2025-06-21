import React from 'react';
import getToKnowUs_Img from '../../assets/getToKnowUs-Img.jpg';
import Image from 'next/image';

export default function GetToKnowUs() {

    return (
        <div className='w-full flex items-start justify-between gap-[4rem] mt-[-4rem] mb-[2rem] px-[4rem] max-lg:flex-wrap max-lg:px-[2rem]'>
            <Image
                src={getToKnowUs_Img}
                alt='getToKnowUs-Img'
                loading='lazy'
                className='lg:w-1/2 w-full'
            />
            <div className='flex flex-col gap-4'>
                <span className='border-b w-fit'>Get to know us</span>
                <h3 className='lg:text-4xl text-2xl font-semibold leading-10'>We’re ready to grow your business with us</h3>
                <h5 className='lg:text-2xl text-lg font-medium text-[#2A2742]'>We’re committed to delivering the success for your businesses</h5>
                <p className='leading-8 lg:text-base text-sm'>At SkyGoalTech, we believe in building success through innovation, dedication, and strategic thinking. Our goal is simple — to help your business grow with smart digital solutions that deliver real results.</p>
                <p className='leading-8 lg:text-base text-sm'>We’re not just a service provider, we’re your growth partner, committed to turning your vision into reality.</p>
            </div>
        </div>
    )
}
