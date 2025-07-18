'use client';

import React from 'react';
import futureTech from '../../assets/futureTech-img.png';
import pholexImg from '../../assets/pholexEnergy-img.png';
import arrowMonk from '../../assets/arrowMonk-img.png';
import everGreen from '../../assets/everGreen-img.png';
import letEducate from '../../assets/let-Educate-img.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import skyGoalLogo from "../../assets/skygoal-logo.png";

export default function Testimonials() {

    const testimonialsArr = [
        {
            clientFeedBack: "I am satisfied, and the manner in which this team carried out their duties increased my sales, and there is currently no difficulty. It was completed exactly according to my instructions, and I am grateful. I will undoubtedly collaborate with them in the future.",
            clientName: "Saran",
            companyName: "From inspiring indians",
            companyLogo: skyGoalLogo
        },
        {
            clientFeedBack: "I was right to be sceptical about getting a logo and website designed for my startup. I choose Skygoal Tech because they were able to comprehend our needs. They were on schedule with the project delivery and had fantastic communication.",
            clientName: "Dhanush",
            companyName: "From Future Tech It Global",
            companyLogo: futureTech
        },
        {
            clientFeedBack: "I'd seen folks praising their work before and thought I'd give it a shot to give a project . I'm quite happy with the outcome. I wasn't expecting much, maybe some grasp of my industry or some ideas, but they went above and beyond and designed a logo based on my tastes after considering all of the variables I gave at the outset. That was also incorporated into their artistic concept. The team is also incredibly kind and responsive.",
            clientName: "Sirazuddin",
            companyName: "From Pholex Energy",
            companyLogo: pholexImg
        },
        {
            clientFeedBack: "I recommend this team of individuals, they are totally awesome and great to work with they just don't take your word for it, they truly observe what is happening and analyze, the moment they see things are not working they make changes",
            clientName: "NA",
            companyName: "From Newishkart",
            companyLogo: arrowMonk
        },
        {
            clientFeedBack: "I have to say I'm impressed. I have a friend who is a Marketing Agency owner and he recommended you guys. I must say, this has been a great experience so far!",
            clientName: "NA",
            companyName: "From Arrow-monk",
            companyLogo: skyGoalLogo
        },
        {
            clientFeedBack: "I had contacted a few web developers to make my website, they took my money and did nothing. I then came across this young team, they designed the site on time and within budget.I was happy with my service and i will suggest to take a service from this team.",
            clientName: "Harshit",
            companyName: "From Evergreen-infra",
            companyLogo: everGreen
        },
        {
            clientFeedBack: "I have dealt with few web designer but skygoal-tech has the best team to provide service and they are very helpful i love this team because they are not only developers but they can suggest you what is the right thing to do for your business.",
            clientName: "Teja",
            companyName: "From Let-educate",
            companyLogo: letEducate
        }
    ]

    return (
        <div className='bg-[#2A2742] rounded-xl h-[550px] mt-10 mb-14 mx-[-2rem] overflow-x-visible'>
            <h4 className='text-white font-semibold text-[35px] text-center pt-8'>TESTIMONIALS</h4>
            <div className='w-full flex items-center'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    spaceBetween={15}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {testimonialsArr?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-[400px] flex flex-col items-start justify-between gap-4 bg-white rounded-lg px-6 py-4 mx-10 my-[2rem] overflow-y-auto custom-y-scrollBar"
                            >
                                <p className='max-md:text-sm'>{item?.clientFeedBack}</p>
                                <div className="w-full flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold">{item?.clientName}</h3>
                                        <span>{item?.companyName}</span>
                                    </div>
                                    <div>
                                        <Image
                                            src={item?.companyLogo}
                                            alt="clientCompany-Logo"
                                            width={100}
                                            height={60}
                                            loading='lazy'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
