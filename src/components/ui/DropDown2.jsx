import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Dropdown2 = React.memo(({ isOpen, children }) => {
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile and update state
  const updateDimensions = () => {
    const isMobileScreen = window.innerWidth < 768;
    setIsMobile(isMobileScreen);
  };

  useEffect(() => {
    // Initial check
    updateDimensions();
    
    // Add event listener for window resize
    window.addEventListener("resize", updateDimensions);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-30 left-0 right-0 text-white p-4 z-50 flex justify-center"
    >
      <div className={`bg-[#35373A] rounded-[20px] mt-6 max-h-[500px] overflow-y-auto ${isMobile ? 'w-full' : 'w-auto'} md:h-fit scrollbar`}>
        {children}
      </div>
    </motion.div>
  );
});

export default Dropdown2;