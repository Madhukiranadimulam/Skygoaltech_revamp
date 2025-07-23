import React from 'react';
import serviceImg from '../../assets/eCommerce-img.jpg';
import BreadCrumb from '../Components/BreadCrumb';

export default function page() {

    return (
        <>
            <div className="w-full mt-[5.2rem] h-[70vh] xl:h-[80vh] ">
                <img
                    src={serviceImg.src}
                    alt="Mobile App"
                    className="w-screen h-full object-cover"
                />
            </div>
            <div className='px-[5rem] my-[3rem] max-md:px-[2rem]'>
                <div className='pb-[1rem]'>
                    <BreadCrumb />
                </div>
                <div>
                    <h3 className='text-xl font-bold md:text-2xl'>E-Commerce Development</h3>
                    <div className='pl-[2rem]'>
                        <p className='py-4 leading-8'>In today’s digital world, having a strong online store is essential for any business. Customers prefer shopping online, and your business must meet them where they are. At <strong>SkyGoalTech</strong>, we help businesses build powerful and user-friendly e-commerce websites and apps that boost sales and improve customer experience.</p>

                        <p className='pb-4 leading-8'>Whether you're a startup launching your first online store or a growing company aiming to improve your platform, we provide tailored e-commerce solutions to meet your goals. Our focus is on creating fast, responsive, and visually appealing platforms that make shopping easy and enjoyable for your customers.</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl pt-4'>Why Choose SkyGoalTech?</h3>
                    <div className='pl-[2rem]'>

                        <p className='py-4 leading-8'>We understand that your e-commerce platform is more than just a website—it’s your online business engine. That’s why we focus on performance, user experience, and results. As a trusted <strong>e-commerce development company in Hyderabad</strong>, we go beyond building websites. We design digital solutions that help your business grow online.</p>

                        <p className='leading-8'>What sets us apart is our strategic and customer-focused approach. We don’t just develop what you ask—we guide you toward what your users truly need. Every project we work on is built with a clear focus on user behavior, business goals, and seamless functionality.</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Our E-Commerce Development Services</h3>
                    <p>Our end-to-end e-commerce services cover every part of your journey, from planning to launch and beyond:</p>
                    <ul className='list-disc leading-8 pl-[2rem] py-4'>

                        <li>Custom E-Commerce Website Development</li>

                        <li>E-Commerce App Development (Android & iOS)</li>

                        <li>Multi-Vendor Marketplace Solutions</li>

                        <li>Payment Gateway & Cart Integration</li>

                        <li>Headless Commerce & API Integration</li>

                        <li>Inventory & Order Management Systems</li>

                        <li>Admin Dashboard & CMS Integration</li>

                        <li>Speed Optimization & Scalability Planning</li>

                    </ul>
                    <p className='leading-8'>We create unified solutions that work across devices, helping you reach customers on mobile and desktop with ease.</p>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Technology We Use</h3>
                    <p>To build reliable and future-ready platforms, we use the latest technologies:</p>
                    <ul className='list-disc leading-8 pl-[2rem] py-4'>

                        <li>Shopify, WooCommerce.</li>

                        <li>React.js, Node.js, Next.js, TypeScript.</li>

                        <li>Flutter for App Development</li>

                        <li>AWS, Azure, GCP, and other cloud hosting solutions</li>

                    </ul>
                    <p className='leading-8'>This modern tech stack helps us build scalable and secure e-commerce platforms, whether it’s a boutique store or a large marketplace.</p>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Why We’re the Best</h3>

                    <p className='leading-8 pl-[2rem]'>
                        As one of the <strong>best e-commerce development companies in Hyderabad</strong>, our mission is to deliver solutions that drive results. We combine creativity, strategy, and technology to build digital commerce platforms that truly perform. At <strong>SkyGoalTech</strong>, we don’t just build stores—we build long-term partnerships focused on your success.
                    </p>

                </div>

            </div>
        </>
    )
}
