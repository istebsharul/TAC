import React from "react";
import Cta from "../Cta";

export function GridBackgroundDemo() {
  return (
    <div className="h-[40rem] flex flex-col w-full dark:bg-[#1A1A1A] bg-white  dark:bg-grid-purple-500/[0.5] bg-grid-black/[0.2] relative flex items-center justify-center z-1">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1A1A1A] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-2"></div>
      <p className="w-3/5 text-center text-4xl sm:text-7xl font-medium relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 z-30">
      Visually Appealing with Functionality of a kind
      </p>
      <p className="w-3/5 text-xl text-center z-10">A website that not only is visually appealing but has an Interface that improves user experience, converts more, conveys brand message and a lot more...</p>
        <br/>
      <div className="z-20"><Cta/></div>
    </div>
  );
}
