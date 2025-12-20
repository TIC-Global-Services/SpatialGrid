import React from 'react';
import { imagePath } from '../utils/imagePath';

import LayoutOther from '../components/layout/LayoutOther';
import { TodaySpatial } from '../components/ui/UtilsLayout';
import { storySections } from '../utils/constant';

const About = () => {
  return (
    <LayoutOther
      heading={'About Us'}
      subtext={
        'Empowering enterprises through spatial computing, agentic AI, and immersive technologies — transforming how businesses interact intelligently with space'
      }
    >
      {/* About Spatial Grid Section - FULL CONTAINER SHRINK */}
      <div className="w-full flex justify-center mt-10">
        <div
          className="origin-top scale-[0.95] md:scale-100 transition-transform duration-300"
          style={{ width: '90%', maxWidth: '1200px' }}
        >
          <div className="border border-[#262626] px-6 sm:px-8 md:px-12 py-4 md:py-6 rounded-md flex flex-col lg:flex-row items-center justify-between gap-4 overflow-hidden">
            <div className="w-full lg:w-1/2 py-3">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-jakarta mb-3 text-center md:text-left">
                Spatial Grid
              </h2>
              <p className="text-[#E6E6E6] text-opacity-80 text-sm md:text-base leading-relaxed text-center md:text-left">
                Spatial Grid is committed to transforming the future of
                human-digital interaction through Spatial Computing &
                Intelligence. By integrating immersive technologies with Spatial
                Agentic AI, we empower enterprises to accelerate deployment
                through rapid, market-ready features and strategic custom
                solutions. As an OS for Mixed Reality Devices, Spatial Grid
                enables seamless publishing and scaling of immersive
                experiences, shaping the next era of spatial computing.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="w-full max-w-[500px] object-contain max-h-[60vh]"
                src={imagePath?.aboutus}
                alt="Spatial Grid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section - FULL CONTAINER SHRINK */}
      <div className="w-full flex justify-center mt-10 mb-16">
        <div
          className="origin-top scale-[0.95] md:scale-100 transition-transform duration-300"
          style={{ width: '90%', maxWidth: '1200px' }}
        >
          <div className="border border-[#262626] rounded-md">
            <h2 className="text-white text-2xl md:text-3xl font-jakarta px-6 md:px-12 py-6 border-b border-[#262626]">
              Our Story
            </h2>

            {storySections
              .reduce((rows, section, index) => {
                if (index % 2 === 0) rows.push([section]);
                else rows[rows.length - 1].push(section);
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <div key={rowIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#262626]">
                    {row.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`flex flex-col items-center justify-center py-8 px-6 ${
                          idx === 0
                            ? 'border-b md:border-b-0 md:border-r border-[#262626]'
                            : ''
                        }`}
                      >
                        <div className="w-full max-w-[510px]">
                          <div className="flex items-center gap-4 mb-6">
                            <h1 className="text-[#EE2B2A] text-6xl md:text-8xl lg:text-[100px]">
                              {item.id}
                            </h1>
                            <h4 className="text-[#EE2B2A] text-xl md:text-2xl border-b-2 border-[#262626] pb-2 w-full">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-[#98989A] text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <TodaySpatial />
    </LayoutOther>
  );
};

export default About;
