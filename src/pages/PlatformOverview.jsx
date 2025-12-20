// Import necessary dependencies and components
import React, { useState } from 'react';
import ButtonComponent from '../components/ui/ButtonComponent';
import { imagePath } from '../utils/imagePath';
import {
  DocumentationCardData,
  superchargeData,
  ToolsDetails,
} from '../utils/constant';
import { DocumentationCard, ToolsCard } from '../components/ui/UtilsLayout';

// Main functional component for the Platform Overview page
const PlatformOverview = () => {
  // State to track the active supercharge item
  const [superChargeActive, setSuperChargeActive] = useState(0);

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center gap-10 pt-32 md:pt-40 text-white px-5 md:px-10 lg:px-16 xl:px-20">
      {/* Hero section with introduction and call-to-action button */}
      <div className="flex flex-col-reverse lg:flex-row gap-3 w-full">
        <div className="flex-[1] flex flex-col gap-5 w-full">
          {/* Main heading */}
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#D8D8D8] w-full font-bold py-4 lg:py-10">
            No-code 3D web tooling for AR, VR and MR.
          </div>
          {/* Description */}
          <div className="text-[#717173] text-[20px] font-light">
            The Spatial Grid Design Editor simplifies the creation of immersive
            XR experiences for smartphones, VR headsets, & MR glasses—offering a
            seamless no-code approach with the flexibility to integrate custom
            code when needed.
          </div>
          {/* Get Started Button */}
          <ButtonComponent className="w-fit min-w-full md:min-w-[200px] py-4 bg-[#EE2B2A] hover:bg-[#EE2B2A] h-auto ">
            Get Started
          </ButtonComponent>
        </div>
        {/* Image showcasing the visual editor */}
        <div className="flex-[2] w-full">
          <img
            src={imagePath?.visual_editor}
            alt="visual-editor"
            className="w-full h-auto lg:h-[100%] object-contain "
          />
        </div>
      </div>

      {/* Tools section */}
      <div className="w-full flex flex-col gap-4 items-center my-16">
        <DocumentationHeading
          title={' Tools to unleash your creativity'}
          desc={
            '3D opens a new door for creativity. A solid set of features that will help you create your best 3D designs.'
          }
        />
        {/* Displaying available tools in a grid layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 md:gap-4  lg:gap-10">
          {ToolsDetails?.map((v, i) => (
            <ToolsCard key={i} img={v?.img} desc={v?.desc} title={v?.title} />
          ))}
        </div>
      </div>

      {/* Supercharge section */}
      <div className="w-full flex flex-col gap-4 items-center my-16">
        <DocumentationHeading
          title={' How Spatial Grid supercharges your enterprise projects'}
          desc={
            '3D opens a new door for creativity. A solid set of features that will help you create your best 3D designs.'
          }
        />
        {/* Displaying active supercharge image */}
        <img
          src={superchargeData[superChargeActive].img}
          alt="visual-editor"
          className="w-full h-full lg:h-full object-contain "
        />
        {/* List of supercharge options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {superchargeData?.map((v, i) => (
            <div key={i} className="flex flex-col gap-3 md:gap-6 lg:gap-10 ">
              {/* Highlighted indicator for the selected option */}
              <div
                className={`min-w-full h-[4px] w-full ${
                  i === superChargeActive ? 'bg-[#EE2B2A]' : 'bg-[#35373A]'
                } rounded-full`}
              ></div>
              {/* Clickable title to change active supercharge item */}
              <div
                onClick={() => setSuperChargeActive(i)}
                className="text-xl md:text-xl lg:text-2xl xl:text-3xl cursor-pointer"
              >
                {v?.title}
              </div>
              {/* Description of the supercharge feature */}
              <div className="text-md md:text-lg font-light">{v?.desc} </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation section */}
      <div className="w-full flex flex-col gap-10 lg:gap-32 mb-20 my-16">
        {DocumentationCardData.map((v, i) => (
          <DocumentationCard
            index={i}
            key={i}
            title={v?.title}
            desc={v?.desc}
          />
        ))}
      </div>

      {/* Repeated Tools Section */}
      <div className="w-full flex flex-col gap-4 items-center my-16">
        <DocumentationHeading
          title={'How Spatial Grid supercharges your enterprise projects'}
          desc={
            '3D opens a new door for creativity. A solid set of features that will help you create your best 3D designs.'
          }
        />
        {/* Displaying tools in grid layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 md:gap-4  lg:gap-10">
          {ToolsDetails?.map((v, i) => (
            <ToolsCard key={i} img={v?.img} desc={v?.desc} title={v?.title} />
          ))}
        </div>
      </div>

      {/* Final supercharge image section */}
      <div className="w-full flex flex-col gap-7 items-center my-16">
        <DocumentationHeading
          title={'How Spatial Grid supercharges your enterprise projects'}
          desc={
            '3D opens a new door for creativity. A solid set of features that will help you create your best 3D designs.'
          }
        />
        <div className="h-full w-full bg-[#1A1C20] border-none">
          <img alt=''
            className="w-full border-none h-full outline-none object-contain min-h-[600px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

// Memoized component for displaying section headings and descriptions
const DocumentationHeading = React.memo(({ title, desc }) => {
  return (
    <>
      {title && (
        <div className="text-center text-xl md:text-2xl text-[#D8D8D8]">
          {title}
        </div>
      )}
      {desc && (
        <div className="text-[#717173] max-w-[630px] text-[16px] md:text-[20px] text-center">
          {desc}
        </div>
      )}
    </>
  );
});

export default PlatformOverview;
