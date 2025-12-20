import { useEffect } from 'react';

const useClickOutside = (ref, callback, callback1) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      } else {
        if (callback1) {
          callback1();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, callback1]);
};

export default useClickOutside;
