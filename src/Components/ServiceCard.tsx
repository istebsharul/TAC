import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string[];
  redUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, redUrl }) => {
  return (
    <div className="md:w-[25rem] md:h-[22rem] w-[20rem] h-[20rem] md:px-1 md:pt-5 md:py-0 px-4 py-4 m-0 bg-[#292929] rounded-[30px] flex flex-col justify-center items-center hover:shadow-red-md overflow-hidden">
      <div className="md:p-1 p-3 md:w-[23rem] w-full flex justify-center items-start">
        <div className="w-fit px-2">
          <h1 className="md:text-2xl text-xl">{title}</h1>
          <p className="font-light text-xs py-2">{description}</p>
        </div>
        <div className="rounded-full p-3 bg-gradient-to-r from-purple-600 to-blue-400 text-center flex justify-center items-center -rotate-45">
          <Link href={redUrl}>
            <div className="text-white transition-transform duration-300 ease-in-out hover:scale-150">
              <FaChevronRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full flex justify-center overflow-hidden">
        {imageUrl.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`${title} image ${index + 1}`}
            width={300}
            height={300}
            className="absolute transition-transform duration-500 ease-in-out"
            style={{ top: `${index * 10}%`, left: `${index * 10}%`, zIndex: index }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
