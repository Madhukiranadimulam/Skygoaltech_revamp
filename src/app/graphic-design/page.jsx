import React from 'react';
import graphicImg from '../../assets/graphicDesign-img.jpg';
import BreadCrumb from '../Components/BreadCrumb';

export default function page() {

    return (
        <>
            <div className="w-full mt-[5.2rem] h-[70vh] xl:h-[80vh]">
                <img
                    src={graphicImg.src}
                    alt="Mobile App"
                    className="w-screen h-full object-cover"
                />
            </div>
            <div className='px-[5rem] my-[3rem] max-md:px-[2rem]'>
                <div className='pb-[1rem]'>
                    <BreadCrumb />
                </div>
                <div>
                    <h3 className='text-xl font-bold md:text-2xl'>Graphic Design Services by SkyGoalTech</h3>
                    <p className='pt-3'>Transforming Ideas into Visual Impact</p>
                    <div className='pl-[2rem]'>
                        <p className='py-4 leading-8'>In today’s digital world, strong visuals are key to capturing attention and building a memorable brand. At <strong>SkyGoalTech</strong>, we offer professional <strong>graphic design services</strong> that go beyond looks—we focus on creating visuals that communicate your message clearly and connect with your audience.</p>

                        <p className='pb-4 leading-8'>Whether you're launching a new business or refreshing an existing brand, our graphic design solutions are built to deliver real impact. From logos to marketing materials, our designs are crafted to tell your story and make your brand stand out.</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl'>Why Choose SkyGoalTech?</h3>
                    <div className='pl-[2rem]'>

                        <p className='py-4 leading-8'>We’re more than just designers—we’re strategic partners who care about your success. As a leading <strong>graphic design company in Hyderabad</strong>, we combine creativity with purpose to bring your vision to life. Every design we create is backed by research, industry insights, and your business goals.</p>

                        <p>Here’s why businesses choose us:</p>
                        <ul className='list-disc pl-4 leading-8'>

                            <li><strong>Creative Strategy:</strong> We start with understanding your brand, audience, and goals.</li>

                            <li><strong>Custom Designs:</strong> No templates—only original designs tailored for your brand.</li>

                            <li><strong>Skilled Team:</strong> Our experienced designers bring fresh ideas and proven expertise.</li>

                            <li><strong>Full Support:</strong> We guide you from concept to delivery, ensuring every detail is perfect.</li>

                            <li><strong>Quality & Consistency:</strong> Your brand will look great across all platforms and materials.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Our Graphic Design Services</h3>
                    <div className='pl-[2rem]'>
                        <p>We offer a wide range of graphic design solutions to match your unique business needs:</p>
                    </div>
                    <div className='pl-[2rem] py-4'>
                        <ul className='list-disc leading-8'>

                            <li>Logo Design</li>

                            <li>Business Cards & Stationery</li>

                            <li>Brochures & Flyers</li>

                            <li>Social Media Graphics</li>

                            <li>Brand Identity Kits</li>

                            <li>Packaging Design</li>

                            <li>Infographics & Presentations</li>

                        </ul>
                    </div>
                    <p className='leading-8'>Whether you need a one-time design or ongoing creative support, SkyGoalTech has you covered.</p>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Best Logo Design Services in Hyderabad</h3>
                    <p className='pb-3 leading-8'>Your logo is the face of your brand—it needs to be unique, professional, and timeless. At <strong>SkyGoalTech</strong>, we deliver the <strong>best logo design services in Hyderabad</strong>, blending creativity with your brand’s values. Our logos are:</p>
                    <ul className='pl-[2rem] list-disc leading-8'>
                        <li>Memorable and meaningful</li>
                        <li>Scalable for digital and print</li>
                        <li>Designed to reflect your industry and audience</li>
                        <li>From minimalist icons to bold emblems, we create logos that make a lasting impression.</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Local Expertise, Global Quality</h3>
                    <p className='pb-3 leading-8'>As a <strong>graphic design company in Hyderabad</strong>, we understand local business needs and cultural preferences. This helps us create designs that resonate with your audience while maintaining international design standards.</p>
                </div>
                <p>With experience across industries like tech, education, retail, and healthcare, our team knows how to adapt and deliver design solutions that work.</p>
            </div>
        </>
    )
}
