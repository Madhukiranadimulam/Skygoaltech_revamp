'use client';

import InstantCallBackModal from '@/app/HomeSubSections/InstantCallBackModal';
import React, { useState } from 'react';
import { MdPhoneCallback } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

export default function InstantCallBackWidget() {

    const [widgetOpen, setWidgetOpen] = useState(false);

    const handleWidget = () => {
        setWidgetOpen((prev) => !prev);
    }

    return (
        <>
            <div className='fixed bottom-8 right-8 z-100 max-md:bottom-4 max-md:right-4'>
                {widgetOpen ?
                    <RxCross1
                        className='text-white bg-[#D94B62] rounded-full w-[70px] h-[70px] p-4 cursor-pointer'
                        onClick={handleWidget}
                    />
                    :
                    <MdPhoneCallback
                        className='text-white bg-[#D94B62] rounded-full w-[70px] h-[70px] p-4 cursor-pointer'
                        onClick={handleWidget}
                    />
                }
            </div>
            {widgetOpen && (
                <InstantCallBackModal
                    setWidgetOpen={setWidgetOpen}
                    widgetOpen={widgetOpen}
                />
            )}
        </>
    )
}
