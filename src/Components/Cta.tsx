"use client";
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

function Cta() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href="/contact"
        className="px-6 py-3 text-white text-sm"
      >
        <button
          className={`px-8 py-2 flex justify-center items-center rounded-full bg-gradient-to-r from-purple-800 to-purple-400 transition duration-300 ease-in-out ${
            hovered ? 'from-purple-900 to-purple-500' : ''
          }`}
        >
          {hovered ? "Let's TAC" : "Let's Talk"}
          <FaChevronRight className="ml-1" />
        </button>
      </Link>
    </div>
  );
}

export default Cta;
