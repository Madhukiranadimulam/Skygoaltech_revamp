import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

export default function page() {
    return (
        <div className='mt-[-7rem] mx-14 mb-[3rem]'>
            <div className='pb-8'>
                <BreadCrumb />
            </div>
            <header className='text-3xl font-semibold'>Cancellation Policy</header>
            <div className='pt-[2rem] flex flex-col gap-3'>

                <div className='space-y-3'>
                    <p>At <strong>SkyGoal Innova Technologies Private Limited</strong> we are dedicated to ensuring customer satisfaction and aim to maintain a fair and transparent cancellation process. In line with this commitment, we have adopted a customer-friendly yet structured cancellation policy, as outlined below:</p>
                </div>

                <div className='flex flex-col gap-4'>

                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>1. Timeframe for Cancellation Requests
                        </h4>
                        <p className='pl-8'>Cancellations will only be considered if the request is submitted within <strong>24 hours of placing the order</strong>. Requests made after this period may not be accepted, as the order processing may already be underway.
                        </p>
                    </div>


                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>2. Operational Stage Restriction
                        </h4>
                        <p className='pl-8'> If an order has already been communicated to our operations team and the execution process has begun, such cancellation requests will not be entertained. Once the assignment process is initiated, the order is considered final and non-cancellable.
                        </p>
                    </div>


                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>3. Refund Consideration
                        </h4>
                        <p className='pl-8'>All cancellations and any associated refund requests will be strictly subject to the terms outlined in our Refund Policy, which may be updated or revised periodically. Customers are advised to review the most recent version of the <strong>Refund Policy</strong> available on our official website or upon request.
                        </p>
                    </div>


                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>4. Same-Day Delivery Orders
                        </h4>
                        <p className='pl-8'>
                            Orders placed under the <strong>same-day delivery</strong> category are not eligible for cancellation under any circumstances due to the immediate nature of their processing and delivery.
                        </p>
                    </div>


                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>5. Promotional and Discounted Offers
                        </h4>
                        <p className='pl-8'>Products or services purchased under <strong>special promotional offers</strong> or discounts—particularly during festive or special occasions such as <strong>New Year</strong>, <strong>Pongal</strong>, <strong>Diwali</strong>, <strong>Independence Day</strong>, <strong>Foundation Day</strong>, and similar events—are <strong>non-cancellable</strong>. These offers are time-sensitive and tailored for specific events, making them ineligible for cancellation or modification once the order is confirmed.
                        </p>
                    </div>


                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>6. Special Circumstances
                        </h4>
                        <p className='pl-8'> In exceptional cases such as duplicate payments or technical errors, cancellation and refund requests will be reviewed by our support team on a case-by-case basis. Approval in such cases is at the sole discretion of <strong>SKYGOAL INNOVA TECHNOLOGIES PRIVATE LIMITED</strong> and subject to verification and internal approval procedures.
                        </p>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-xl font-medium'>7. Contact Us
                        </h4>
                        <p className='pl-8'>If you have any questions or concerns about Cancellation Policy, please contact us:
                        </p>
                        <p className='text-lg font-semibold pl-8'>SkyGoal Innova Technologies Private Limited</p>
                        <p className='pl-8'>PLOT NO 75, 1ST FLOOR, PVKR ELITE, LUMBINI ENCLAVE, Gachibowli, </p>
                        <p className='pl-8'>K.V.Rangareddy, Seri Lingampally, Telangana, India, 500032</p>
                        <p className='flex items-center gap-1 pl-8'>
                            <span>Email:</span>
                            <a>info@skygoaltech.com
                            </a>
                        </p>
                        <p className='flex items-center gap-1 pl-8'>
                            <span>Phone:</span>
                            <span className='font-medium'> +91 7658919293
                            </span>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
