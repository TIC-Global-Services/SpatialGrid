import React from 'react';
import { iconsPath, imagePath } from '../../../utils/imagePath';
import FooterSection from '../../layout/FooterSection';

const GridVentureResearchJoin = () => {
  const researchData = [
    {
      id: 1,
      icon: iconsPath?.manufacturing,
      title: 'Smart manufacturing and Digital Twins',
    },
    {
      id: 2,
      icon: iconsPath?.enterprize,
      title: 'Enterprise Training and Simulation',
    },
    {
      id: 3,
      icon: iconsPath?.safety,
      title: 'Safety and Training in Hazardous Workspaces',
    },
    {
      id: 4,
      icon: iconsPath?.machinery,
      title: 'High Level Simulation of Machinery',
    },
    {
      id: 5,
      icon: iconsPath?.retail,
      title: 'Retail and Customer Engagement',
    },
  ];

  return (
    <div className="bg-[#000000] relative">
      <div className="flex flex-col gap-2 px-4 sm:px-8 md:px-12 lg:px-[17%] py-6 sm:py-8 md:py-10 bg-[#1E1F22]">
        <h1 className="font-anybody text-2xl sm:text-3xl md:text-[40px] text-[#ffffff]">
          Applied Research & Real-World Impact
        </h1>
        <p className="text-[#ffffff] text-base sm:text-lg md:text-[18px] max-w-[600px]">
          Our innovations don't stay in the lab — we rapidly translate them into
          pilot programs, enterprise use cases, and industry-specific
          applications. Current focus areas include:
        </p>

        <div className="mt-4 md:mt-6">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 sm:gap-6 md:gap-10 text-[#ffffff] text-[14px] my-3 sm:my-4 md:my-5 mx-2 sm:mx-4 md:mx-8"
            >
              <div
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)' }}
                className="bg-[#37393F] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-[10px] flex-shrink-0"
              >
                <img
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <p className="text-base sm:text-lg md:text-[20px] text-[#ffffff]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Images positioned absolutely - hidden on small screens */}
        <div className="hidden lg:block absolute pt-8 -left-64 z-0 pointer-events-none">
          <img
            className="h-[690px] w-[900px]"
            src={iconsPath?.realWorld1}
            alt="background"
          />
        </div>

        {/* Top-right image - hidden on small screens */}
        <div className="hidden lg:block absolute h-[300px] -top-[18px] -right-0 z-0 pointer-events-none">
          <img
            className="h-[300px] w-[400px]"
            src={iconsPath?.realWorld2}
            alt=""
          />
        </div>

        <p className="text-[#ffffff] max-w-[600px] mt-4 md:mt-6 text-base sm:text-lg">
          "We work closely with strategic partners, academic institutions, and
          enterprise clients to validate, scale, and deploy real-world
          solutions."
        </p>
      </div>

      {/* Join Us Section */}

      <div className="bg-[#121316]">
        <div className="relative z-10">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-[10%] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10">
            <h1 className="text-[#ffffff] font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold">
              Join Us in Building Tomorrow
            </h1>
            <p className="text-[#ffffff] text-base sm:text-lg md:text-[18px] max-w-[800px]">
              Spatial Grid Ventures is not just about technology — it's about
              transforming how people interact with the world around them. If
              you're a founder, researcher, or organization pushing the edge of
              immersive intelligence, we'd love to collaborate.
            </p>
            <div className="flex flex-col gap-1 md:gap-2 mt-2">
              <span className="flex items-center gap-2 md:gap-3 text-[#ffffff] text-sm sm:text-base">
                <img
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  src={iconsPath?.rightArrowRed}
                  alt=""
                />
                Explore Partnerships
              </span>
              <span className="flex items-center gap-2 md:gap-3 text-[#ffffff] text-sm sm:text-base">
                <img
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  src={iconsPath?.rightArrowRed}
                  alt=""
                />{' '}
                Access Research
              </span>
              <span className="flex items-center gap-2 md:gap-3 text-[#ffffff] text-sm sm:text-base">
                <img
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  src={iconsPath?.rightArrowRed}
                  alt=""
                />{' '}
                Get Involved
              </span>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default GridVentureResearchJoin;
