"use client";
import React, { useState } from 'react';
import CalendlyWidget from '@/Components/CalendlyWidgets';
import FAQ from '@/Components/FAQItem';
import FeaturedArticles from '@/Components/FeaturedArticles';
import toast from 'react-hot-toast';
import axios from 'axios';

interface FormData {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    message: string;
    countryCode: string;
    services: {
        webDesign: boolean;
        digitalMarketing: boolean;
        customerService: boolean;
        brandDesigning: boolean;
        socialMedia: boolean;
        others: boolean;
    };
}

const ContactForm: React.FC = () => {
    const initialFormData: FormData = {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: 'Hello Tac Team,',
        countryCode: '+91',
        services: {
            webDesign: false,
            digitalMarketing: false,
            customerService: false,
            brandDesigning: false,
            socialMedia: false,
            others: false,
        },
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [showForm, setShowForm] = useState(true);
    const [invalidFields, setInvalidFields] = useState<Partial<FormData>>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = event.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                services: {
                    ...formData.services,
                    [name as keyof FormData['services']]: !formData.services[name as keyof FormData['services']],
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            services: {
                ...formData.services,
                [name as keyof FormData['services']]: checked,
            },
        });
    };

    const validateFormData = (data: FormData): Partial<FormData> => {
        const errors: Partial<FormData> = {};

        // Check if all fields except phoneNumber are not empty
        if (data.firstName.trim() === '') errors.firstName = '';
        if (data.lastName.trim() === '') errors.lastName = '';
        if (data.companyName.trim() === '') errors.companyName = '';
        if (data.email.trim() === '' || !data.email.includes('@') || !data.email.includes('.')) errors.email = '';
        if (data.message.trim() === '') errors.message = '';
        if (data.countryCode.trim() === '') errors.countryCode = '';

        // Check if phone number contains only digits (optional)
        if (data.phoneNumber && !/^\d*$/.test(data.phoneNumber)) errors.phoneNumber = '';

        return errors;
    };

    const handleSendMessage = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!showForm) {
            setShowForm(true);
        }
        try {
            // Validate the form data
            const errors = validateFormData(formData);

            if (Object.keys(errors).length === 0) {
                console.log('Form data:', formData);
                console.log('Sending form data:', formData);

                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData),
                });
        
                if (response.ok) {
                    console.log('Message sent successfully!');
                    setFormData(initialFormData);
                } else {
                    console.error('Failed to Send message');
                }

                toast.success("Thank you for reaching out! We have received your message and will get back to you as soon as possible.");
                setInvalidFields({});
            } else {
                console.log("Errrrrrr");
                console.log(errors.email);
                // Show specific error messages for invalid fields
                if (errors.email === '') toast.error("Invalid email address. Please include '@'.");
                if (errors.phoneNumber === '') toast.error("Phone number must contain only numbers.");
                if (errors.firstName === '') toast.error("First name is required.");
                if (errors.companyName === '') toast.error("Company name is required.");
                if (errors.message === '') toast.error("Message cannot be empty.");
                if (errors.countryCode === '') toast.error("Country code is required.");
                setInvalidFields(errors);  // Set invalid fields for highlighting
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSchedule = () => {
        setShowForm(false);
    };

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center bg-[#1A1A1A] text-white mt-40">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="md:text-[6rem] text-[3rem] font-bold mb-4 text-center text-purple-600">Get in touch</h1>
                    <p className="w-11/12 mb-8 text-center">
                        Ready to take your company to new heights? Our friendly support team is here to help you.
                    </p>
                </div>
                <form onSubmit={handleSendMessage} className={`block md:w-3/6 w-4/5 space-y-10 ${showForm ? '' : 'hidden'}`}>
                    <div>
                        <h1 className='py-1'>Fullname</h1>
                        <div className="mb-4 flex md:flex-row flex-col space-x-0 md:space-y-0 space-y-2">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className={`w-full mr-1 pl-5 py-2 bg-transparent text-white border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-red-500 ${invalidFields.firstName ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className={`w-full ml-1 pl-5 py-2 bg-transparent text-white border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.lastName ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <h1>Company Name</h1>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company name"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-white border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.companyName ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <h1>Email</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-white border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.email ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <div className=' flex justify-between'>
                            <p>Phone</p>
                            <p className='text-[#5A5A5A]'>(Optional)</p>
                        </div>
                        <div className='flex'>
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleInputChange}
                                className={`w-1/11 pl-3 pr-2 py-2 bg-transparent text-[#5A5A5A] border border-r-0 rounded-l-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.countryCode ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                            >
                                <option value="+91">+91 (India)</option>
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+61">+61 (Australia)</option>
                                <option value="+55">+55 (Brazil)</option>
                                <option value="+86">+86 (China)</option>
                                <option value="+33">+33 (France)</option>
                                <option value="+49">+49 (Germany)</option>
                                <option value="+81">+81 (Japan)</option>
                                <option value="+52">+52 (Mexico)</option>
                                <option value="+7">+7 (Russia)</option>
                                <option value="+27">+27 (South Africa)</option>
                                <option value="+82">+82 (South Korea)</option>
                                <option value="+34">+34 (Spain)</option>
                                <option value="+46">+46 (Sweden)</option>
                                <option value="+41">+41 (Switzerland)</option>
                                <option value="+39">+39 (Italy)</option>
                                <option value="+31">+31 (Netherlands)</option>
                                <option value="+32">+32 (Belgium)</option>
                                <option value="+47">+47 (Norway)</option>
                                <option value="+48">+48 (Poland)</option>
                                <option value="+45">+45 (Denmark)</option>
                                <option value="+30">+30 (Greece)</option>
                                <option value="+351">+351 (Portugal)</option>
                                <option value="+64">+64 (New Zealand)</option>
                                <option value="+90">+90 (Turkey)</option>
                                <option value="+62">+62 (Indonesia)</option>
                                <option value="+63">+63 (Philippines)</option>
                                <option value="+66">+66 (Thailand)</option>
                                <option value="+60">+60 (Malaysia)</option>
                                <option value="+65">+65 (Singapore)</option>
                                <option value="+51">+51 (Peru)</option>
                                <option value="+57">+57 (Colombia)</option>
                                <option value="+56">+56 (Chile)</option>
                                <option value="+58">+58 (Venezuela)</option>
                                <option value="+92">+92 (Pakistan)</option>
                                <option value="+880">+880 (Bangladesh)</option>
                                <option value="+98">+98 (Iran)</option>
                                <option value="+964">+964 (Iraq)</option>
                                <option value="+20">+20 (Egypt)</option>
                                <option value="+212">+212 (Morocco)</option>
                                <option value="+216">+216 (Tunisia)</option>
                                <option value="+213">+213 (Algeria)</option>
                                <option value="+254">+254 (Kenya)</option>
                                <option value="+234">+234 (Nigeria)</option>
                                <option value="+255">+255 (Tanzania)</option>
                                <option value="+256">+256 (Uganda)</option>
                                <option value="+971">+971 (United Arab Emirates)</option>
                                <option value="+972">+972 (Israel)</option>
                                <option value="+962">+962 (Jordan)</option>

                            </select>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className={`w-11/12 pl-5 py-2 bg-transparent text-white border border-l-0 rounded-r-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.phoneNumber ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Hello Tac Team"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-white border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.message ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className="mb-4 p-4 grid grid-cols-2 gap-4">
                        {Object.keys(formData.services).map((service) => (
                            <label key={service} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name={service}
                                    checked={formData.services[service as keyof FormData['services']]}
                                    onChange={handleCheckboxChange}
                                    className="hidden"
                                />
                                <div className={`w-5 h-5 flex items-center justify-center border border-[#5A5A5A] rounded-md cursor-pointer ${formData.services[service as keyof FormData['services']] ? 'bg-purple-600' : 'bg-transparent'}`}></div>
                                <span className="capitalize text-sm">{service.replace(/([A-Z])/g, ' $1')}</span>
                            </label>
                        ))}
                    </div>
                </form>
                <div className={`md:w-4/5 w-11/12 mb-4 h-full overflow-y-auto m-0 p-0 ${showForm ? 'hidden' : ''}`}>
                    <CalendlyWidget />
                </div>
                <div className="md:w-3/6 w-4/5 flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4">
                    <button
                        type="submit"
                        onClick={handleSendMessage}
                        className={`w-full ${!showForm ? 'bg-gray-600' : 'bg-purple-600'} text-white py-2 px-4 rounded-xl`}
                    >
                        Send message
                    </button>
                    <button
                        type="button"
                        onClick={handleSchedule}
                        className={`w-full text-white py-2 px-4 rounded-xl ${!showForm ? 'bg-purple-600' : 'bg-gray-600'}`}
                    >
                        Schedule a Video Chat
                    </button>
                </div>
            </div>
            <FAQ />
            <FeaturedArticles />
        </>
    );
};

export default ContactForm;
