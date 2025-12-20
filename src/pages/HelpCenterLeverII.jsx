import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import { iconsPath, imagePath } from '../utils/imagePath';
import { HelpCenterLvl_2_1, HelpCenterLvl_2_2 } from '../utils/constant';
import { Brodcrumb } from '../components/ui/UtilsLayout';

/**
 * Reusable component to render help center sections dynamically.
 */
const HelpCenterSection = ({ data, navigate }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-y-5 mt-4 self-start">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => item?.path && navigate(item.path)}
          className={`pb-3 flex gap-3 items-center ${
            item?.icon ? 'cursor-pointer font-bold' : 'font-light'
          } ${item?.border ? 'border-b border-[#515151]' : ''}`}
          style={{ color: item?.color }}
        >
          {item?.title}{' '}
          {item?.icon && (
            <img
              src={iconsPath.rightArrowRed}
              alt="menu icon"
              className="h-[15px] w-[15px] cursor-pointer"
            />
          )}
        </div>
      ))}
    </div>
  );
};

const HelpCenterLevelII = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col items-start gap-6">
        {/* Breadcrumb Navigation */}
        <Brodcrumb
          data={{
            name: 'Enterprise Getting Started & Team Management',
            item: [{ name: 'Spatial Grid Help Center', path: -1 }],
          }}
        />

        {/* Page Header and Search Input */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5 w-full">
          <h2 className="text-2xl tracking-tight text-center">
            Enterprise Getting Started & Team Management
          </h2>
          <Input
            leftIcon={
              <img
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-[18px]"
                src={imagePath?.SearchIcon}
                alt="Search"
              />
            }
            className="w-full md:w-[450px] !h-[40px] !rounded-[40px] bg-[#444447] border border-[#5c5c5c] pl-12 text-white placeholder:text-[#B8B8B8]"
            type="text"
            placeholder="Search the Spatial Grid Help Center"
          />
        </div>

        {/* Section Titles */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-5 mt-4">
          <div className="font-semibold">Enterprise admin deployment guide</div>
          <div className="font-semibold">Managing Enterprise teams and content</div>
          <div className="font-light">Get started</div>
        </div>

        {/* Help Center Sections */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          <HelpCenterSection data={HelpCenterLvl_2_1} navigate={navigate} />
          <HelpCenterSection data={HelpCenterLvl_2_2} navigate={navigate} />
        </div>

        {/* Additional Sections */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 mt-4">
          <div className="font-semibold">Enterprise workflow automation</div>
          <div className="font-semibold">Product Announcements</div>
          <div className="font-light">Product Announcements Portal (BETA)</div>
          <div className="font-light">Product Announcements Portal (BETA)</div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterLevelII;
