"use client";
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Cta from './Cta';

function NavBar() {
    const [navbar, setNavbar] = useState<boolean>(false);

    // from-[#1A1A1A] to-black/3 bg-gradient-to-b from-[#1A1A1A] to-white/2
    return (
        <nav className="w-full md:pt-4 fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
            <div className="w-full lg:w-3/5 md:flex md:justify-between md:items-center md:px-4 md:rounded-full md:p-2 p-4 from-[#1A1A1A] to-white/1 bg-gradient-to-b md:backdrop-blur-sm">
                {/* LOGO */}
                <div className='md:w-1/5 flex md:flex-col flex-row items-center justify-between md:py-1 md:block'>
                    <div className="">
                        <Link href="/">
                            <Image className='w-4/5' src="https://res.cloudinary.com/dllddjxkf/image/upload/v1723583777/TAC/zghvu2mjhjkuls26wtvf.png" alt="Description" width={300} height={100} />
                        </Link>
                    </div>
                    {/* HAMBURGER BUTTON FOR MOBILE */}
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border transform transition-transform duration-300"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? <FiX size={30} /> : <FiMenu size={30} />}
                        </button>
                    </div>
                </div>
                <div className={`transparent text-white flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
                    <ul className="text-white text-sm md:h-fit items-center justify-center md:flex relative">
                        <li className="relative group">
                            <div className="hover:text-purple-300 hover:shadow-lg md:pb-3 text-md py-2 md:px-6 text-center cursor-pointer transform transition-transform hover:translate-y-1">
                                Services
                            </div>
                            <ul className="w-[11rem] absolute hidden group-hover:block border  md:backdrop-blur-lg text-white text-sm rounded-lg shadow-lg">
                                {['/digitalmarketing', '/websitedesign'].map((path, index) => (
                                    <Link
                                        key={index}
                                        href={path}
                                        className="block px-4 py-2 hover:bg-purple-500 transition-colors rounded-lg"
                                        onClick={() => {
                                            setNavbar(false);
                                        }}
                                    >
                                        <li className="text-md">
                                            {path.slice(1).replace('-', ' ')}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </li>
                        {['/about', '/blog', '/careers', '/contact'].map((path, index) => (
                            <Link
                                key={index}
                                href={path}
                                className={`hover:text-purple-300 pb-3 text-md py-2 md:px-6 text-center transform transition-transform hover:translate-y-1`}
                                onClick={() => {
                                    setNavbar(false);
                                }}
                            >
                                <li className={`text-md py-2 text-center`}>
                                    <div>
                                        {path.slice(1) || 'Home'}
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Cta />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
