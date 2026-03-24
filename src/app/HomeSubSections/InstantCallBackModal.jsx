'use client';

import ErrorMessage from '../../shared/ErrorMessage.jsx';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
// import callBackFormImg from '../../assets/callBackForm-img.png';
// import Image from 'next/image.js';
import { RxCross1 } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify';
import CustomThreeDotsLoader from '../../shared/CustomThreeDotsLoader.jsx';
import Select from "react-select";
import { reactSelectCustomStyles } from '@/shared/customStyles.js';

export default function InstantCallBackModal({ setWidgetOpen, widgetOpen, from }) {

    const [usersList, setUsersList] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control
    } = useForm({
        defaultValues: {
            selectedState: null,
        }
    });

    const USERS = {
        RITIKA: "330982000001583002",
        JANAKI: "330982000001583031",
    };

    const usersMap = [
        { state: "Andhra Pradesh", value: USERS.JANAKI },
        { state: "Arunachal Pradesh", value: USERS.RITIKA },
        { state: "Assam", value: USERS.RITIKA },
        { state: "Bihar", value: USERS.RITIKA },
        { state: "Chhattisgarh", value: USERS.RITIKA },
        { state: "Goa", value: USERS.RITIKA },
        { state: "Gujarat", value: USERS.RITIKA },
        { state: "Haryana", value: USERS.RITIKA },
        { state: "Himachal Pradesh", value: USERS.RITIKA },
        { state: "Jharkhand", value: USERS.RITIKA },
        { state: "Karnataka", value: USERS.JANAKI },
        { state: "Kerala", value: USERS.JANAKI },
        { state: "Madhya Pradesh", value: USERS.RITIKA },
        { state: "Maharashtra", value: USERS.RITIKA },
        { state: "Manipur", value: USERS.RITIKA },
        { state: "Meghalaya", value: USERS.RITIKA },
        { state: "Mizoram", value: USERS.RITIKA },
        { state: "Nagaland", value: USERS.RITIKA },
        { state: "Odisha", value: USERS.RITIKA },
        { state: "Punjab", value: USERS.RITIKA },
        { state: "Rajasthan", value: USERS.RITIKA },
        { state: "Sikkim", value: USERS.RITIKA },
        { state: "Tamil Nadu", value: USERS.JANAKI },
        { state: "Telangana", value: USERS.JANAKI },
        { state: "Tripura", value: USERS.RITIKA },
        { state: "Uttar Pradesh", value: USERS.RITIKA },
        { state: "Uttarakhand", value: USERS.RITIKA },
        { state: "West Bengal", value: USERS.RITIKA },

        // Union Territories
        { state: "Andaman and Nicobar Islands", value: USERS.RITIKA },
        { state: "Chandigarh", value: USERS.RITIKA },
        { state: "Dadra and Nagar Haveli and Daman and Diu", value: USERS.RITIKA },
        { state: "Delhi", value: USERS.RITIKA },
        { state: "Jammu and Kashmir", value: USERS.RITIKA },
        { state: "Ladakh", value: USERS.RITIKA },
        { state: "Lakshadweep", value: USERS.RITIKA },
        { state: "Puducherry", value: USERS.RITIKA },
    ];

    const fetchCRMUsers = async () => {
        try {
            const response = await fetch("/api/crm-users", {
                method: "GET",
            });
            if (!response.ok) {
                const errorResult = await response.json();
                throw new Error(errorResult?.message);
            };
            const result = await response.json();
            console.log("CRM Users", result);
            const formattedUsers = result?.data?.map((item) => {
                const matched = usersMap?.find((m) => m?.value === item?.id);
                // console.log("Matched", matched);
                return {
                    value: matched?.value,
                    label: matched?.state,
                };
            });
            // console.log("Formatted Users", formattedUsers);
            setUsersList(formattedUsers);
        } catch (err) {
            console.log("Error while fetching crm users", err);
        }
    };

    useEffect(() => {
        fetchCRMUsers();
    }, []);

    const handleCancelModal = () => {
        setWidgetOpen(false);
    };

    const onSubmit = async (data) => {
        // console.log("Data from HomePage", data);
        const formData = {
            name: data?.name,
            email: data?.email,
            phone: data?.mobileNumber,
            id: data?.selectedState?.value,
        };
        try {
            const response = await fetch('/api/zoho-callBack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const errorResult = await response.json();
                toast.error(errorResult?.message);
                throw new Error(errorResult?.message);
            };
            const result = await response.json();
            // console.log("Form data sent", result);
            toast.success(result?.message);
            reset();
        } catch (error) {
            console.error("Error while sending data", error);
            toast.error("Something went wrong");
        }
    };

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

    useEffect(() => {
        if (widgetOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [widgetOpen]);

    return (
        <div
            className={`fixed z-100 ${from === "topNavigationBar" ? "w-full flex items-center justify-center inset-0 bg-black/50" : "bottom-[120px] right-5 max-md:right-0 max-md:bottom-0"}`}
        >
            <div className='bg-white w-[600px] shadow-md max-md:w-full rounded-lg px-6 pt-6 pb-10 outsideClick'>
                <div className={`w-full flex items-end justify-end`}>
                    <RxCross1 className='text-[1.5rem] cursor-pointer' onClick={handleCancelModal} />
                </div>
                <div className='pb-6'>
                    <h4 className='text-2xl max-lg:text-lg'>NEED A SERVICE?</h4>
                    <h3 className='text-3xl font-semibold max-lg:text-xl pt-2'>GET INSTANT CALL BACK</h3>
                </div>
                {/* <div className='w-full flex items-start justify-between gap-6 pt-4 max-lg:flex-col'> */}
                {/* <div className='w-full'> */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <input
                                className='outline-none w-full border border-gray-300 rounded-md text-sm px-3 py-2'
                                type='text'
                                placeholder='Name'
                                {...register("name", {
                                    required: "*This field is required"
                                })}
                            />
                            {errors?.name && <ErrorMessage />}
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
                            {errors?.mobileNumber && <ErrorMessage />}
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
                            {errors?.email && <ErrorMessage />}
                        </div>
                        <div>
                            <Controller
                                name='selectedState'
                                rules={{ required: "*This field is required." }}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        styles={reactSelectCustomStyles}
                                        options={usersList}
                                        placeholder="Select State"
                                    // isClearable
                                    >
                                    </Select>
                                )}
                            >
                            </Controller>
                            {errors?.selectedState && (
                                <ErrorMessage />
                            )}
                        </div>
                    </div>
                    <div className='mt-8 ml-auto'>
                        {isSubmitting ?
                            <>
                                <CustomThreeDotsLoader />
                            </>
                            :
                            <button
                                className='text-white bg-[#2A2742] px-10 py-2 rounded-md cursor-pointer'
                                disabled={isSubmitting}
                                type='submit'
                            >
                                Submit
                            </button>
                        }
                    </div>
                </form>
                {/* </div> */}
                {/* <div className='w-60 h-[170px] max-lg:w-full bg-[#2A2742] max-lg:order-1'>
                        <Image
                            src={callBackFormImg}
                            className='w-full h-full object-contain max-lg:w-full'
                            loading='eager'
                            alt='callBackFormImg'
                        />
                    </div> */}
                {/* </div> */}
            </div>
            <ToastContainer />
        </div>
    );
};
