import React from 'react';

const CustomThreeDotsLoader = () => {
    return (
        <div className="flex justify-center items-center gap-1">
            <span className="w-[10px] h-[10px] bg-[#4F4B6A] rounded-full animate-dot-bounce-scale"></span>
            <span
                className="w-[10px] h-[10px] bg-[#4F4B6A] rounded-full animate-dot-bounce-scale"
                style={{ animationDelay: "0.2s" }}
            ></span>
            <span
                className="w-[10px] h-[10px] bg-[#4F4B6A] rounded-full animate-dot-bounce-scale"
                style={{ animationDelay: "0.4s" }}
            ></span>
        </div>
    );
};

export default CustomThreeDotsLoader;
