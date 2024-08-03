"use client";
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What’s so Unique about you?",
        answer: "Because we don’t maintain our separate entity but become an integrated division and component of your company and operations. We become a very needed extension that boosts your desired growth."
    },
    {
        question: "So, what’s the difference between you guys and a freelancer?",
        answer: "We work as an integrated part of your team, providing a broader range of services and support compared to freelancers."
    },
    {
        question: "What other services do you offer?",
        answer: "We offer a wide range of services including SEO, PPC, content marketing, and email marketing."
    },
    {
        question: "So, what’s the difference between you guys and a freelancer?",
        answer: "We work as an integrated part of your team, providing a broader range of services and support compared to freelancers."
    },
    {
        question: "What other services do you offer?",
        answer: "We offer a wide range of services including SEO, PPC, content marketing, and email marketing."
    },
    // Add more FAQ items as needed
];

const FAQ: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
        <div className="md:w-full flex md:flex-row flex-col justify-center items-start text-white pt-40 mb-0 pb-0 md:px-[20rem] bg-[#1A1A1A]">
            <div className='md:w-1/2 w-full md:px-0 px-8 md:text-8xl text-6xl flex flex-col md:justify-start justify-center items-start md:mr-5 mr-0'>
                <div>Why us,<br/> you ask?</div>
                <div className='text-3xl py-2 left'>and other FAQs...</div>
            </div>
            <div className="md:w-1/2 w-full md:px-0 px-10 md:ml-4 space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-start w-full py-2 text-left text-lg font-medium transition-transform duration-300"
                        >
                            {item.question}
                            <span className={`text-4xl transition-transform ml-2 font-light duration-300 ${expandedIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                +
                            </span>
                        </button>
                        {expandedIndex === index && (
                            <div className="py-4 text-sm font-light text-gray-200">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div className='bg-[#1A1A1A] flex flex-col justify-center items-center py-20'>
            <h1 className='mb-5'>Still got questions?</h1>
            <button className='flex justify-center items-center px-4 py-2  rounded-3xl bg-gradient-to-r from-purple-800 to-purple-400 text-white transition duration-300 ease-in-out hover:from-purple-900 hover:to-purple-500'>
                Contact Us
                <FaChevronRight/>
            </button>
        </div>
        </>
    );
};

export default FAQ;
