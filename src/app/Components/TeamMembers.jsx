'use client';

import React, { useState } from 'react';
import rk_img from '../../assets/rk-img.webp';
import Image from 'next/image';
import kusumaT_Img from '../../assets/kusumaDM-img.jpeg';
import umesh_Img from '../../assets/umesh-img.png';
import saiNadh_Img from '../../assets/saiNadh-img.jpg';
import sandhya_Img from '../../assets/sandhya-img.jpg';
import mustaq_img from '../../assets/mustaq-img.jpg';
import kishore_img from '../../assets/kishore-img.png';
import sai_img from '../../assets/sai-img.jpg';
import nagesh_img from '../../assets/nagesh-img.webp';
import madhu_img from '../../assets/madhu-img.webp';
import usha_img from '../../assets/usha-img.png';
import bhargavi_img from '../../assets/bhargavi-img.jpg';
import prathap_img from '../../assets/prathap-img.png';
import manikanta_img from '../../assets/manikanta-img.jpg';
import satya_img from '../../assets/satya-img.png';
import venkatesh_img from '../../assets/Venkatesh-img.png';
import razzak_img from '../../assets/Razzak-img.png';
import nazmul_img from '../../assets/Nazmul-img.png';
import billal_img from '../../assets/Billal-img.png';
import lalith_img from '../../assets/Lalith-img.jpg';
import naveen_img from '../../assets/Naveen-img.png';
import suresh_img from '../../assets/Suresh-img.jpg';
import tarun_img from '../../assets/tarun-img.png';
import aditya_img from '../../assets/Aditya-img.webp';
import luqman_img from '../../assets/Luqman-img.png';
import KusumaB_img from '../../assets/Kusuma_img.png';
import kush_img from '../../assets/Kush-img.png';
import hariKrishna_img from '../../assets/HariKrishna-img.png';
import chaitra_img from '../../assets/Chaitra-img.png';
import priyanka_img from '../../assets/Priyanka-img.jpg';
import rasagnya_img from '../../assets/Rasagnya-img.png';
import venu_img from '../../assets/venu-img.jpg';

export default function TeamMembers() {

    const [hoverElement, setHoverElement] = useState({});

    const employeeData = [
        {
            no: 1,
            name: "Sai Krishna",
            designation: "CEO",
            image: sai_img
        },
        {
            no: 2,
            name: "Sri Nagesh",
            designation: "Co-Founder",
            image: nagesh_img
        },
        {
            no: 3,
            name: "Rama Krishna",
            designation: "Operational Manager",
            image: rk_img
        },
        {
            no: 4,
            name: "Madhu Kiran",
            designation: "IT Specialist",
            image: madhu_img
        },
        {
            no: 5,
            name: "Manikanta",
            designation: "UI/UX Designer",
            image: manikanta_img
        },
        {
            no: 6,
            name: "Usha",
            designation: "Project Co-Ordinator",
            image: usha_img
        },
        {
            no: 7,
            name: "Bhargavi",
            designation: "Human Resource Executive",
            image: bhargavi_img
        },
        {
            no: 8,
            name: "Naveen",
            designation: "Accountant",
            image: naveen_img
        },
        {
            no: 9,
            name: "Prathap",
            designation: "Graphic Designer",
            image: prathap_img
        },
        {
            no: 10,
            name: "Mustaq Ahmed",
            designation: "Frontend-Developer",
            image: mustaq_img
        },
        {
            no: 11,
            name: "Sainadh",
            designation: "Flutter Developer",
            image: saiNadh_Img
        },
        {
            no: 12,
            name: "Kishore",
            designation: "Frontend-Developer",
            image: kishore_img
        },
        {
            no: 13,
            name: "Satyendra Kumar",
            designation: "Full stack-Developer",
            image: satya_img
        },
        {
            no: 14,
            name: "Venkatesh",
            designation: "Backend-Developer",
            image: venkatesh_img
        },
        {
            no: 15,
            name: "Chandu Venkata Venu",
            designation: "Frontend-Developer",
            image: venu_img
        },
        {
            no: 16,
            name: "Umesh",
            designation: "Operational Executive",
            image: umesh_Img
        },
        {
            no: 17,
            name: "Abdul Razzak",
            designation: "Backend-Developer",
            image: razzak_img
        },
        {
            no: 18,
            name: "Suresh",
            designation: "Chatbot-Developer",
            image: suresh_img
        },
        {
            no: 19,
            name: "Lalith Kumar",
            designation: "Flutter-Developer",
            image: lalith_img
        },
        {
            no: 20,
            name: "Nazmul",
            designation: "Backend-Developer",
            image: nazmul_img
        },
        {
            no: 21,
            name: "Billal",
            designation: "Frontend-Developer",
            image: billal_img
        },
        {
            no: 22,
            name: "Mohd Luqman",
            designation: "Flutter-Developer",
            image: luqman_img
        },
        {
            no: 23,
            name: "Kush",
            designation: "Flutter-Developer",
            image: kush_img
        },
        {
            no: 24,
            name: "Priyanka",
            designation: "Frontend-Developer",
            image: priyanka_img
        },
        {
            no: 25,
            name: "Kusuma B",
            designation: "Wordpress-Developer",
            image: KusumaB_img
        },
        {
            no: 26,
            name: "Sandhya",
            designation: "UI/UX Designer",
            image: sandhya_Img
        },
        {
            no: 27,
            name: "Chaitra",
            designation: "Operational Executive",
            image: chaitra_img
        },
        {
            no: 28,
            name: "Kusuma T",
            designation: "Digital Marketing",
            image: kusumaT_Img
        },
        {
            no: 29,
            name: "Hari Krishna",
            designation: "Backend-Developer",
            image: hariKrishna_img
        },
        {
            no: 30,
            name: "Tharun",
            designation: "Backend-Developer",
            image: tarun_img
        },
        {
            no: 31,
            name: "Aditya",
            designation: "Digital Marketing",
            image: aditya_img
        },
        {
            no: 32,
            name: "Rasagnya",
            designation: "Jr Project Co-Ordinator",
            image: rasagnya_img
        },
    ]

    const handleHover = (no) => {
        // console.log("Element Hovered", no);
        setHoverElement((prev) => ({
            // ...prev,
            [no]: true
        }));
    }

    const handleMouseLeave = (no) => {
        setHoverElement((prev) => ({
            // ...prev,
            [no]: false
        }));
    }

    return (
        <div className='flex items-start flex-wrap justify-center gap-8 px-[2rem] md:px-[5rem] py-[2rem]'>
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
                        loading='lazy'
                        placeholder='blur'
                    />
                    <div className="left-0 w-full overflow-hidden rounded-b-lg">
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
