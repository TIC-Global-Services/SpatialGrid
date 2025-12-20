import React from 'react';
import { MediumButton } from '../ui/buttons';
// import { MediumButton } from "./ui/buttons";

const GetStartedSection = React.memo(() => {
  return (
    <div className="mt-16 bg-[#1E1F22] py-12 sm:py-16 mb-10 px-4 sm:px-8 lg:px-16 w-full max-w-[90%] xl:max-w-6xl mx-auto rounded-2xl text-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-white font-jakarta leading-tight">
        Get Started Today
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl font-normal text-white font-sans py-4 sm:py-6 leading-relaxed">
        Discover how Spatial Computing can redefine your business.
      </p>

      {/* Button */}
      <MediumButton
        className="mt-6 sm:mt-8 bg-[#EE2B2A] hover:bg-[#EE2B1A88] transition duration-300"
        title="Talk to an Expert"
      />
    </div>
  );
});

export default GetStartedSection;
