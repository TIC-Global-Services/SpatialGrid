import React from 'react';
import { imagePath } from '../../../utils/imagePath';

const GridVentureOs = () => {
  const xrData = [
    {
      id: 1,
      icon: imagePath?.environment,
      title: 'Dynamic environment-object',
      description: 'anchoring for real-world precision',
    },
    {
      id: 2,
      icon: imagePath?.letency,
      title: 'Low-latency',
      description: 'spatial awareness for real-time interaction',
    },
    {
      id: 3,
      icon: imagePath?.gesture,
      title: 'Gesture & gaze-',
      description: 'anchoring for real-world precision',
    },
    {
      id: 4,
      icon: imagePath?.multiUser,
      title: 'Multi-user',
      description: 'shared presence across persistent spatial sessions',
    },
  ];
  return (
    <div className="bg-white relative">
      <div className="bg-[#121316]">
        <div className="bg-[#ffffff] w-full relative bottom-8">
          <div className="pl-[20px] sm:pl-[50px] md:pl-[75px] lg:pl-[100px] pr-4 sm:pr-6 md:pr-8 my-2 sm:my-3 md:my-6 lg:my-8">
            <h1 className="text-[#121316] text-[32px] sm:text-[40px] md:text-[48px] font-anybody">
              Spatial <span className="text-[#D9232A] font-anybody">OS</span>
            </h1>
            <p className="text-[#121316] mb-4">
              Lightweight, responsive, & purpose-built for total immersion.
            </p>
            <img
              className="w-full h-auto"
              src={imagePath?.mrGlasses}
              alt="Spatial OS"
            />
          </div>
        </div>
        <div className="my-4 sm:my-6 md:my-8 lg:my-10 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="pl-[20px] sm:pl-[50px] md:pl-[100px] lg:pl-[150px]">
            <p className="text-[#ffffff] text-[18px] sm:text-[24px] md:text-[28px] max-w-[1000px]">
              Redefining how people interact, create, and collaborate across
              spatial environments. Moving beyond apps and screens,
              <span className="text-[#D9232A]"> Spatial OS </span>is designed to
              deliver fluid, intelligent, & persistent spatial
              experiences—seamlessly embedded into the world around you.
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 my-4 sm:my-6 md:my-8 lg:my-10">
          <div className="pl-[20px] sm:pl-[50px] md:pl-[75px] lg:pl-[100px]">
            <h4 className="text-[24px] sm:text-[32px] md:text-[44px] font-jakarta text-[#ffffff] font-thin">
              Built for Space. Designed for People
            </h4>
          </div>
        </div>

        {/* Main content area with image and feature list */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:gap-12 xl:gap-48 px-4 sm:px-8 md:px-16 lg:px-24 pb-8">
          <div className="w-full lg:w-1/2 flex  mb-8 lg:mb-0 relative right-28">
            <img
              className="max-w-full lg:max-w-[600px] object-contain"
              src={imagePath?.xrGlasses}
              alt="XR Glasses"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 pl-[20px] sm:pl-[50px] md:pl-0">
            {xrData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 sm:gap-6 md:gap-10"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:gap-10">
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    src={item.icon}
                    alt={item.title}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[14px] font-semibold text-white max-w-[110px] sm:max-w-[120px] md:max-w-[180px]">
                      {item.title + ' '}
                      <span className="text-sm text-[#ffffff] text-opacity-70 font-normal block sm:inline">
                        {item.description}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center bg-[#121316] pt-8 sm:pt-12 md:pt-16 justify-center px-4 sm:px-8 md:px-16">
          <p className="text-[#ffffff] max-w-[1000px] text-[18px] sm:text-[22px] md:text-[28px] text-center sm:text-left">
            "We're not just making MR glasses wearable — we're making them
            essential. A spatial-first OS built to power the next era of
            productivity, training, and collaboration at enterprise scale."
          </p>
        </div>

        <div className="bg-[#121316] relative h-[100px] pl-[20px] sm:pl-[50px] z-[9]">
          <img
            className="z-10 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"
            src={imagePath?.plus}
            alt="Plus icon"
          />
        </div>
      </div>
    </div>
  );
};

export default GridVentureOs;
