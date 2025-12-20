import React from 'react';

export const SmallButton = React.memo(
  ({ onClick, disabled = false, className = '', title = '' }) => {
    return (
      <div className="flex justify-center self-center w-full">
        <button
          onClick={onClick}
          disabled={disabled}
          aria-disabled={disabled}
          className={`min-w-20 sm:min-w-[100px] md:min-w-[140px] h-[47px] sm:h-[50px] bg-[#252729] text-white text-sm sm:text-[14px] md:text-[16px] px-6 py-2
        rounded-md hover:bg-[#191A1D] transition focus:outline-none font-inter font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          {title}
        </button>
      </div>
    );
  }
);

export const MediumButton = React.memo(
  ({ onClick, disabled = false, className = '', title = '' }) => {
    return (
      <div className="flex justify-center self-center w-full">
        <button
          onClick={onClick}
          disabled={disabled}
          aria-disabled={disabled}
          className={`min-w-[70px] sm:min-w-[200px] md:min-w-[230px] md:h-[60px] sm:h-[50px] h-[40px]  text-white text-[12px] sm:text-lg md:text-xl px-3 md:px-6 py-2
        rounded-md transition focus:outline-none font-inter font-bold disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          {title}
        </button>
      </div>
    );
  }
);
