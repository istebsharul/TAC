import React from 'react';
import Link from 'next/link';
import Cta from './Cta';

const Hero: React.FC = () => {
  return (
    <div className="md:w-full 2xl:h-[37rem] md:h-[29rem] bg-[#1A1A1A] flex flex-col items-center text-white mt-20 md:py-40 md:px-0 px-10 text-center">
      <p className="text-4xl md:text-6xl 2xl:text-7xl mb-4 font-light">
        Let's <span className='font-bold font-palatino'>TAC</span> tackle <br />
        your business problems
      </p>
      <p className="text-md md:text-md 2xl:text-lg font-medium">
        Marketing and Design Solutions for industry experts
      </p>
      <p className=" text-md font-light md:text-md 2xl:text-lg mb-6">
        who want services with the premium essence as their brand.
      </p>
      <div className="w-100">
        <Cta/>
      </div>
    </div>
  );
}

export default Hero;
