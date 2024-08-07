import React from 'react';
import Image from 'next/image';

function DmQuadImages() {
  return (
    <div>
      <div className="md:w-[60rem] md:h-[35rem] w-[25rem] h-[62rem] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-4">
        <div className="relative w-full h-60 md:h-full ">
          <Image
            className='rounded-tl-3xl rounded-br-3xl'
            src="https://res.cloudinary.com/dllddjxkf/image/upload/v1722942531/TAC/v57hfq9fwlcwwlaxctv3.png"
            alt="Bulla Double"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-60 md:h-full ">
          <Image
            className='rounded-tr-3xl rounded-bl-3xl'
            src="https://res.cloudinary.com/dllddjxkf/image/upload/v1722942531/TAC/adqulrsu8i5t5x7c0oyv.png"
            alt="Business Cards"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-60 md:h-full ">
          <Image
            className='rounded-tr-3xl rounded-bl-3xl'
            src="https://res.cloudinary.com/dllddjxkf/image/upload/v1722942531/TAC/hnreugwvvryhcxcbcmjm.png"
            alt="Naomi Judge"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-60 md:h-full ">
          <Image
            className='rounded-tl-3xl rounded-br-3xl'
            src="https://res.cloudinary.com/dllddjxkf/image/upload/v1722942531/TAC/oinxmvio1msq0d5yodi2.png"
            alt="Air France"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DmQuadImages;
