import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null; // Do not show anything if online

  return (
    <>
      {!isOnline && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-1/2 -translate-x-1/2  w-[250px] z-[999999] bg-[#1e1f2c] text-white text-center py-2 rounded-b-lg shadow-lg"
        >
          <h1 className="text-nowrap">🔴 No Internet Connection</h1>
        </motion.div>
      )}
      {/* {children} */}
    </>
  );
};

export default NetworkStatus;
