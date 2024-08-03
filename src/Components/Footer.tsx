import React from 'react';
import Cta from './Cta';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full text-center">
        <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1719069730/TAC/u1jwlgxy4jxovyw9y7ts.png" alt="Footer Pattern" className="w-full" />
      </div>

      <footer className="mx-auto py-4 px-5 lg:px-40 w-full h-auto bg-[#e4e2dd] text-black flex flex-col justify-between text-center">
        <div className="flex flex-col lg:flex-row justify-around mx-2 my-6">
          <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
            <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1719048815/TAC/kqi5tyefif6jzik9i33y.png" alt="Logo" className="mx-auto lg:mx-0 w-32 lg:w-full" />
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
            © The Akram Consultancy 2023 | All rights reserved. | Privacy Policy
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
