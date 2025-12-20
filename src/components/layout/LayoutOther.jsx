import React from 'react';
import NavbarComponent from '../HomePage/NavBarComponent';
import { imagePath } from '../../utils/imagePath';
import FooterSection from './FooterSection';

const LayoutOther = ({
  image = imagePath?.textcontainer,
  heading,
  subtext,
  children,
}) => {
  return (
    <div className="bg-[#121316] w-full min-h-screen">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center h-[50vh] w-full"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <NavbarComponent />
          <div className="text-center px-4">
            <h1 className="text-[24px] md:text-[30px] mt-14 font-bold font-jakarta  mb-2 text-[#ffffff]">
              {heading}
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-base text-[#E6E6E6]">
              {subtext}
            </p>
          </div>
        </div>
      </div>
      {children}
      <FooterSection />
    </div>
  );
};

export default LayoutOther;
