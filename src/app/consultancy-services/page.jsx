import React from 'react';
import serviceImg from '../../assets/consultancyServices-img.jpg';
import BreadCrumb from '../Components/BreadCrumb';

export default function page() {

    return (
        <>
            <div className="w-full mt-[5.2rem] h-[70vh] xl:h-[80vh]">
                <img
                    src={serviceImg.src}
                    alt="consultancy-img"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='px-[5rem] my-[3rem] max-md:px-[2rem]'>
                <div className='pb-[1rem]'>
                    <BreadCrumb />
                </div>
                <div>
                    <h3 className='text-xl font-bold md:text-2xl'>Consultancy Services</h3>
                    <div className='pl-[2rem]'>
                        <p className='py-4 leading-8'>In today's fast-evolving digital and business landscape, the need for expert guidance is more critical than ever. At <strong>SkyGoalTech</strong>, we offer <strong>Consultancy Services</strong> designed to empower businesses with strategic insights, technical expertise, and scalable solutions. Whether you're a startup aiming to establish a solid foundation or a growing enterprise looking to optimize operations, our consultancy solutions are tailored to meet your unique goals. We don’t believe in one-size-fits-all advice — instead, we take a personalized, data-driven approach to every challenge, ensuring that our clients receive actionable recommendations that deliver measurable results. With a team of seasoned professionals in technology, business strategy, digital transformation, and project management, SkyGoalTech helps companies navigate complexities with confidence.</p>
                        <p className='py-4 leading-8'>What sets our <strong>business consultancy services</strong> apart is our commitment to holistic problem-solving. From IT infrastructure and product development consulting to branding strategy and process optimization, we cover every critical facet that drives growth. Many businesses struggle not because they lack ideas, but because they lack the direction and structure needed to implement those ideas efficiently. That's where SkyGoalTech’s <strong>IT consulting services</strong> and digital transformation guidance come into play. We help bridge the gap between vision and execution, empowering companies to harness their full potential. With a sharp focus on emerging technologies, market trends, and agile methodologies, our consultants provide solutions that are not just practical but future-ready.</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Our Approach to Strategic Consultancy</h3>

                    <p>At SkyGoalTech, our <strong>consulting solutions</strong> go beyond just recommendations — we believe in partnership. Our approach starts with understanding your business inside-out: your challenges, goals, workflows, and pain points. We then tailor a step-by-step plan, combining industry knowledge with technical expertise. We offer:</p>

                    <div className='pl-[2rem] py-4'>
                        <ul className='list-disc leading-8'>

                            <li>Business process analysis to identify inefficiencies</li>

                            <li>Market research and competitor benchmarking</li>

                            <li>Digital strategy development</li>

                            <li>Custom software consultation and tech audits</li>

                            <li>Project lifecycle and implementation planning</li>

                        </ul>
                    </div>
                    <p className='leading-8'>Whether it's improving internal workflows, launching a new digital product, or planning an enterprise-scale system upgrade, our <strong>strategic consulting services</strong> ensure that every decision aligns with your long-term goals.</p>
                </div>

            </div>
        </>
    )
}
