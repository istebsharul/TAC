"use client"
import React, { useState } from 'react';
import HyaCard from './ServiceCard';
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

interface imagesurl {
    imageUrl: string;
}

interface ServiceItem {
    title: string;
    description: string;
    imageUrl: string[];
    redUrl: string;
}

const services: ServiceItem[] = [
    {
        title: "Digital Marketing",
        description:
            "Strategically promoting your brand across channels, ensuring maximum exposure and engagement with your target audience.",
        imageUrl:
            ["https://res.cloudinary.com/drszvaldf/image/upload/v1720021528/TAC/tla9njc5x5byrmrmu9eb.png",
                "https://res.cloudinary.com/drszvaldf/image/upload/v1720021529/TAC/oallgiaqnmeltbgpgtnl.png",
                "https://res.cloudinary.com/drszvaldf/image/upload/v1720021528/TAC/wkdunpj8zippqrknlsxc.png",
                "https://res.cloudinary.com/drszvaldf/image/upload/v1720021528/TAC/c630ndj1ycsyfg3qiohu.png"
            ],
        redUrl:
            "/digitalmarketing",
    },
    {
        title: "Social Media Management",
        description:
            "Managing your social media presence, crafting engaging content and fostering meaningful interactions to boost online influence.",
        imageUrl:
            ["https://res.cloudinary.com/drszvaldf/image/upload/v1720021529/TAC/i9kxrs9voxyrexdktc7e.png",],
        redUrl:
            "/socialmediamanagement",
    },
    {
        title: "Website Design and Development",
        description:
            "Visually appealing and user-friendly online spaces that showcase your business effectively.",
        imageUrl:
            ["https://res.cloudinary.com/drszvaldf/image/upload/v1720021528/TAC/pvg9yslptbsabrvs4er2.png",
                "https://res.cloudinary.com/drszvaldf/image/upload/v1720021528/TAC/jxdqtucxnpuzwswmtbui.png"],
        redUrl:
            "/websitedesign",
    },
    {
        title: "Brand Identity",
        description:
            "Shaping your brand's unique identity, ensuring it stands out and resonates with your audience, leaving a lasting impression.",
        imageUrl:
            ["https://res.cloudinary.com/drszvaldf/image/upload/v1720021529/TAC/dw2bvejtfcxv8oibjlpa.png",],
        redUrl:
            "/brandidentity",
    },
];

function Hya() {
    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);


    return (
        <>
            <div className="w-full flex justify-center items-center bg-[#1A1A1A]">
                <div className="gap-4 md:gap-8 md:h-[60rem] flex flex-col md:flex-wrap justify-center items-center">
                    <h1 className="text-2xl">How You Ask?</h1>
                    {/* Digital Marketing */}
                    <div className="md:w-[25rem] md:h-[22rem] w-[20rem] h-[20rem] md:px-1 md:pt-5 md:py-0 px-1 py-4 m-0 bg-[#292929] rounded-[30px] flex flex-col justify-center items-center hover:shadow-red-md overflow-hidden">
                        <div className="md:p-1 p-3 md:w-[23rem] w-full flex justify-center items-start">
                            <div className="w-fit px-2">
                                <h1 className="md:text-2xl text-xl">{services[0].title}</h1>
                                <p className="font-light text-xs py-2">{services[0].description}</p>
                            </div>
                            <Link
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                href={services[0].redUrl}
                                className="p-1 text-white flex justify-center items-center"
                            >
                                <div
                                    className={`relative w-[2.8rem] h-[2.8rem] rounded-full pl-2 bg-gradient-to-r from-purple-600 to-blue-400 text-center flex justify-center items-center -rotate-45 transition-transform duration-300 ease-in-out hover:shadow-lg`}
                                >
                                    <FaChevronRight
                                        className={`w-8 h-8 font-light transition-transform duration-100 ease-in-out ${hovered ? 'scale-50 translate-x-2' : ''}`}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="ml-[5rem] md:w-full md:h-full overflow-hidden w-full h-full relative">
                            {services[0].imageUrl.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt={`${services[0].title} image ${index + 1}`}
                                    width={170}
                                    height={300}
                                    className="absolute transition-transform duration-500 ease-in-out"
                                    style={{ top: `${index * 10}%`, left: `${index * 21}%`, zIndex: +index }} // Stack images with offset
                                />
                            ))}
                        </div>
                    </div>
                    {/* Social Media Management */}
                    <div className="md:w-[25rem] md:h-[22rem] w-[20rem] h-[20rem] md:px-0 md:pt-5 md:py-0 px-0 py-0 m-0 bg-[#292929] rounded-[30px] flex flex-col justify-center items-center hover:shadow-red-md overflow-hidden">
                        <div className="md:p-1 p-3 pt-7 md:w-[23rem] w-full flex justify-center items-start">
                            <div className="w-fit px-2">
                                <h1 className="md:text-2xl text-xl">{services[1].title}</h1>
                                <p className="w-full font-light text-xs py-2">{services[1].description}</p>
                            </div>
                            <Link
                                onMouseEnter={() => setHovered1(true)}
                                onMouseLeave={() => setHovered1(false)}
                                href={services[1].redUrl}
                                className="p-1 text-white flex justify-center items-center"
                            >
                                <div
                                    className={`relative w-[2.8rem] h-[2.8rem] rounded-full pl-2 bg-gradient-to-r from-purple-600 to-blue-400 text-center flex justify-center items-center -rotate-45 transition-transform duration-300 ease-in-out hover:shadow-lg`}
                                >
                                    <FaChevronRight
                                        className={`w-8 h-8 font-light transition-transform duration-100 ease-in-out ${hovered1 ? 'scale-50 translate-x-2' : ''}`}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="md:w-full md:h-full flex justify-center overflow-hidden w-full h-full relative">
                            {services[1].imageUrl.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt={`${services[1].title} image ${index + 1}`}
                                    width={450}
                                    height={600}
                                    className=" transition-transform object-fit duration-500 ease-in-out"
                                />
                            ))}
                        </div>
                    </div>
                    {/* Website Development */}
                    <div className="md:w-[25rem] md:h-[22rem] w-[20rem] h-[20rem] md:px-1 md:pt-5 md:py-0 px-4 py-4 m-0 bg-[#292929] rounded-[30px] flex flex-col justify-center items-center hover:shadow-red-md overflow-hidden">
                        <div className="md:p-1 p-1 md:w-[23rem] w-full flex justify-center items-start">
                            <div className="w-fit px-1">
                                <h1 className="md:text-2xl text-xl">{services[2].title}</h1>
                                <p className="font-light text-xs py-2">{services[2].description}</p>
                            </div>
                            <Link
                                onMouseEnter={() => setHovered2(true)}
                                onMouseLeave={() => setHovered2(false)}
                                href={services[2].redUrl}
                                className="p-1 text-white flex justify-center items-center"
                            >
                                <div
                                    className={`relative w-[2.8rem] h-[2.8rem] rounded-full pl-2 bg-gradient-to-r from-purple-600 to-blue-400 text-center flex justify-center items-center -rotate-45 transition-transform duration-300 ease-in-out hover:shadow-lg`}
                                >
                                    <FaChevronRight
                                        className={`w-8 h-8 font-light transition-transform duration-100 ease-in-out ${hovered2 ? 'scale-50 translate-x-2' : ''}`}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="ml-[4rem] md:w-full md:h-full overflow-hidden w-full h-full relative">
                            {services[2].imageUrl.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt={`${services[2].title} image ${index + 1}`}
                                    width={325}
                                    height={300}
                                    className="absolute transition-transform duration-500 ease-in-out"
                                    style={{ bottom: `${index * 10}%`, left: `${index * 10}%`, zIndex: +index }} // Stack images with offset
                                />
                            ))}
                        </div>
                    </div>
                    {/* Brand Identity */}
                    <div className="md:w-[25rem] md:h-[22rem] w-[20rem] h-[20rem] md:px-1 md:pt-5 md:py-0 px-4 py-4 m-0 bg-[#292929] rounded-[30px] flex flex-col justify-center items-center hover:shadow-red-md overflow-hidden">
                        <div className="md:p-1 p-1 md:w-[23rem] w-full flex justify-center items-start">
                            <div className="w-fit px-2">
                                <h1 className="md:text-2xl text-xl">{services[3].title}</h1>
                                <p className="font-light text-xs py-2">{services[3].description}</p>
                            </div>
                            <Link
                                onMouseEnter={() => setHovered3(true)}
                                onMouseLeave={() => setHovered3(false)}
                                href={services[3].redUrl}
                                className="p-1 text-white flex justify-center items-center"
                            >
                                <div
                                    className={`relative w-[2.8rem] h-[2.8rem] rounded-full pl-2 bg-gradient-to-r from-purple-600 to-blue-400 text-center flex justify-center items-center -rotate-45 transition-transform duration-300 ease-in-out hover:shadow-lg`}
                                >
                                    <FaChevronRight
                                        className={`w-8 h-8 font-light transition-transform duration-100 ease-in-out ${hovered3 ? 'scale-50 translate-x-2' : ''}`}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="m-1 md:w-full md:h-full flex justify-center items-center overflow-hidden w-full h-full relative">
                            {services[3].imageUrl.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt={`${services[3].title} image ${index + 1}`}
                                    width={320}
                                    height={300}
                                    className="absolute transition-transform duration-500 ease-in-out"
                                />
                            ))}
                        </div>
                    </div>
                    <a href="/">
                        <h1 className="text-2xl">Explore More...</h1>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hya;