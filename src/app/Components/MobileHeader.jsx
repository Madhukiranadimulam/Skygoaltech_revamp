'use client';

import sky_logo from '../../assets/skygoal-logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import MobileViewSideBar from './MobileViewSideBar';
import { useRouter, usePathname } from 'next/navigation';

export default function MobileHeader() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const navigate = useRouter();
    const pathName = usePathname();

    const handleMobileViewSideBar = () => {
        setMobileNavOpen(true);
    }

    const handleLogoNavigation = () => {
        // console.log("Path from Home Page", path);
        if (pathName === '/') {
            window.scrollTo({ top: 0, behavior: "smooth" })
            return;
        } else {
            navigate.push("/");
        }
    }

    return (
        <>
            <div className='fixed z-100 w-full bg-white border-b border-b-gray-300 px-[3rem] py-2 max-sm:px-[1.5rem]'>
                <div className='flex items-center justify-between'>
                    <div onClick={handleLogoNavigation}>
                        <Image src={sky_logo} alt="Sky-Goal Logo" className='w-28 max-sm:w-24' />
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
