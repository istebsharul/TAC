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
        <nav className="w-full md:pt-4  flex justify-center items-center md:bg-gradient-to-b fixed top-0 left-0 right-0 z-50 from-[#1A1A1A] to-white/1 bg-gradient-to-b md:backdrop-blur-sm">
            <div className="w-full lg:w-3/5 md:flex md:justify-between md:items-center md:px-4 md:rounded-full md:p-2 p-4">
                {/* LOGO */}
                <div className='flex md:flex-col items-center justify-between md:py-1 md:block'>
                    <div className="w-[9rem]">
                        <Link href="/">
                            <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1719048815/TAC/kqi5tyefif6jzik9i33y.png" alt="Description" width={200} height={100} />
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
                        {['/services', '/about', '/blog', '/careers','/contact'].map((path, index) => (
                            <li key={index} className={`hover:text-purple-600 pb-3 text-md py-2 md:px-6 text-center transform transition-transform hover:translate-y-1`}>
                                <Link href={path} onClick={() => {
                                    setNavbar(false)
                                }}>
                                    <div>
                                        {path.slice(1) || 'Home'}
                                    </div>
                                </Link>
                            </li>
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
