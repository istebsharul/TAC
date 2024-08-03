import React from 'react';
import Link from 'next/link';
import Cta from './Cta';

const Hero: React.FC = () => {
  return (
    <div className="md:w-full h-[30rem] bg-[#1A1A1A] flex flex-col justify-center items-center text-white py-20 mt-20 md:px-0 px-10 text-center">
      <p className=" text-4xl md:text-6xl mb-4">
        Let TAC tackle <br />
        your business problems
      </p>
      <p className="text-md md:text-md font-medium mb-2">
        Marketing and Design Solutions for industry experts
      </p>
      <p className=" text-md font-light md:text-md mb-6">
        who want services with the premium essence as their brand.
      </p>
      <div className="w-100">
        <Cta/>
      </div>
    </div>
  );
}

export default Hero;
