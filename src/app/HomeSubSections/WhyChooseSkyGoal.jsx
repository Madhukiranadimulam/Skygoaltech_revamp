'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import whyChooseUsImage from '../../assets/whyChooseUs-img.png';
import './Home.css';

export default function WhyChooseSkyGoal() {

    const targetValues = {
        clients: 200,
        projects: 540,
        dedicatedPersons: 50,
        years: 7
    };

    const [counters, setCounters] = useState({
        clients: 100,
        projects: 350,
        dedicatedPersons: 0,
        years: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev => {
                // console.log("Prev", { ...prev })
                const updated = { ...prev };
                let allReached = true;

                for (const key in updated) {
                    if (updated[key] < targetValues[key]) {
                        updated[key]++;
                        allReached = false;
                    }
                }

                if (allReached) {
                    clearInterval(interval);
                }

                return updated;
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3 className="mt-[-5rem] mb-[1rem] text-center text-[#00000099] font-bold text-[35px]">Why Choose Us</h3>
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
                    <span className='text-[#18191F] font-semibold text-lg max-md:text-base'>Happy Clients</span>
                </div>
                <div>
                    <div>
                        <span className="whyChooseContentNumStyles text-[#FFBD00]">{counters?.projects}</span>
                        <span className="whyChooseContentSymbol text-[#FFBD00]">+</span>
                    </div>
                    <span className='text-[#18191F] font-semibold text-lg max-md:text-base'>Projects Completed</span>
                </div>
                <div className='flex flex-col'>
                    <span className="whyChooseContentNumStyles text-[#8500FF]">{counters?.dedicatedPersons}</span>
                    <span className='text-[#18191F] font-semibold text-lg max-md:text-base'>Dedicated Members</span>
                </div>
                <div>
                    <div>
                        <span className="whyChooseContentNumStyles text-[#2C5170]">{counters?.years}</span>
                    </div>
                    <span className='text-[#18191F] font-semibold text-lg max-md:text-base'>Glorious Years</span>
                </div>
            </div>
        </div>
    )
}
