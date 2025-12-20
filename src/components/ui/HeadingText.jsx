import React from 'react';

const HeadingText = React.memo(({ text1 = '', text2 = '', text3 = '' }) => {
  return (
    <div className="text-center flex flex-col mx-6 ">
      {/* Title (Rendered only if text1 exists) */}
      {text1 && (
        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-medium font-inter text-[#EE2B2A] mb-5 leading-snug">
          {text1}
        </h2>
      )}

      {/* Subheading (Rendered only if text2 exists) */}
      {text2 && (
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-jakarta text-white font-semibold mb-7  leading-tight">
          {text2}
        </h3>
      )}

      {/* Description (Rendered only if text3 exists) */}
      {text3 && (
        <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-white font-inter font-normal max-w-6xl mx-auto leading-relaxed">
          {text3}
        </p>
      )}
    </div>
  );
});

// Prevent unnecessary re-renders
export default React.memo(HeadingText);
