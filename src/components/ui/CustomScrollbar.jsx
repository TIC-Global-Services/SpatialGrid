import React from 'react';

const CustomScrollbar = React.memo(({ children, className = '' }) => {
  return (
    <div
      className={`custom-scrollbar ${className} overflow-hidden
      [&::-webkit-scrollbar]:w-2 
      [&::-webkit-scrollbar-track]:bg-gray-100 
      [&::-webkit-scrollbar-track]:rounded-lg
      [&::-webkit-scrollbar-thumb]:bg-gray-300 
      [&::-webkit-scrollbar-thumb]:rounded-lg
      [&::-webkit-scrollbar-thumb:hover]:bg-gray-400
      hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
      dark:[&::-webkit-scrollbar-track]:bg-gray-800
      dark:[&::-webkit-scrollbar-thumb]:bg-gray-600
      dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500`}
    >
      {children}
    </div>
  );
});

export default CustomScrollbar;
