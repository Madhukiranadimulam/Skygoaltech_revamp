import React from 'react';
import mobileAppImg from '../../assets/mobileDev-img.jpg';
import BreadCrumb from '../Components/BreadCrumb';

export default function page() {

    return (
        <>
            <div className="w-full mt-[5.2rem] h-[70vh] xl:h-[80vh]">
                <img
                    src={mobileAppImg.src}
                    alt="Mobile App"
                    className="w-screen h-full object-cover"
                />
            </div>
            <div className='px-[5rem] my-[3rem] max-md:px-[2rem]'>
                <div className='pb-[1rem]'>
                    <BreadCrumb />
                </div>
                <div>
                    <h3 className='text-xl font-bold md:text-2xl'>Website Development</h3>
                    <div className='pl-[2rem]'>
                        <p className='py-4 leading-8'>At <strong>SkyGoalTech</strong>, we believe your website should do more than just exist—it should work for your business. That’s why we create websites that are fast, secure, responsive, and designed to grow with you. Whether you’re launching a new brand or updating an old site, we build custom web solutions that look great and perform even better.
                        </p>
                        <p className='pb-4 leading-8'> As a <strong>leading web development company in Hyderabad</strong>, we focus on creating websites that align with your business goals. Every website we build is designed with a clean layout, user-friendly interface, and optimized structure to help you stand out online. From simple business websites to complex e-commerce platforms, we deliver results-driven web development services.</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Why Choose SkyGoalTech?</h3>
                    <p className='leading-8 pb-2'>We don’t just develop websites—we build digital solutions that help your business succeed. Here’s what makes us different:</p>
                    <ul className='pl-[2rem] list-disc leading-8'>
                        <li><strong>Custom Website Development: </strong>We build every site from scratch based on your goals—no templates or shortcuts.</li>
                        <li><strong>Responsive Design: </strong>Your website will work perfectly on mobile, tablet, and desktop devices.</li>
                        <li><strong>SEO-Friendly Structure: </strong>We use clean code and smart layouts to improve your search engine visibility.</li>
                        <li><strong>Fast Load Speeds: </strong>Optimized performance ensures visitors stay longer and convert better.</li>
                        <li><strong>Strong Security: </strong>We follow the latest security practices to protect your data and your users.</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Our Web Development Services</h3>
                    <p>We offer a full range of web development services to meet the needs of businesses of all sizes, including:</p>
                    <ul className='list-disc leading-8 pl-[2rem] py-4'>

                        <li>Custom Website Development</li>

                        <li>E-Commerce Website Development</li>

                        <li>Corporate & Portfolio Websites</li>

                        <li>CMS Development (WordPress, Shopify, etc.)</li>

                        <li>Landing Page Design & Development</li>

                        <li>Web Application Development</li>

                        <li>Website Maintenance & Support</li>

                    </ul>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Our Approach</h3>
                    <p className='leading-8'>We start by understanding your business, target audience, and goals. This helps us design websites that deliver real value. Our process is collaborative, transparent, and focused on results. We use the latest technologies to ensure your website is modern, fast, and secure.</p>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Why Businesses Trust Us</h3>
                    <span>Clients choose SkyGoalTech for:</span>
                    <ul className='list-disc leading-8 pl-[2rem] py-4'>

                        <li>Strategic planning and clear project milestones</li>

                        <li>Agile development that adapts to your needs</li>

                        <li>Open and honest communication</li>

                        <li>Post-launch support and maintenance</li>

                        <li>Affordable pricing without compromising quality</li>

                    </ul>
                    <p className='leading-8'>With experience across industries like e-commerce, healthcare, education, finance, real estate, and more, we deliver web solutions that fit your specific business needs.</p>
                </div>

            </div>
        </>
    );
}
