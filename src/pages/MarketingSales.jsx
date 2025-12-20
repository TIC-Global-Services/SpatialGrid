import React from 'react';
import { MarketingSalesList } from '../utils/constant';
import Input from '../components/ui/Input';
import { imagePath } from '../utils/imagePath';

const MarketingSales = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-32 md:pt-40 text-white px-5 md:px-10 lg:px-16 xl:px-16 pb-16">
      {/* Header Section */}
      <div className="mb-20 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#D8D8D8] font-bold py-4 lg:py-10">
          Marketing & Sales
        </h1>

        {/* Search Input Field */}
        <Input
          leftIcon={
            <img
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B8B8B8] h-[18px]"
              src={imagePath?.SearchIcon}
              alt="Search Icon"
            />
          }
          className="min-w-[90vw] md:min-w-[60vw] !h-[40px] !rounded-[40px] bg-[#444447] border border-[#5c5c5c] pl-12 text-white placeholder:text-[#B8B8B8]"
          type="text"
          placeholder="Search for a Case Study"
        />
      </div>

      {/* Marketing Sales Items Grid */}
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MarketingSalesList.map((item, index) => (
          <div key={index} className="bg-[#1A1C20] rounded-[10px] p-5">
            {/* Placeholder for Image or Content */}
            <div className="min-h-[250px] min-w-full"></div>

            {/* Item Title */}
            <h3 className="text-center">{item?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingSales;
