import React from 'react';
import { iconsPath, imagePath } from '../utils/imagePath';
import Input from '../components/ui/Input';
import {
  HelpCenterData,
  HelpCenterPlanData,
  trandingTopics,
} from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import FAQSection from '../components/3D_Home/FAQSection';

const HelpCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16 xl:px-24 py-[20vh] text-white">
      {/* Help Center Header */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <img
          src={imagePath?.logo_small}
          alt="logo_small"
          className="w-[30px] md:w-[40px] lg:w-[50px] object-contain"
        />
        <div className="h-[30px] md:h-[40px] border-l border-white"></div>
        <div className="text-[clamp(1.25rem,2vw,2rem)] font-semibold">
          HELP CENTER
        </div>
      </div>

      {/* Search Bar */}
      <div className="text-[clamp(1.5rem,3vw,2.5rem)] text-center font-medium mb-6">
        What can I help you find?
      </div>
      <div className="w-full px-4 md:px-10 mb-10">
        <Input
          leftIcon={
            <img
              className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 h-[22px]"
              src={imagePath?.SearchIcon}
              alt="Search"
            />
          }
          className="text-base md:text-lg w-full !h-[50px] !rounded-full bg-[#444447] border border-[#5c5c5c] pl-10 md:pl-20 text-white placeholder:text-[#B8B8B8]"
          type="text"
          placeholder="Search the Spatial Grid Help Center"
        />
      </div>

      {/* Help Center Categories */}
      <Section title="Help Center Categories" side="center">
        <Grid data={HelpCenterData} onClick={(path) => navigate(path)} />
      </Section>

      {/* Enterprise Plan Administration */}
      <Section title="Enterprise Plan Administration">
        <Grid data={HelpCenterPlanData} />
      </Section>

      {/* Trending Topics */}
      <Section title="Trending Topics">
        <div className="grid grid-cols-1 max-w-[600px] md:max-w-full md:grid-cols-2 gap-4 w-full">
          {trandingTopics.map((v, i) => (
            <div
              key={i}
              className="w-full px-4 py-3 md:p-6 text-white flex justify-between items-center  rounded-lg cursor-pointer  transition"
            >
              <p className="text-base md:text-lg">{v?.title}</p>
              <img src={iconsPath?.rightArrowRed} alt="Right Arrow" />
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

/**
 * Reusable Section Component
 */
const Section = ({ title, children, side = 'left' }) => (
  <div className="w-full my-8">
    <h2
      className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold mb-4"
      style={{ textAlign: side }}
    >
      {title}
    </h2>
    {children}
  </div>
);

/**
 * Reusable Grid Component
 */
const Grid = ({ data, onClick }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full">
    {data.map((v, i) => (
      <div
        key={i}
        className="flex flex-col items-center text-center gap-3 cursor-pointer "
        onClick={() => v?.path && onClick && onClick(v?.path)}
      >
        <div className="w-[30vw] md:w-[180px] lg:w-[200px] aspect-square bg-[#31333A] rounded-xl"></div>
        <p className="text-base md:text-lg font-bold">{v?.title}</p>
        {v?.desc && (
          <p className="text-sm md:text-base text-[#ccc]">{v?.desc}</p>
        )}
      </div>
    ))}
  </div>
);

export default HelpCenter;
