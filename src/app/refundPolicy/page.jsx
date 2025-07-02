import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

export default function page() {
    return (
        <div className='mt-[9rem] mx-14 mb-[3rem]'>
            <div className='pb-8'>
                <BreadCrumb />
            </div>
            <h3 className='text-3xl font-semibold'>Refund Policy
            </h3>
            <div className='pt-[2rem] flex flex-col gap-6 pl-8'>

                <p className='text-base'>At <strong>SKYGOAL INNOVA TECHNOLOGIES PRIVATE LIMITED,</strong> we strive to deliver high-quality products and services that meet your expectations. However, if for any reason you are not completely satisfied with your purchase, we offer a <strong>24-hour money-back guarantee</strong>.</p>
                <p className='text-base'>If you wish to request a refund, you must contact us within <strong>24 hours of your payment</strong>. We will gladly process a <strong>full refund</strong>, subject to any applicable deductions for legal documentation, processing charges, or services already rendered.</p>
                <p className='text-base'>To initiate a refund request, please send an email to <strong>sales@skygoaltech.com</strong> with your order details and reason for the request. Our team will review your request promptly and respond accordingly.
                </p>

            </div>
        </div>
    )
}
