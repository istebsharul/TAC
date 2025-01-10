import React from 'react';
import Cta from './Cta';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-full text-center bg-[#1A1A1A]">
        <Image src="https://res.cloudinary.com/dllddjxkf/image/upload/v1723583527/TAC/tnktro1b1u4u7yle8dkp.png" width={1920} height={80} alt="Footer Pattern" className="w-full" />
      </div>

      <footer className="mx-auto py-4 px-5 lg:px-40 w-full 2xl:h-[19rem] h-auto bg-[#e4e2dd] text-black flex flex-col justify-between text-center">
        <div className="flex flex-col lg:flex-row justify-around mx-2 my-6">
          <div className="w-full 2xl:w-1/8 lg:w-1/5 mb-4 lg:mb-0">
            <Image src="https://res.cloudinary.com/dllddjxkf/image/upload/v1723583600/TAC/kocf4fqgyo8ikbtsjxmq.png" width={200} height={100} alt="Logo" className="mx-auto lg:mx-0 w-32 lg:w-full" />
            <div className="text-center lg:text-end font-semibold text-lg mt-2 lg:mt-0">
              THE AKRAM
              CONSULTANCY
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col lg:flex-row text-sm justify-around mt-2 lg:mt-0">
            <div className="my-2 lg:my-0">
              <a className="font-semibold text-black no-underline">Careers</a>
            </div>
            <div className="my-2 lg:my-0">
              <a className="font-semibold text-black no-underline">Blog</a>
            </div>
            <div className="my-2 lg:my-0">
              <a className="font-semibold text-black no-underline">Work</a>
            </div>
            <div className="my-2 lg:my-0">
              <a className="font-semibold text-black no-underline">About</a>
            </div>
            <div className="my-2 lg:my-0">
              <a className="font-semibold text-black no-underline">Services</a>
            </div>
          </div>

          <div className="h-min gap-3 flex flex-col items-center lg:items-end justify-start font-semibold text-lg mt-2 lg:mt-0">
            <p className="text-center lg:text-end">Start your next project Today</p>
            <Cta />
          </div>
        </div>

        <div className="mt-4 lg:mt-2">
          <p className="font-light text-sm">
            © The Akram Consultancy 2023 | All rights reserved. | <a href="/privacypolicy">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
