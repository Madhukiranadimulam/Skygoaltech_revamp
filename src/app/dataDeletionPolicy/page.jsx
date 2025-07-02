import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'

export default function page() {
    return (
        <div className='mt-[9rem] mx-14 mb-[3rem]'>
            <div className='pb-8'>
                <BreadCrumb />
            </div>
            <h3 className='text-3xl font-semibold'>Data Deletion Policy</h3>
            <div className='pt-[2rem] flex flex-col gap-3'>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>1. Purpose</h4>
                    <p>This policy explains:</p>
                    <ul className='list-disc pl-8'>
                        <li>How users can request deletion of their personal data.
                        </li>
                        <li>The types of data that may be deleted.
                        </li>
                        <li>Our timelines and responsibilities in processing such requests.
                        </li>
                        <li>Exceptions where data retention is legally required.
                        </li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>2. Scope
                    </h4>
                    <p className='pl-8'>This policy applies to all users of services provided by <strong>SkyGoal Innova Technologies Private Limited</strong>, including website visitors, customers, and partners, whose personal information is collected, stored, or processed by us. </p>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>3. Data That Can Be Deleted</h4>
                    <p>Subject to applicable law, users may request deletion of the following types of data:
                    </p>
                    <ul className='list-disc pl-8'>
                        <li>Personal identification information (e.g., name, email address, phone number)
                        </li>
                        <li>Contact details and communication history
                        </li>
                        <li>User-generated content or files (if applicable)
                        </li>
                        <li>Account information
                        </li>
                        <li>Marketing preferences and records
                        </li>
                    </ul>
                    <p>Note: We may retain certain information as required by law, regulation, or for legitimate business purposes (e.g., fraud prevention, audit logs, tax or billing records).</p>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>4. How to Request Data Deletion</h4>
                    <p>To request the deletion of your personal data, please contact us through one of the following methods:
                    </p>
                    <ul className='list-disc pl-8'>
                        <li>Full name</li>
                        <li>Email address associated with your account
                        </li>
                        <li>Description of the data to be deleted
                        </li>
                        <li>Proof of identity (if required)
                        </li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>5. Verification and Processing
                    </h4>
                    <p className='pl-8'>Upon receiving your request:
                    </p>
                    <ul className='list-disc pl-8'>
                        <li>We will verify your identity to ensure the security of your data.</li>
                        <li>Once verified, we will begin processing your request.
                        </li>
                        <li>Deletion will typically be completed within <strong>30 days</strong> unless otherwise required by law or technical constraints.</li>
                    </ul>
                    <p>You will receive a confirmation once your data has been deleted or a reason if the deletion cannot be completed.</p>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>6. Exceptions
                    </h4>
                    <p className='pl-8'>We may retain personal data under the following circumstances:
                    </p>
                    <ul className='list-disc pl-8'>
                        <li>To comply with legal obligations (e.g., tax or financial regulations)</li>
                        <li>To enforce our Terms and Conditions
                        </li>
                        <li>For dispute resolution or ongoing investigations
                        </li>
                        <li>Where retention is necessary for legitimate business purposes
                        </li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>7. Data Stored by Third Parties
                    </h4>
                    <p className='pl-8'>If your data is stored or processed by third-party service providers or integrated platforms (e.g., cloud storage, CRM tools), we will forward your deletion request to those providers, as applicable, or guide you on how to contact them directly.
                    </p>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>8. Changes to This Policy
                    </h4>
                    <p className='pl-8'>We may update this Data Deletion Policy periodically. Any changes will be posted on this page with an updated "Effective Date." We encourage users to review this policy regularly.
                    </p>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xl font-medium'>9. Contact Us
                    </h4>
                    <p className='pl-8'>If you have any questions or concerns about Data Deletion Policy, please contact us:
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
    )
}
