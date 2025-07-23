import React from 'react';
import serviceImg from '../../assets/cloudService-img.jpg';
import BreadCrumb from '../Components/BreadCrumb';

export default function page() {

    return (
        <>
            <div className="w-full mt-[5.2rem] h-[70vh] xl:h-[80vh]">
                <img
                    src={serviceImg.src}
                    alt="cloud-img"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='px-[5rem] my-[3rem] max-md:px-[2rem]'>
                <div className='pb-[1rem]'>
                    <BreadCrumb />
                </div>
                <div>
                    <h3 className='text-xl font-bold md:text-2xl'>Cloud Solutions</h3>
                    <div className='pl-[2rem]'>
                        <p className='py-4 leading-8'>In the fast-paced digital era, agility, scalability, and security are not just preferences — they are necessities. That’s where <strong>cloud solutions</strong> come in. At <strong>SkyGoalTech</strong>, we offer comprehensive, end-to-end cloud services tailored to help businesses modernize their IT infrastructure, reduce operational overhead, and improve system resilience. Whether you're a startup seeking flexibility or an enterprise aiming to scale securely, our cloud strategy is built around your unique goals. Cloud computing isn’t a one-size-fits-all solution. That’s why our team evaluates your current systems, workloads, and objectives to craft a custom cloud roadmap that delivers real business impact.</p>

                        <p className='py-4 leading-8'>Many companies begin their digital transformation with the cloud — but only those who align their cloud adoption with smart architecture and governance get lasting results. At SkyGoalTech, our <strong>cloud computing solutions</strong> are more than just hosting. We offer strategic migration, multi-cloud management, cloud-native application development, and continuous optimization. Our aim is to unlock the full potential of cloud technology to boost innovation, accelerate deployment, and drive cost efficiency. From public and private cloud to hybrid and edge computing, we ensure your business is cloud-ready today and future-proof for tomorrow.</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>What SkyGoalTech Offers in Cloud Services</h3>

                    <p className='leading-8'>We offer a wide array of <strong>cloud services</strong> tailored for businesses of all sizes and industries. Our solutions help simplify your IT operations while increasing agility and lowering costs. Whether you are beginning your cloud journey or optimizing an existing environment, SkyGoalTech ensures a seamless and secure transition.</p>

                    <span>Key offerings include:</span>

                    <div className='pl-[2rem] py-4'>
                        <ul className='list-disc leading-8'>

                            <li>Cloud migration services with minimal downtime</li>

                            <li>Cloud infrastructure management for scalability and control</li>

                            <li>Cloud security solutions to protect data and applications</li>

                            <li>Hybrid cloud solutions to balance performance and cost</li>

                            <li>Cloud-native development for modern, scalable applications</li>

                            <li>Disaster recovery planning leveraging cloud architecture</li>

                        </ul>
                    </div>

                    <p className='leading-8'>With these integrated <strong>cloud technology services</strong>, we enable businesses to shift from traditional setups to highly available, resilient, and cost-effective cloud environments.</p>
                </div>

                <div>
                    <h3 className='text-xl font-bold md:text-2xl py-4'>Why Choose SkyGoalTech for Cloud Solutions?
                    </h3>

                    <p className='leading-8'>At SkyGoalTech, we understand that adopting the cloud is not just a technical move — it’s a strategic one. That’s why our <strong>cloud consulting services</strong> are built on a foundation of collaboration, security, and performance. We work alongside your internal IT team or handle the full stack of operations, depending on your preference.</p>

                    <span>Here’s what makes our <strong>cloud solutions provider</strong> approach different:</span>

                    <div className='pl-[2rem] py-4'>
                        <ul className='list-disc leading-8'>

                            <li><strong>Vendor-agnostic cloud strategies</strong> (AWS, Azure, Google Cloud, and more)</li>

                            <li><strong>Performance tuning and monitoring</strong> of cloud workloads</li>

                            <li><strong>DevOps and CI/CD integration</strong> for faster development cycles</li>

                            <li><strong>Customizable pricing models</strong> to fit your business model</li>

                            <li><strong>Expert cloud consultants</strong> who offer 24/7 support and maintenance</li>

                        </ul>
                    </div>

                    <p className='leading-8'>Our goal is not only to deploy solutions but also to empower your team with the tools and knowledge to manage cloud infrastructure efficiently. As a trusted <strong>cloud solutions company</strong>, SkyGoalTech is here to guide you every step of the way — from planning and deployment to management and optimization.</p>
                </div>

            </div>
        </>
    )
}
