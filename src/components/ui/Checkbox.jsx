import React, { useState } from 'react';

const Checkbox = React.memo(({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden peer"
      />
      <div className="w-5 h-5 border-2 border-[#464646] rounded-md flex items-center justify-center peer-checked:bg-[#464646] peer-checked:border-transparent transition duration-300">
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 11.586l6.293-6.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="font-inter text-[16px] text-[#838383]">{label}</span>
    </label>
  );
});

export default Checkbox;
