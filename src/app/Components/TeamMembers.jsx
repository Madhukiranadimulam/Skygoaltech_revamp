'use client';

import React, { useState } from 'react';
import rk_img from '../../assets/rk-img.png';
import Image from 'next/image';
import kusuma_Img from '../../assets/kusumaDM-img.jpeg';
import umesh_Img from '../../assets/umesh-img.png';
import saiNadh_Img from '../../assets/saiNadh-img.jpg';
import sandhya_Img from '../../assets/sandhya-img.jpg';

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
            designation: "Operations Executive",
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
                    className='relative group'
                    onMouseOver={() => handleHover(item?.no)}
                    onMouseLeave={() => handleMouseLeave(item?.no)}
                >
                    <Image
                        src={item?.image}
                        className='w-[200px] h-[250px] rounded-lg object-cover'
                        alt='team-members-imgs'
                    />
                    <div
                        className={`${hoverElement[item?.no] ? "flex flex-col gap-1.5 justify-center items-center text-white bg-[#D94B62] px-4 py-1.5 absolute bottom-0 rounded-tr-none rounded-tl-none rounded-b-lg" : "hidden"} w-full`}
                    >
                        <span>{item?.name}</span>
                        <span className='text-xs'>{item?.designation}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
