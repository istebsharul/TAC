"use client";
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Cta() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-6 py-2 flex justify-center items-center rounded-full bg-gradient-to-r from-purple-800 to-purple-400 text-white text-xs transition duration-300 ease-in-out hover:from-purple-900 hover:to-purple-500"
      >
        {hovered ? "Let's TAC" : "Let's Talk"}
        <FaChevronRight className='ml-1'/>
      </button>
    </div>
  );
}

export default Cta;
