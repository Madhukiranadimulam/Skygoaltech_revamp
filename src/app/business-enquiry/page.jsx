import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';

export default function page() {
    return (
        <div className='mt-[-7rem] ml-[2rem]'>
            <BreadCrumb />
            <div className='px-[6rem] pt-[3rem]'>
                <header className='text-[34px] font-semibold'>Business Enquiry</header>
                <div className='w-full pt-4 flex items-start justify-between gap-[3rem]'>
                    <div className='w-4/5 bg-[#4F4B6A] text-white rounded-xl'>
                        <div className='flex flex-col justify-between gap-6 px-[3rem] py-[1rem]'>
                            <div className='space-y-1'>
                                <p className='text-xl font-semibold'>India</p>
                                <p className='text-sm font-normal'>PLOT NO: 75, 1ST FLOOR, PVKR ELITE,</p>
                                <p className='text-sm font-normal'>LUMBINI AVENUE ENCLAVE, Gachibowli,</p>
                                <p className='text-sm font-normal'>K.V.Rangareddy, Seri Lingampally,</p>
                                <p className='text-sm font-normal'>Telangana, India, 500032.</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xl font-semibold'>United states</p>
                                <p className='text-sm font-normal'>16192 Coastal Highway,</p>
                                <p className='text-sm font-normal'>Lewes, DE 19958,</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xl font-semibold'>United Kingdom</p>
                                <p className='text-sm font-normal'>20-22 Wenlock Road London,</p>
                                <p className='text-sm font-normal'>N1 7GU.</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="email">Email Us:</label>
                                <span>info@skygoaltech.com</span>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
