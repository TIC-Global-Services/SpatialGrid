import React from 'react';

const Card = React.memo(({ children }) => {
  return (
    <div className="bg-[#1E1F22] overflow-y-hidden min-w-full h-[180px]  cursor-pointer rounded-[10px] shadow-lg shadow-[rgba(0,0,0,0.4)]">
      {children}
    </div>
  );
});

export default Card;
