'use client';

import ErrorMessage from '../../shared/ErrorMessage.jsx';
import React, { useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RxCross1 } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify';
import CustomThreeDotsLoader from '../../shared/CustomThreeDotsLoader.jsx';
import Select from "react-select";
import { reactSelectCustomStyles } from '@/shared/customStyles.js';
import ReCAPTCHA from 'react-google-recaptcha';

export default function InstantCallBackModal({ setWidgetOpen, widgetOpen, from }) {

    const recaptchaRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
        setValue
    } = useForm({
        defaultValues: {
            selectedState: null,
        }
    });

    const statesMap = [
        { label: "Andhra Pradesh", value: "Andhra Pradesh" },
        { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
        { label: "Assam", value: "Assam" },
        { label: "Bihar", value: "Bihar" },
        { label: "Chhattisgarh", value: "Chhattisgarh" },
        { label: "Goa", value: "Goa" },
        { label: "Gujarat", value: "Gujarat" },
        { label: "Haryana", value: "Haryana" },
        { label: "Himachal Pradesh", value: "Himachal Pradesh" },
        { label: "Jharkhand", value: "Jharkhand" },
        { label: "Karnataka", value: "Karnataka" },
        { label: "Kerala", value: "Kerala" },
        { label: "Madhya Pradesh", value: "Madhya Pradesh" },
        { label: "Maharashtra", value: "Maharashtra" },
        { label: "Manipur", value: "Manipur" },
        { label: "Meghalaya", value: "Meghalaya" },
        { label: "Mizoram", value: "Mizoram" },
        { label: "Nagaland", value: "Nagaland" },
        { label: "Odisha", value: "Odisha" },
        { label: "Punjab", value: "Punjab" },
        { label: "Rajasthan", value: "Rajasthan" },
        { label: "Sikkim", value: "Sikkim" },
        { label: "Tamil Nadu", value: "Tamil Nadu" },
        { label: "Telangana", value: "Telangana" },
        { label: "Tripura", value: "Tripura" },
        { label: "Uttar Pradesh", value: "Uttar Pradesh" },
        { label: "Uttarakhand", value: "Uttarakhand" },
        { label: "West Bengal", value: "West Bengal" },

        // Union Territories
        { label: "Andaman and Nicobar Islands", value: "Andaman and Nicobar Islands" },
        { label: "Chandigarh", value: "Chandigarh" },
        { label: "Dadra and Nagar Haveli and Daman and Diu", value: "Dadra and Nagar Haveli and Daman and Diu" },
        { label: "Delhi", value: "Delhi" },
        { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
        { label: "Ladakh", value: "Ladakh" },
        { label: "Lakshadweep", value: "Lakshadweep" },
        { label: "Puducherry", value: "Puducherry" },
    ];

    const handleCancelModal = () => {
        setWidgetOpen(false);
        recaptchaRef.current?.reset();
    };

    const onSubmit = async (data) => {
        // console.log("Data from HomePage", data);
        const formData = {
            name: data?.name,
            email: data?.email,
            phone: data?.mobileNumber,
            state: data?.selectedState?.value,
            source: "Skygoal Website",
            googleCaptchaToken: data?.captchaToken,
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
                toast.error(errorResult?.message || "Something went wrong.");
                throw new Error(errorResult?.message);
            };
            const result = await response.json();
            // console.log("Form data sent", result);
            toast.success(result?.message);
            reset();
            recaptchaRef.current.reset();
        } catch (error) {
            console.error("Error while sending data", error);
            // toast.error("Something went wrong");
        }
    };

    const handleOutsideClick = (event) => {
        const isClickedOutSide = event.target.closest(".outsideClick");
        // console.log("Is Clicked Out Side", isClickedOutSide)
        if (!isClickedOutSide) {
            setWidgetOpen(false);
            recaptchaRef.current?.reset();
            document.body.style.overflow = "auto";
        };
    };

    const formatNumber = (value) => {
        return value?.replace(/\D/g, "");
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
            <div className='bg-white w-[600px] shadow-md max-md:w-full rounded-lg px-6 pt-6 pb-10 outsideClick overflow-y-auto h-[470px]'>
                <div className={`w-full flex items-end justify-end`}>
                    <RxCross1 className='text-[1.5rem] cursor-pointer' onClick={handleCancelModal} />
                </div>
                <div className='pb-6'>
                    <h4 className='text-2xl max-lg:text-lg'>NEED A SERVICE?</h4>
                    <h3 className='text-3xl font-semibold max-lg:text-xl pt-2'>GET INSTANT CALL BACK</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div>
                            <input
                                className='outline-none w-full border border-gray-300 rounded-md text-sm px-3 py-2.5'
                                type='text'
                                placeholder='Name'
                                {...register("name", {
                                    required: "*This field is required"
                                })}
                            />
                            {errors?.name && (
                                <ErrorMessage />
                            )}
                        </div>
                        <div>
                            <input
                                className='outline-none w-full border border-gray-300 text-sm rounded-md px-3 py-2.5'
                                type='tel'
                                placeholder='Mobile Number'
                                {...register("mobileNumber", {
                                    required: "*This field is required",
                                    validate: (value) => {
                                        const cleanedNum = formatNumber(value);
                                        if (cleanedNum?.length !== 10 && cleanedNum?.length !== 12) {
                                            return "*Enter a valid number";
                                        };
                                        return true;
                                    }
                                })}
                                onInput={(e) => setValue("mobileNumber", e.target.value)}
                            />
                            {errors?.mobileNumber && (
                                <ErrorMessage message={errors?.mobileNumber?.message} />
                            )}
                        </div>
                        <div>
                            <input
                                className='outline-none w-full border border-gray-300 text-sm rounded-md px-3 py-2.5'
                                type='email'
                                placeholder='Email'
                                {...register("email", {
                                    required: "*This field is required"
                                })}
                            />
                            {errors?.email && (
                                <ErrorMessage />
                            )}
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
                                        options={statesMap}
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
                    <div className='flex flex-col gap-6'>
                        <div>
                            <Controller
                                control={control}
                                name='captchaToken'
                                rules={{ required: "*This field is required." }}
                                render={({ field }) => (
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
                                        onChange={(token) => field.onChange(token)}
                                        onExpired={() => field.onChange(null)}
                                        ref={recaptchaRef}
                                    />
                                )}
                            >
                            </Controller>
                            {errors?.captchaToken && (
                                <ErrorMessage />
                            )}
                        </div>
                        <div className='w-40'>
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
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};
