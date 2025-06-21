'use client';

import ErrorMessage from '../../shared/ErrorMessage.jsx';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import callBackFormImg from '../../assets/callBackForm-img.png';
import Image from 'next/image.js';
import { RxCross1 } from "react-icons/rx";

export default function InstantCallBackModal({ setWidgetOpen, widgetOpen }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleCancelModal = () => {
        setWidgetOpen(false);
        document.body.style.overflow = "auto";
    }

    const onSubmit = (data) => {
        console.log("Data from HomePage", data);
    }

    const handleOutsideClick = (event) => {
        const isClickedOutSide = event.target.closest(".outsideClick");
        // console.log("Is Clicked Out Side", isClickedOutSide)
        if (!isClickedOutSide) {
            setWidgetOpen(false);
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    if (widgetOpen) {
        document.body.style.overflow = widgetOpen ? "hidden" : "auto"
    }

    return (
        <div className='fixed z-100 bottom-[120px] right-5 max-md:right-0 max-md:bottom-0 max-md:w-full'>
            <div className='bg-white w-[450px] shadow-md max-md:w-full rounded-lg px-[2rem] py-[3rem] max-lg:py-[1.5rem] outsideClick'>
                <div className='w-full flex items-end justify-end md:hidden'>
                    <button className='cursor-pointer'>
                        <RxCross1 className='text-[1.5rem]' onClick={handleCancelModal} />
                    </button>
                </div>
                <div>
                    <h4 className='text-2xl max-lg:text-lg'>NEED A SERVICE?</h4>
                    <h3 className='text-3xl font-semibold max-lg:text-xl pt-2'>GET INSTANT CALL BACK</h3>
                </div>
                <div className='w-full flex items-start justify-between gap-[1rem] pt-4 max-lg:flex-col'>
                    <div className='w-full max-lg:order-2'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <input
                                        className='outline-none w-full border border-gray-300 rounded-md text-sm px-3 py-2'
                                        type='text'
                                        placeholder='Name'
                                        {...register("name", {
                                            required: "*This field is required"
                                        })}
                                    />
                                    {
                                        errors?.name && <ErrorMessage />
                                    }
                                </div>
                                <div>
                                    <input
                                        className='outline-none w-full border border-gray-300 text-sm rounded-md px-3 py-2'
                                        type='number'
                                        placeholder='Mobile Number'
                                        {...register("mobileNumber", {
                                            required: "*This field is required"
                                        })}
                                    />
                                    {
                                        errors?.mobileNumber && <ErrorMessage />
                                    }
                                </div>
                                <div>
                                    <input
                                        className='outline-none w-full border border-gray-300 text-sm rounded-md px-3 py-2'
                                        type='email'
                                        placeholder='Email'
                                        {...register("email", {
                                            required: "*This field is required"
                                        })}
                                    />
                                    {
                                        errors?.email && <ErrorMessage />
                                    }
                                </div>
                            </div>
                            <div className='mt-8'>
                                <button
                                    className='text-white bg-[#2A2742] px-10 py-2 rounded-md cursor-pointer'
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-[200px] h-[165px] max-lg:w-full bg-[#2A2742] max-lg:order-1'>
                        <Image
                            src={callBackFormImg}
                            // height={250}
                            // width={200}
                            className='w-[190px] h-[160px] object-contain max-lg:w-full'
                            loading='eager'
                            alt='callBackFormImg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
