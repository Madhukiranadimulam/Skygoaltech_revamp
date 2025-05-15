'use client';

import ErrorMessage from '../../shared/ErrorMessage.jsx';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross1 } from "react-icons/rx";
import callBackFormImg from '../../assets/callBackForm-img.png';
import Image from 'next/image.js';

export default function InstantCallBackModal({ setModalOpen }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset
    } = useForm();

    const handleCancelModal = () => {
        setModalOpen(false);
        localStorage.setItem('modalShown', "false");
    }

    const onSubmit = (data) => {
        console.log("Data from HomePage", data);
    }

    const handleOutsideClick = (event) => {
        const isClickedOutSide = event.target.closest(".outsideClick");
        // console.log("Is Clicked Out Side", isClickedOutSide)
        if (!isClickedOutSide) {
            setModalOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <div className='bg-black/50 fixed flex items-center inset-0 z-100 justify-center w-full h-screen'>
            <div className='bg-white w-[650px] max-lg:w-[400px] rounded-lg px-[2rem] py-[3rem] outsideClick'>
                <div className='flex items-end justify-end'>
                    <RxCross1
                        className='cursor-pointer text-[1.5rem] icon-button'
                        onClick={handleCancelModal}
                    />
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
                                        className='outline-none w-full border border-gray-300 rounded-md px-3 py-2'
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
                                        className='outline-none w-full border border-gray-300 rounded-md px-3 py-2'
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
                                        className='outline-none w-full border border-gray-300 rounded-md px-3 py-2'
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
                            <div className='flex items-end justify-end mt-8'>
                                <button
                                    className='text-white bg-[#2A2742] px-10 py-2 rounded-md cursor-pointer'
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-[300px] h-[165px] max-lg:w-full bg-[#2A2742] max-lg:order-1'>
                        <Image
                            src={callBackFormImg}
                            // height={250}
                            // width={200}
                            className='w-[200px] h-[160px] object-cover max-lg:w-full max-lg:h-[150px] max-lg:object-contain'
                            loading='eager'
                            alt='callBackFormImg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
