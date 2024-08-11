import React from 'react';
import ServiceCard from './ServiceCard';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string[];
  redUrl: string;
}

interface ServiceSectionProps {
  services: ServiceItem[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ services }) => {
  return (
    <div className="w-full flex justify-center items-center bg-[#1A1A1A]">
      <div className="gap-4 md:gap-8 md:h-[60rem] flex flex-col md:flex-wrap justify-center items-center">
        <h1 className="text-2xl">How You Ask?</h1>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            redUrl={service.redUrl}
          />
        ))}
        <a href="/">
          <h1 className="text-2xl">Explore More...</h1>
        </a>
      </div>
    </div>
  );
};

export default ServiceSection;
