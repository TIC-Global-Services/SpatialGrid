import React from 'react';
import { iconsPath } from '../../utils/imagePath';

const Dropdown = React.memo(({ options, value, onChange, placeholder }) => {
  return (
    <div className="relative w-full">
      {/* Dropdown */}
      <select
        value={value}
        onChange={onChange}
        className={`${
          value ? 'text-white' : 'text-[#8A8888]'
        } w-full bg-[#262626] rounded-lg p-3 pr-10 mb-4 placeholder:text-[#8A8888] text-[15px] font-inter font-normal focus:outline-none appearance-none`}
      >
        <option value="" disabled className="text-[#8A8888">
          {placeholder || 'Select an option'}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* <FaChevronDown className="absolute top-[39%] right-4 transform -translate-y-1/2 text-[#8A8888] pointer-events-none" /> */}
      <img
        src={iconsPath.downIcon}
        alt="menu icon"
        className=" h-[15px] w-[15px] absolute top-[39%] right-4 transform -translate-y-1/2 text-[#8A8888] pointer-events-none cursor-pointer"
      />

      {/* Downward Arrow Icon */}
    </div>
  );
});

export default Dropdown;
