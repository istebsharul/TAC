import Image from 'next/image'
import React from 'react'
import {RiArrowRightSLine} from 'react-icons/ri';

function page() {
    return (
        <div className='w-full bg-[#151515] flex flex-col justify-center items-center pt-40'>
            <div className='w-2/3 py-2'>
                <h1 className='md:text-5xl text-2xl'>404 - APPRECIATE YOUR</h1> 
                <h1 className='md:text-5xl text-2xl flex md:flex-row flex-col'><span>UNDERSTANDING</span><span className='md:w-1/4 w-full px-2 md:text-[1.2rem]  text-[1rem] flex md:flex-wrap flex justify-center items-center font-extralight text-white/60 italic'>We&apos;re trying our best to bring it back ASAP</span></h1>
            </div>
            <div className='md:w-3/5 w-4/5 flex justify-center items-start'>
                <Image className='md:w-3/5 w-3/5' src="https://res.cloudinary.com/dllddjxkf/image/upload/v1722939091/TAC/f94d9pqx50uley1ljgpi.png" width={700} height={300} alt=""/>
                <div className='md:w-min md:w-2/5 flex flex-col justify-center items-center'>
                    <p className='md:text-xl text-sm italic text-nowrap'>I am Disappointed</p>
                    <a className='text-sm flex bg-red justify-center items-center text-[#9747FF]' href='/'>Take me back <RiArrowRightSLine /></a>
                </div>
            </div>
        </div>
    )
}

export default page