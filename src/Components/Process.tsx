"use client";
import React, { useState } from 'react';

const Process: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const steps = [
    { title: "Discovery", content: "We begin by understanding your business, identifying key challenges, and setting goals for the project." },
    { title: "Research", content: "Our team conducts thorough research on your audience, competitors, and market trends to inform our strategy." },
    { title: "Concept", content: "We develop initial concepts and strategies, brainstorming ideas to create a clear roadmap for the project." },
    { title: "Refinement", content: "We refine our concepts based on feedback, fine-tuning the strategy to ensure it meets your objectives." },
    { title: "Implementation", content: "Our team starts the implementation phase, creating and deploying digital assets and strategies across various platforms." },
    { title: "Master file", content: "We compile all finalized assets and strategies into a master file, ensuring everything is ready for launch." },
    { title: "Launch!", content: "We launch the project, closely monitoring and adjusting as needed to optimize performance and achieve the best results." }
  ];

  const baseColor = 'rgba(211, 211, 211'; // This is the RGB part of the color D3D3D3

  // Generate an array of colors with increasing opacity, starting from 10% and ending at full opacity
  const colorsWithOpacity = steps.map((_, index) => `${baseColor}, ${(index + 0.3) * 0.1})`).reverse();

  return (
    <div className="flex flex-col items-center bg-[#1A1A1A] pt-40 px-6 md:px-0">
      <div className="text-xl font-medium mb-6 text-white">Our Process</div>
      {steps.map((step, index) => (
        <div
        key={index}
        className={`w-full max-w-4xl cursor-pointer transition-all duration-500 flex flex-col items-center`}
        style={{
          backgroundColor: colorsWithOpacity[index],
          height: expandedCard === index ? 'auto' : '4rem',
          maxHeight: expandedCard === index ? '100%' : '4rem', // Ensures smooth height transition
          overflow: 'hidden', // Hides overflowing content during transition
          borderRadius: index === 0 ? '1rem 1rem 0 0' : index === steps.length - 1 ? '0 0 1rem 1rem' : '0'
        }}
        onClick={() => toggleCard(index)}
      >
        <h2 className={`text-2xl font-bold text-center relative py-3 ${expandedCard === index ? 'text-purple-600' : 'text-white'}`}>
          {index + 1} - {step.title}
        </h2>
        <p
          className={`w-3/5 text-md text-white text-center px-6 pt-6 py-12 transition-opacity duration-500 ${
            expandedCard === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {step.content}
        </p>
      </div>
      
      ))}
    </div>
  );
};

export default Process;
