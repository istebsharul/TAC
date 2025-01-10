"use client";
import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What’s unique about your agency?",
        answer: "We combine years of high-level freelance experience with a dedicated team approach, offering personalized, high-quality service and innovative solutions."
    },
    {
        question: "How is working with your agency different from hiring a freelancer?",
        answer: "Unlike freelancers, we offer a full team with diverse expertise, consistent support, and a structured process, ensuring a more reliable and comprehensive service."
    },
    {
        question: "Why should I choose your agency over larger, more established firms?",
        answer: "We offer a personal touch and customized solutions, with the agility and attention to detail that larger firms may not provide."
    },
    {
        question: "What types of businesses benefit most from your services?",
        answer: "We cater to small businesses and startups, as well as companies needing a website redesign or those looking to enhance their digital presence."
    },
    {
        question: "How do you handle project management and communication?",
        answer: "We provide clear timelines, regular updates, and a dedicated point of contact to ensure smooth communication and effective project management."
    },
    {
        question: "What’s your process for understanding and implementing a client’s vision?",
        answer: "We start with a detailed consultation to understand your goals and preferences, followed by collaborative planning and regular feedback sessions."
    },
    {
        question: "How do you stay updated with the latest trends and technologies?",
        answer: "Our team continuously learns and adapts to industry trends and technological advancements to offer cutting-edge solutions."
    },
    {
        question: "Can you provide examples of your previous work or client success stories?",
        answer: "Yes, we can share case studies and examples of successful projects that demonstrate our capabilities and the value we’ve delivered to clients."
    },
    {
        question: "How do you ensure my project stays within budget?",
        answer: "We provide a clear, upfront quote and keep you informed of any potential changes, working within the agreed budget to deliver the best results."
    },
    {
        question: "What if I have additional questions or concerns during the project?",
        answer: "We encourage open communication and are always available to address any questions or concerns you may have throughout the project."
    },
];

const FAQ: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [moreQuestion, setMoreQuestion] = useState(false);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // Determine which items to show based on the `moreQuestion` state
    const visibleItems = moreQuestion ? faqItems : faqItems.slice(0, 5);

    return (
        <>
            <div className={`md:w-full flex md:flex-row flex-col justify-center items-start text-white pt-40 mb-0 pb-0 md:px-[10rem] bg-[#1A1A1A]`}>
                <div className={`2xl:w-3/5 lg:w-3/5 flex ${moreQuestion ? 'md:flex-col' : 'md:flex-row'} flex-col`}>
                    <div className={`${moreQuestion? 'w-full md:mb-10': 'md:w-1/2'} w-full md:px-0 px-8 2xl:text-[5.5rem] lg:text-[4.5rem] text-6xl flex flex-col ${moreQuestion? 'justify-center':'md:justify-start'} items-start md:mr-5 mr-0`}>
                        <div>
                            Why us, {moreQuestion} you ask?
                        </div>

                        <div className='text-3xl py-2 left'>and other FAQs...</div>
                    </div>
                    <div className={`${moreQuestion? 'w-full': 'md:w-1/2'} w-full md:px-0 px-10 md:ml-4 space-y-4`}>
                        {visibleItems.map((item, index) => (
                            <div key={index} className="">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`flex justify-between items-center w-full ${moreQuestion? 'py-0':'py-2'} text-left 2xl:text-lg lg:text-md font-medium transition-transform duration-300`}
                                >
                                    {item.question}
                                    <span className={`2xl:text-5xl text-4xl transition-transform ml-2 font-light duration-300 ${expandedIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                        +
                                    </span>
                                </button>
                                {expandedIndex === index && (
                                    <div className="py-4 2xl:text-md text-sm font-light text-gray-200">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#1A1A1A] flex flex-col justify-center items-center py-20'>
                <div
                    onClick={() => { setMoreQuestion(!moreQuestion) }}
                    className='mb-5 hover:text-purple-500 cursor-pointer'
                >
                    {moreQuestion ? <p>Show Less </p> : <p>Show More</p>}
                </div>
            </div>
        </>
    );
};

export default FAQ;
