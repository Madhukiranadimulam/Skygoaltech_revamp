import React from 'react'

export default function CompanyLocationMap() {
    return (
        <div className='w-full flex justify-center items-center'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.57626400816!2d78.3744692!3d17.432111400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9366d1c7fd1f%3A0x71232504211af9f8!2sSkygoal%20Innova%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1747735946301!5m2!1sen!2sin"
                width=""
                height=""
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: "10px" }}
                className='w-full h-[300px] mx-[8rem] max-lg:ml-[2rem] max-lg:mr-[4rem]'
            ></iframe>
        </div>
    )
}
