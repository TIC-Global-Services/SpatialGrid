import React, { useEffect } from 'react'
import { imagePath } from '../utils/imagePath'

const AirPurifierAdmin = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://appclip.apple.com/id?p=com.SpatialGrid.Air-Purifier.Clip';
    }, 500); 

    // Optional: Clear timeout if component unmounts before 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <img className='max-w-[350px]' src={imagePath?.creme21} alt="Creme21 Logo" /> */}
    </div>
  )
}

export default AirPurifierAdmin;
