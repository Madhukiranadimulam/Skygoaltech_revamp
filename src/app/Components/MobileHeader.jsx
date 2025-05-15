'use client';

import sky_logo from '../../assets/skygoal-logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import MobileViewSideBar from './MobileViewSideBar';

export default function MobileHeader() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const handleMobileViewSideBar = () => {
        setMobileNavOpen(true);
    }

    return (
        <>
            <div className='fixed z-100 w-full bg-white border-b border-b-gray-300 px-[3rem] max-sm:px-[1.5rem]'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Image src={sky_logo} alt="Sky-Goal Logo" className='w-32 max-sm:w-28' />
                    </div>
                    <button
                        className='cursor-pointer'
                        onClick={handleMobileViewSideBar}
                    >
                        <RxHamburgerMenu className='text-[2.5rem]' />
                    </button>
                </div>
            </div>

            {mobileNavOpen &&
                <MobileViewSideBar
                    setMobileNavOpen={setMobileNavOpen}
                />
            }
        </>
    )
}
