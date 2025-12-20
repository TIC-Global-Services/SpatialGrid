import React from 'react';
import { AllIndustriesList } from '../utils/constant';

const AllIndustries = () => {
  return (
    <div className="container mx-auto flex flex-col items-start gap-6 pt-20 md:pt-28 text-white px-5 md:px-10 lg:px-16 pb-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-[#D8D8D8] w-full font-bold py-4 lg:py-10">
        Spatial Grid for Industries
      </h2>

      {/* Grid Layout */}
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllIndustriesList.map((industry, index) => (
          <div
            key={index} // Prefer a unique ID if available
            className="bg-[#1A1C20] rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] flex justify-center items-center">
              {industry.image ? (
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-contain rounded-md"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400 rounded-md">
                  No Image
                </div>
              )}
            </div>

            {/* Industry Title */}
            <h3 className="text-center text-lg font-semibold mt-4">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIndustries;
