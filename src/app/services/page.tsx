"use client";
import { GridBackgroundDemo } from '@/Components/UI/GridBackgroundDemo';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Bac from '@/Components/BAC';

function Services() {

    return (
        <div className='bg-[#1A1A1A]'>
            <GridBackgroundDemo />
            <div className='flex justify-center items-center'>
                <Image
                    src={"https://res.cloudinary.com/drszvaldf/image/upload/v1719091041/TAC/eshxawqbfmcpgcodwmvd.png"}
                    alt="Image Description"
                    width={210} // Set width based on your design needs
                    height={50} // Set height based on your design needs
                />
            </div>
            <div className='w-full relative flex justify-center items-center text-justify md:my-40 md:px-40 p-10'>
                <p className='w-4/5 md:text-5xl text-xl md:leading-[3.3rem] z-10'>
                    <span className='font-bold md:border-none border-b-2 border-purple-600'>Design & Development,</span> Advertising, UI / UX,<span className='font-bold md:border-none border-b-2 border-purple-600'> Responsive Design, Front-End, Back-End,</span> E-Commerce, Hosting, <span className='font-bold md:border-none border-b-2 border-purple-600'>Maintenance and Support,</span> Analytics and Reporting, Social Media Integration
                </p>
                <div className='md:block hidden absolute top-15 mx-20'>
                    <svg width="920" height="195" viewBox="0 0 968 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" width="731" height="16" fill="url(#paint0_linear_1097_491)" />
                        <rect y="119" width="387" height="16" fill="url(#paint1_linear_1097_491)" />
                        <rect x="968" y="195" width="617" height="15.9999" transform="rotate(-180 968 195)" fill="url(#paint2_linear_1097_491)" />
                        <rect x="968" y="75" width="951" height="15.9999" transform="rotate(-180 968 75)" fill="url(#paint3_linear_1097_491)" />
                        <defs>
                            <linearGradient id="paint0_linear_1097_491" x1="2.00001" y1="7.99995" x2="733" y2="8.00019" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9747FF" />
                                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1097_491" x1="2.79327e-06" y1="127" x2="387" y2="127" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9747FF" />
                                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1097_491" x1="968" y1="203" x2="1585" y2="203" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9747FF" />
                                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1097_491" x1="968" y1="82.9999" x2="1919" y2="83.0003" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9747FF" />
                                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className='relative pb-[56.25%] h-0 overflow-hidden max-w-full'>
                <iframe
                    className='absolute top-0 left-0 w-full h-full'
                    src="https://res.cloudinary.com/dllddjxkf/video/upload/v1722684910/TAC/j3nf9fbpoforexj2rqlk.mp4?autoplay=0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <Bac />
            </div>
        </div>
    );
}

export default Services;
