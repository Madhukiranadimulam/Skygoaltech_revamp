import React from 'react';
import './Home.css';
import bgImg from '../../assets/HomeBgImg.jpg';

export default function MobileViewHomePage() {
    return (
        <div
            className='!mx-[-0rem] mt-[-4rem] mb-[8rem]'
            style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${(bgImg?.src)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className="w-full flex items-center flex-col justify-center gap-3 h-[92%] px-[1.5rem]">
                <p className="text-[32px] font-semibold text-white text-center">Leading Best Software Development Company</p>
                <span className="text-[32px] font-semibold text-white text-center">In Hyderabad</span>
            </div>
        </div >
    )
}
