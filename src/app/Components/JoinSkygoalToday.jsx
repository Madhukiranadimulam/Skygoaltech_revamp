'use client';

import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function JoinSkygoalToday() {

    const [email, setEmail] = useState("");

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        if (email === "") {
            return;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = regex.test(email);
        if (validEmail) {
            try {
                const response = await fetch('/api/sendEmailofJoinSkyGoalTodayToCliq', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email }),
                });
                if (!response.ok) {
                    const errorResult = await response.json();
                    toast.error(errorResult?.message);
                    throw new Error(errorResult?.message);
                }
                const result = await response.json();
                console.log("Email sent", result);
                toast.success(result?.message);
            } catch (error) {
                console.error("Error while sending data", error);
            }
            setEmail("");
        } else {
            toast("Please Enter a Valid Email Address.");
        }
    }

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[80%] bg-[#2A2742] rounded-3xl py-[4rem] max-md:w-[90%]'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <h3 className='text-white text-3xl max-md:text-2xl'>Join Skygoal today!</h3>
                    <div className='text-white text-xl max-md:text-base max-sm:!text-sm'>
                        <p className='text-center'>Sign up to receive updates from</p>
                        <p className='text-center'>us, and be the first to know about sales, promotions and more.</p>
                    </div>
                    <div className='w-full px-[4rem] flex items-center max-sm:px-[1rem]'>
                        <input
                            type="email"
                            value={email}
                            className='w-full outline-none px-6 py-4 bg-white rounded-bl-xl rounded-tl-xl max-md:px-3 max-md:py-[10px]'
                            placeholder='Enter your Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='font-medium text-white bg-[#D94B62] rounded-br-xl rounded-tr-xl px-8 py-4 cursor-pointer max-md:px-4 max-md:py-[10px]'
                            onClick={handleSubmitEmail}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
