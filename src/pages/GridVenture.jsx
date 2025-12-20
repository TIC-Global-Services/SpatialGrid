import React from 'react';
import LayoutOther from '../components/layout/LayoutOther';
import {
  AgenticIntelligence,
  AppliedResearch,
  BuiltforSpace,
  JoinUsSection,
  SpacesSmart,
  SpatialOS,
} from '../components/FooterMenu/GridVentureaiComponet';
import { imagePath } from '../utils/imagePath';

const GridVenture = () => {
  const componentData = [
    BuiltforSpace,
    AgenticIntelligence,
    SpacesSmart,
    AppliedResearch,
  ];
  return (
    <LayoutOther
      heading={'Spatial Grid Ventures'}
      subtext={
        'Investing in bold ideas and visionary founders redefining the future of spatial computing, AI, immersive tech, & intelligent environments.'
      }
    >
      <div className="bg-white relative">
        <div className="bg-[#121316]">
          <SpatialOS />

          {componentData.map((Component, index) => (
            <div className="relative" key={index}>
              <Component />
              <div
                className={`hidden md:block absolute  ${index % 2 == 0 ? 'left-16 -bottom-7' : 'right-16 -bottom-24'} z-[999]`}
              >
                <img
                  className="z-[9999] h-16 w-16 md:h-32 md:w-32"
                  src={imagePath?.plus}
                  alt=""
                />
              </div>
            </div>
          ))}
          <JoinUsSection />
        </div>
      </div>
    </LayoutOther>
  );
};

export default GridVenture;
