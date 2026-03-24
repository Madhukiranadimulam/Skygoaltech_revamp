import React from 'react'

export default function ErrorMessage({ message = "*This field is required." }) {
    return (
        <p className='text-red-600 font-semibold text-[13px]'>{message}</p>
    );
};
