import React from 'react';
import ejoyShopImg from '../../assets/ejoyShop-img.png';
import lvReddyImg from '../../assets/lvReddy-img.png';
import eazyRefundImg from '../../assets/eazyRefund-img.png';
import floDesignImg from '../../assets/floDesign-img.png';
import letEducateImg from '../../assets/letEducate-img.png';
import vaniSweetsImg from '../../assets/vaniSweets-img.png';
import lassiStoryImg from '../../assets/lassiStory-img.png';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

export default function SomeOfOurClients() {

    const someOfOurClientImgs = [
        {
            no: 1,
            img: ejoyShopImg,
            alt: ejoyShopImg
        },
        {
            no: 2,
            img: lvReddyImg,
            alt: lvReddyImg
        },
        {
            no: 3,
            img: eazyRefundImg,
            alt: eazyRefundImg
        },
        {
            no: 4,
            img: floDesignImg,
            alt: floDesignImg
        },
        {
            no: 5,
            img: letEducateImg,
            alt: letEducateImg
        },
        {
            no: 6,
            img: vaniSweetsImg,
            alt: vaniSweetsImg
        },
        {
            no: 7,
            img: lassiStoryImg,
            alt: lassiStoryImg
        },
        // {
        //     no: 8,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 9,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 10,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 11,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 12,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 13,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 14,
        //     img: ejoyShopImg,
        // },
        // {
        //     no: 15,
        //     img: ejoyShopImg,
        // },
    ]

    return (
        <div>
            <h4 className='font-bold text-3xl text-center pt-4 text-[#00000099]'>Some of Our Clients</h4>
            <div className='py-[2rem]'>
                <Marquee
                    pauseOnHover={true}
                    speed={120}
                    gradient={true}
                >
                    {someOfOurClientImgs?.map((item) => (
                        <Image
                            key={item?.no}
                            className=''
                            src={item?.img}
                            alt={item?.alt}
                            width={250}
                            height={200}
                            loading='lazy'
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
