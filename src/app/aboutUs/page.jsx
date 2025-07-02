import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import ourMissionImg from '../../assets/ourMissionImg.jpg';
import Image from 'next/image';
import ourStrategy_img from '../../assets/ourStrategy-img.jpg';
import CompanyLocationMap from '../Components/CompanyLocationMap';
import TeamMembers from '../Components/TeamMembers';

export default function page() {
    return (
        <div className='mt-[9rem] ml-[2rem] mb-[4rem] max-lg:ml-[0rem]'>
            <BreadCrumb />
            <div>
                <div className='flex flex-col gap-[5rem] pt-[5rem] px-[10rem] max-lg:px-[3rem]'>
                    <div className='flex items-center justify-between gap-[1rem] max-md:flex-wrap'>
                        <div className='flex flex-col gap-5 w-[1000px]'>
                            <h3 className='text-2xl font-semibold'>Our Vision</h3>
                            <p className='leading-8'>
                                Sky-GoalTech aims to empower businesses with innovative digital solutions. We deliver high-quality web, e-commerce, and branding services tailored to client goals. Our mission is to combine creativity and technology to drive results and build lasting partnerships.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={ourMissionImg}
                                className='w-[900px] h-[300px] object-contain'
                                alt='ourMissionImg-img'
                                loading='eager'
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-[1rem] max-md:flex-col'>
                        <div className='max-md:order-2'>
                            <Image
                                src={ourStrategy_img}
                                className='w-[900px] h-[300px] object-contain'
                                alt='ourStrategy-img'
                                loading='eager'
                            />
                        </div>
                        <div className='flex flex-col gap-5 w-[1000px] max-md:order-1 max-md:w-auto'>
                            <h3 className='text-2xl font-semibold'>Our Strategy</h3>
                            <p className='leading-8'>
                                Sky-GoalTech focuses on understanding client needs and delivering tailored, tech-driven solutions. We use research, innovation, and an agile approach to ensure impactful and scalable results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pt-[3rem]'>
                    <h2 className='text-center text-3xl font-semibold'>Meet the Dream Team</h2>
                    <TeamMembers />
                    <CompanyLocationMap />
                </div>
            </div>
        </div>
    )
}
