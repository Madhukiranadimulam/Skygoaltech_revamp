import React from 'react';

const CustomThreeDotsLoader = () => {
    return (
        <div className="flex justify-center items-center gap-1">
            <span className="w-2.5 h-2.5 bg-[#4F4B6A] rounded-full dot-bounce"></span>
            <span
                className="w-2.5 h-2.5 bg-[#4F4B6A] rounded-full dot-bounce"
                style={{ animationDelay: "0.2s" }}
            ></span>
            <span
                className="w-2.5 h-2.5 bg-[#4F4B6A] rounded-full dot-bounce"
                style={{ animationDelay: "0.4s" }}
            ></span>
        </div>
    );
};

export default CustomThreeDotsLoader;
