import React from 'react';
import NavbarComponent from '../HomePage/NavBarComponent';
import { imagePath } from '../../utils/imagePath';

const HeroSection = ({
  image = imagePath?.textcontainer,
  heading,
  subtext,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center h-64 w-full"
    >
      <div className="bg-[#262626]/50 h-full w-full flex flex-col justify-between">
        <NavbarComponent />
        <div className="text-center px-4 relative top-20 md:top-32">
          <h1 className="text-3xl md:text-4xl font-jakarta mb-2 text-[#ffffff]">
            {heading}
          </h1>
          <p className="max-w-7xl mx-auto text-sm md:text-base text-[#E6E6E6]">
            {subtext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
