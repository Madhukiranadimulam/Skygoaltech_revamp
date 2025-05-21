import React from 'react'

export default function JoinSkygoalToday() {
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
                            className='w-full outline-none px-6 py-4 bg-white rounded-bl-xl rounded-tl-xl max-md:px-3 max-md:py-[10px]'
                            placeholder='Enter your Email'
                        />
                        <button
                            type='submit'
                            className='font-medium text-white bg-[#D94B62] rounded-br-xl rounded-tr-xl px-8 py-4 cursor-pointer max-md:px-4 max-md:py-[10px]'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
