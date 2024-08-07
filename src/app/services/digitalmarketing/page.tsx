import React from 'react'
import Cta from '@/Components/Cta'
// import { WobbleCardDemo } from '@/Components/WobbleCardDemo'
import DmQuadImages from '@/Components/dmQuadImages'
import Bac from '@/Components/BAC'
import FeaturedArticles from '@/Components/FeaturedArticles'
import Image from 'next/image'

export default function DigitalMarketing() {
    return (
        <>
            <div className="min-h-screen bg-[#1A1A1A] text-white relative">
                <header className="relative flex flex-col items-center justify-center text-center py-20">
                    <div className="absolute inset-0 md:w-full md:h-full">
                        <svg 
                            className='w-full h-min sm:mt-40 mt-10 md:mt-0'
                        width="1440" height="632" viewBox="0 0 1440 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M250.948 390.58C195.336 471.411 55.811 471.511 -7 461.458V0H1448V133.712C1373.97 121.48 1211.48 96.0114 1153.76 91.99C1081.63 86.9632 977.136 126.675 928.607 234.248C880.078 341.821 765.532 367.96 673.72 352.377C581.908 336.794 549.992 253.349 473.045 234.248C396.098 215.146 320.462 289.542 250.948 390.58Z" fill="url(#paint0_linear_938_471)" fill-opacity="0.5" />
                            <path d="M249.948 473.58C194.336 554.411 54.811 554.511 -8 544.458V83H1447V216.712C1372.97 204.48 1210.48 179.011 1152.76 174.99C1080.63 169.963 976.136 209.675 927.607 317.248C879.078 424.821 764.532 450.96 672.72 435.377C580.908 419.794 548.992 336.349 472.045 317.248C395.098 298.146 319.462 372.542 249.948 473.58Z" fill="url(#paint1_linear_938_471)" fill-opacity="0.5" />
                            <path d="M249.948 556.58C194.336 637.411 54.811 637.511 -8 627.458V166H1447V299.712C1372.97 287.48 1210.48 262.011 1152.76 257.99C1080.63 252.963 976.136 292.675 927.607 400.248C879.078 507.821 764.532 533.96 672.72 518.377C580.908 502.794 548.992 419.349 472.045 400.248C395.098 381.146 319.462 455.542 249.948 556.58Z" fill="url(#paint2_linear_938_471)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_938_471" x1="704.5" y1="77.5" x2="721" y2="388" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D9D9D9" stop-opacity="0" />
                                    <stop offset="1" stop-color="#9747FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_938_471" x1="703" y1="169" x2="720" y2="471" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D9D9D9" stop-opacity="0" />
                                    <stop offset="1" stop-color="#9747FF" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_938_471" x1="706.5" y1="239.5" x2="720" y2="554" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D9D9D9" stop-opacity="0" />
                                    <stop offset="1" stop-color="#9747FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='w-full m-20 mt-40 flex flex-col justify-center items-center'>
                        <h1 className="md:w-3/5 w-full md:text-7xl text-3xl font-medium m-6 px-10 relative leading-tight z-10">Transforming Vision into Digital Brilliance, One Click at a Time.</h1>
                        <p className="w-3/5 text-lg mb-8 relative z-10">
                            Guiding you through strategic digital transformations, we craft compelling narratives, build engaging experiences, and amplify your online presence, ensuring your brand not only adapts but excels in the ever-evolving digital landscape.
                        </p>
                        <div className="relative z-10">
                            <Cta />
                        </div>
                    </div>

                </header>
                <div className='flex justify-center items-center p-5'>
                    {/* <WobbleCardDemo /> */}
                    <Image src="https://res.cloudinary.com/dllddjxkf/image/upload/v1722949142/TAC/wxx94b49atq8wexawco1.png" alt="" width={1080} height={500} />
                    </div>
                <div className='w-full flex py-8 justify-center items-center'>
                    <DmQuadImages />
                </div>
                <div>
                    <Bac/>
                </div>
                <FeaturedArticles/>
            </div>
        </>
    )
}
