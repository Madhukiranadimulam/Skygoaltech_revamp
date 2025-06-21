'use client';

import React, { useEffect, useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import { useForm, Controller } from 'react-hook-form';
import ErrorMessage from '../../shared/ErrorMessage.jsx';
import toast, { Toaster } from 'react-hot-toast';
import CustomThreeDotsLoader from '@/shared/CustomThreeDotsLoader';

export default function page() {

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset
    } = useForm();

    const servicesOptions = [
        {
            name: "Web Development",
            value: "web development"
        },
        {
            name: "E-Commerce Development",
            value: "eCommerce development"
        },
        {
            name: "Graphic Design",
            value: "graphic design"
        },
        {
            name: "Mobile App Development",
            value: "mobile app development"
        },
        {
            name: "SaaS Development",
            value: "saas development"
        },
        {
            name: "Consultancy Services",
            value: "consultancy services"
        },
        {
            name: "Corporate Services",
            value: "corporate services"
        },
        {
            name: "Cloud Solutions",
            value: "cloud solutions"
        },
        {
            name: "Edu-Tech Solutions",
            value: "edu-tech solutions"
        },
        {
            name: "Others",
            value: "others"
        }
    ]

    const selectedService = watch('service');
    // console.log("Selected Service", selectedService)

    const onSubmit = async (data) => {
        console.log("Data from form", data);
        const formData = {
            name: data?.name,
            email: data?.email,
            phone: data?.mobileNumber,
            designation: data?.designation,
            companyName: data?.companyName,
            selectedService: data?.service,
            otherService: data?.service === "others" ? data?.otherService : "",
            message: data?.message
        };
        try {
            setIsLoading(true);
            const response = await fetch('/api/sendBusinessFormToCliq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const errorResult = await response.json();
                toast(errorResult?.message);
                throw new Error(errorResult?.message);
            }
            const result = await response.json();
            console.log("Form data sent", result);
            toast(result?.message);
        } catch (error) {
            console.error("Error while sending data", error);
        }
        setIsLoading(false);
        reset();
    }

    return (
        <div className='mt-[-7rem] ml-[2rem] max-lg:ml-[0rem]'>
            <BreadCrumb />
            <div className='px-[6rem] pt-[3rem] max-lg:pr-[2rem] max-lg:pl-[2rem]'>
                <h3 className='text-[34px] font-semibold'>Business Enquiry</h3>
                <div className='w-full pt-4 flex items-start justify-between gap-[3rem] max-lg:flex-col'>
                    <div className='w-4/5 bg-[#393559] text-white rounded-xl max-lg:w-full max-lg:mb-[4rem] max-lg:order-2'>
                        <div className='flex flex-col justify-between gap-6 px-[3rem] py-[4rem] max-lg:flex max-lg:flex-row max-lg:items-start max-lg:flex-wrap max-sm:px-[1.5rem]'>
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
                    <div className='w-full max-lg:order-1'>
                        <h4 className='font-medium text-xl pb-4'>Fill Your Details</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-4'>
                                <div className='w-full flex items-center gap-4 max-sm:flex-wrap'>
                                    <div className='w-full'>
                                        <input
                                            className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                            type='text'
                                            placeholder='Name'
                                            name='Name'
                                            {...register('name', {
                                                required: "*This field is required"
                                            })}
                                        />
                                        {errors?.name &&
                                            <ErrorMessage />
                                        }
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                            type='email'
                                            placeholder='Email Address'
                                            name='email'
                                            {...register('email', {
                                                required: "*This field is required"
                                            })}
                                        />
                                        {errors?.email &&
                                            <ErrorMessage />
                                        }
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 max-sm:flex-wrap'>
                                    <div className='w-full'>
                                        <input
                                            className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                            type='text'
                                            inputMode="numeric"
                                            placeholder='Mobile Number'
                                            name='number'
                                            {...register('mobileNumber', {
                                                required: "*This field is required",
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "Only numeric values are allowed",
                                                },
                                                minLength: {
                                                    value: 10,
                                                    message: "Must be at least 10 digits",
                                                },
                                            })}
                                        />
                                        {errors?.mobileNumber &&
                                            <p className='text-red-400 font-medium text-[13px]'>{errors?.mobileNumber?.message}</p>
                                        }
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                            type='text'
                                            placeholder='Designation'
                                            name='designation'
                                            {...register('designation', {
                                                required: "*This field is required"
                                            })}
                                        />
                                        {errors?.designation &&
                                            <ErrorMessage />
                                        }
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 max-sm:flex-wrap'>
                                    <div className='w-full'>
                                        <input
                                            className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                            type='text'
                                            placeholder='Company Name'
                                            name='company'
                                            {...register('companyName', {
                                                required: "*This field is required"
                                            })}
                                        />
                                        {errors?.companyName &&
                                            <ErrorMessage />
                                        }
                                    </div>
                                    <div className='w-full'>
                                        <Controller
                                            name="service"
                                            control={control}
                                            rules={{ required: "*This field is required" }}
                                            render={({ field }) => (
                                                <>
                                                    <select
                                                        {...field}
                                                        className='w-full outline-none border border-gray-400 rounded-md px-3 py-2'
                                                    >
                                                        <option hidden>Select Service</option>
                                                        {servicesOptions?.map((item, index) => (
                                                            <option value={item?.value} key={index}>{item?.name}</option>
                                                        ))}
                                                    </select>
                                                </>
                                            )}
                                        />
                                        {errors?.service && (
                                            <ErrorMessage />
                                        )}
                                    </div>
                                </div>
                                <div className='flex items-start gap-4 max-sm:flex-wrap'>
                                    {selectedService === 'others' &&
                                        <div className='w-full'>
                                            <input
                                                className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                                type='text'
                                                placeholder='Your Service'
                                                name='otherService'
                                                {...register('otherService', {
                                                    required: "*This field is required"
                                                })}
                                            />
                                            {errors?.otherService &&
                                                <ErrorMessage />
                                            }
                                        </div>
                                    }
                                    <div className='w-full'>
                                        <textarea
                                            className='w-full outline-none border border-gray-400 rounded-md px-4 py-2'
                                            placeholder='Message'
                                            name='message'
                                            rows={5}
                                            {...register('message', {
                                                required: "*This field is required"
                                            })}
                                        />
                                        {errors?.message &&
                                            <ErrorMessage />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end pt-[5rem] max-lg:pt-[2rem]'>
                                {isLoading ?
                                    <div>
                                        <CustomThreeDotsLoader />
                                    </div>
                                    :
                                    <button
                                        className='text-black hover:text-white border border-gray-400 rounded-lg text-base text-center px-12 py-3 hover:bg-[#4F4B6A] cursor-pointer'
                                        type='submit'
                                    >
                                        Submit
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}
