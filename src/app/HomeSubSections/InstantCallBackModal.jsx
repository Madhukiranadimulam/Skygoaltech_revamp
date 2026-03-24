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

    const stateOwnerMap = [
        {
            value: "1230680000000444001", // Chandu
            name: "Delhi",
        },
        {
            value: "1230680000000445406", // Murthy
            name: "Andhra Pradesh",
        },
        {
            value: "1230680000000600001", // Janaki Ram
            name: "Telangana"
        },
    ];

    const usersMap = [
        { state: "Andhra Pradesh", value: "" },  // Janaki Ram
        { state: "Arunachal Pradesh", value: "" }, // Ritika
        { state: "Assam", value: "" }, // Ritika
        { state: "Bihar", value: "" }, // Ritika
        { state: "Chhattisgarh", value: "" }, // Ritika
        { state: "Goa", value: "" }, // Ritika
        { state: "Gujarat", value: "" }, // Ritika
        { state: "Haryana", value: "" }, // Ritika
        { state: "Himachal Pradesh", value: "" }, // Ritika
        { state: "Jharkhand", value: "" }, // Ritika
        { state: "Karnataka", value: "" }, // Janaki Ram
        { state: "Kerala", value: "" }, // Janaki Ram
        { state: "Madhya Pradesh", value: "" }, // Ritika
        { state: "Maharashtra", value: "" }, // Ritika
        { state: "Manipur", value: "" }, // Ritika
        { state: "Meghalaya", value: "" }, // Ritika
        { state: "Mizoram", value: "" }, // Ritika
        { state: "Nagaland", value: "" }, // Ritika
        { state: "Odisha", value: "" }, // Ritika
        { state: "Punjab", value: "" }, // Ritika
        { state: "Rajasthan", value: "" }, // Ritika
        { state: "Sikkim", value: "" }, // Ritika
        { state: "Tamil Nadu", value: "" }, // Janaki Ram
        { state: "Telangana", value: "" }, // Janaki Ram
        { state: "Tripura", value: "" }, // Ritika
        { state: "Uttar Pradesh", value: "" }, // Ritika
        { state: "Uttarakhand", value: "" }, // Ritika
        { state: "West Bengal", value: "" }, // Ritika

        // Union Territories
        { state: "Andaman and Nicobar Islands", value: "" }, // Ritika
        { state: "Chandigarh", value: "" }, // Ritika
        { state: "Dadra and Nagar Haveli and Daman and Diu", value: "" }, // Ritika
        { state: "Delhi", value: "" }, // Ritika
        { state: "Jammu and Kashmir", value: "" }, // Ritika
        { state: "Ladakh", value: "" }, // Ritika
        { state: "Lakshadweep", value: "" }, // Ritika
        { state: "Puducherry", value: "" }, // Ritika
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
                const matched = stateOwnerMap?.find((m) => m?.value === item?.id);
                // console.log("Matched", matched);
                return {
                    value: matched?.value,
                    label: matched?.name,
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
