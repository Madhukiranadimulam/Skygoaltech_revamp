'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import whyChooseUsImage from '../../assets/whyChooseUs-img.png';
import './Home.css';

export default function WhyChooseSkyGoal() {

    const eleRef = useRef(null);
    const [containerVisible, setContainerVisible] = useState(false);

    const targetValues = {
        clients: 200,
        projects: 540,
        dedicatedPersons: 50,
        years: 7,
    };

    const initialValues = {
        clients: 100,
        projects: 350,
        dedicatedPersons: 0,
        years: 0,
    };

    const [counters, setCounters] = useState(initialValues);

    useEffect(() => {
        if (containerVisible) {
            const duration = 1000; // total time in ms
            const intervalDelay = 20; // ms
            const steps = duration / intervalDelay;

            const incrementValues = {
                clients: (targetValues?.clients - initialValues?.clients) / steps,
                projects: (targetValues?.projects - initialValues?.projects) / steps,
                dedicatedPersons: (targetValues?.dedicatedPersons - initialValues?.dedicatedPersons) / steps,
                years: (targetValues?.years - initialValues?.years) / steps,
            };

            let currentStep = 0;

            const interval = setInterval(() => {
                currentStep++;

                setCounters((prev) => {
                    return {
                        clients: Math.round(prev?.clients + incrementValues?.clients),
                        projects: Math.round(prev?.projects + incrementValues?.projects),
                        dedicatedPersons: Math.round(prev?.dedicatedPersons + incrementValues?.dedicatedPersons),
                        years: Math.round(prev?.years + incrementValues?.years),
                    };
                });

                if (currentStep >= steps) {
                    clearInterval(interval);
                    setCounters(targetValues); // snap to final values
                }
            }, intervalDelay);

            return () => clearInterval(interval);
        }
    }, [containerVisible]);

    useEffect(() => {
        const checkInView = () => {
            const rect = eleRef?.current?.getBoundingClientRect();
            const visible = rect?.top < (window.innerHeight - 650) && rect?.bottom >= 0;
            setContainerVisible(visible);
        }
        document.addEventListener("scroll", checkInView);
        return () => {
            document.removeEventListener("scroll", checkInView);
        };
    }, [])

    return (
        <div ref={eleRef}>
            <h3 className="mb-[1rem] text-center text-[#00000099] font-bold text-[35px] max-md:text-3xl">Why Choose Us</h3>
            <div className='pt-4 mx-[-2rem]'>
                <Image
                    className='w-full'
                    src={whyChooseUsImage}
                    alt='whyChooseImage'
                />
            </div>
            <div className="w-full flex items-start justify-center gap-[6rem] flex-wrap py-10 max-md:gap-[4rem] max-sm:gap-[3rem]">
                <div>
                    <div>
                        <span className="whyChooseContentNumStyles text-[#407BFF]">{counters?.clients}</span>
                        <span className="whyChooseContentSymbol text-[#407BFF]">+</span>
                    </div>
                    <span className='text-[#18191F] font-semibold text-base max-md:text-sm'>Happy Clients</span>
                </div>
                <div>
                    <div>
                        <span className="whyChooseContentNumStyles text-[#FFBD00]">{counters?.projects}</span>
                        <span className="whyChooseContentSymbol text-[#FFBD00]">+</span>
                    </div>
                    <span className='text-[#18191F] font-semibold text-base max-md:text-sm'>Projects Completed</span>
                </div>
                <div className='flex flex-col'>
                    <span className="whyChooseContentNumStyles text-[#8500FF]">{counters?.dedicatedPersons}</span>
                    <span className='text-[#18191F] font-semibold text-base max-md:text-sm'>Dedicated Members</span>
                </div>
                <div>
                    <p className="whyChooseContentNumStyles text-[#2C5170]">{counters?.years}</p>
                    <span className='text-[#18191F] font-semibold text-base max-md:text-sm'>Glorious Years</span>
                </div>
            </div>
        </div>
    )
}
