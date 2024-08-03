import React from 'react';
import Image from 'next/image';

function DmQuadImages() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-4">
      <div className="relative w-full h-64 md:h-full">
        <Image
          src="https://res.cloudinary.com/drszvaldf/image/upload/v1719217264/TAC/gkxzruq3bxhlxuol0sts.png"
          alt="Bulla Double"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-64 md:h-full">
        <Image
          src="https://res.cloudinary.com/drszvaldf/image/upload/v1719217264/TAC/gkxzruq3bxhlxuol0sts.png"
          alt="Business Cards"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-64 md:h-full">
        <Image
          src="https://res.cloudinary.com/drszvaldf/image/upload/v1719217264/TAC/gkxzruq3bxhlxuol0sts.png"
          alt="Naomi Judge"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-64 md:h-full">
        <Image
          src="https://res.cloudinary.com/drszvaldf/image/upload/v1719217264/TAC/gkxzruq3bxhlxuol0sts.png"
          alt="Air France"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    </>
  );
}

export default DmQuadImages;
