import React from 'react';
import { companies } from '../../utils/constant';

const CompaniesSection = React.memo(() => {
  return (
    <div className="bg-[#121316] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[32px] font-semibold text-[#717173] font-jakarta mb-12">
          Companies using{' '}
          <span className="text-[36px] text-[#FFFFFF] font-anybody font-semibold">
            Spatial Grid
          </span>
        </h2>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-content-center justify-items-center gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="p-6 bg-[#191A1D] rounded-lg flex items-center justify-center text-center hover:bg-gray-800 transition duration-300 h-[196px] transform hover:scale-105 "
            >
              <img
                src={company}
                alt={`Company ${index + 1}`}
                className="h-[70%] w-[70%] object-contain transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CompaniesSection;
