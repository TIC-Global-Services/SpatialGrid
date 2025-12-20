import React from 'react';
import HeroSection from '../HeroSection';
import { imagePath } from '../../../utils/imagePath';

const GridVentureHeader = () => {
  return (
    <div>
      <HeroSection
        image={imagePath?.textcontainer}
        heading="Spatial Grid Ventures"
        subtext={
          'Investing in bold ideas and visionary founders redefining the future of spatial computing, AI, immersive tech, & intelligent environments.'
        }
      />
    </div>
  );
};

export default GridVentureHeader;
