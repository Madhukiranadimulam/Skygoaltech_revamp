'use client';

import React, { useState } from 'react';
import rk_img from '../../assets/rk-img.png';
import Image from 'next/image';
import kusuma_Img from '../../assets/kusumaDM-img.jpeg';
import umesh_Img from '../../assets/umesh-img.png';
import saiNadh_Img from '../../assets/saiNadh-img.jpg';
import sandhya_Img from '../../assets/sandhya-img.jpg';
import mustaq_img from '../../assets/mustaq-img.png';
import kishore_img from '../../assets/kishore-img.png';

export default function TeamMembers() {

    const [hoverElement, setHoverElement] = useState({});

    const employeeData = [
        {
            no: 1,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 2,
            name: "Kusuma",
            designation: "Digital Marketing Executive",
            image: kusuma_Img
        },
        {
            no: 3,
            name: "Umesh",
            designation: "Operations Executive, IT",
            image: umesh_Img
        },
        {
            no: 4,
            name: "Sainadh",
            designation: "Flutter Developer",
            image: saiNadh_Img
        },
        {
            no: 5,
            name: "Sandhya",
            designation: "UI/UX Designer",
            image: sandhya_Img
        },
        {
            no: 6,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 7,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 8,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 9,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 10,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 11,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 12,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 13,
            name: "Mustaq Ahmed",
            designation: "Frontend-Developer",
            image: mustaq_img
        },
        {
            no: 14,
            name: "Kishore",
            designation: "Frontend-Developer",
            image: kishore_img
        }
    ]

    const handleHover = (no) => {
        setHoverElement((prev) => ({
            // ...prev,
            [no]: true
        }));
        // console.log("Hovered", no);
    }

    const handleMouseLeave = (no) => {
        setHoverElement((prev) => ({
            // ...prev,
            [no]: false
        }));
    }

    return (
        <div className='flex flex-wrap items-center justify-center gap-8 px-[4rem] py-[2rem]'>
            {employeeData?.map((item, index) => (
                <div
                    key={index}
                    className="relative group w-[200px] h-[250px]"
                    onMouseOver={() => handleHover(item?.no)}
                    onMouseLeave={() => handleMouseLeave(item?.no)}
                >
                    <Image
                        src={item?.image}
                        className="w-full h-full rounded-lg object-cover"
                        alt="team-members-imgs"
                    />
                    <div className="left-0 w-full h-2/3 overflow-hidden rounded-b-lg">
                        <div
                            className={
                                `absolute bottom-0 w-full flex flex-col gap-1.5 justify-center items-center text-white z-10 transition-all duration-900 ease-in-out ${hoverElement[item?.no] ? "opacity-100 bg-[#D94B62] py-2" : "opacity-0"
                                }`}
                        >
                            <span>{item?.name}</span>
                            <span className="text-xs">{item?.designation}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
