import React from 'react'

export default function JoinSkygoalToday() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-[80%] bg-[#2A2742] rounded-3xl py-[4rem]'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <h3 className='text-white text-3xl'>Join Skygoal today!</h3>
                    <div className='text-white text-xl'>
                        <p className='text-center'>Sign up to receive updates from</p>
                        <p className='text-center'>us, and be the first to know about sales, promotions and more.</p>
                    </div>
                    <div className='w-full px-[4rem] flex items-center'>
                        <input
                            type="email"
                            className='w-full outline-none px-6 py-4 bg-white rounded-bl-xl rounded-tl-xl'
                            placeholder='Enter your Email'
                            required
                        />
                        <button
                            type='submit'
                            className='font-medium text-white bg-[#D94B62] rounded-br-xl rounded-tr-xl px-8 py-4 cursor-pointer'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
