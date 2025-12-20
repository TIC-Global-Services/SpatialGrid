import React, { useState } from 'react';
import { Brodcrumb } from '../components/ui/UtilsLayout';
import Input from '../components/ui/Input';
import { iconsPath, imagePath } from '../utils/imagePath';
import { Drawer } from '../components/ui/Drawer';

const HelpCenterLevelIII = () => {
  const [activeLeft, setActiveLeft] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col items-start gap-6">
        {/* Header Section with Breadcrumb and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4">
          <Brodcrumb
            data={{
              name: 'Feature Use',
              item: [
                { name: 'Spatial Grid Help Center', path: -2 },
                {
                  name: 'Enterprise Getting Started & Team Management',
                  path: -1,
                },
              ],
            }}
          />
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

        {/* Main Content */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 mt-4">
          {/* Left Sidebar */}
          <div className="hidden lg:flex flex-[3]">
            <LeftComponent
              activeLeft={activeLeft}
              setActiveLeft={setActiveLeft}
            />
          </div>

          {/* Center Content */}
          <div className="flex-[10] w-full">
            <ContentHeader setOpen={setOpen} open={open} />
            <ContentBody />
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:flex flex-[3]">
            <RightComponent />
          </div>
        </div>

        {/* Drawer for Mobile View */}
        <Drawer zInd={10000} isOpen={open} setIsOpen={setOpen}>
          <LeftComponent
            activeLeft={activeLeft}
            setActiveLeft={setActiveLeft}
            onClose={() => setOpen(false)}
          />
        </Drawer>
      </div>
    </div>
  );
};

// Left Sidebar Component
const LeftComponent = React.memo(({ activeLeft, setActiveLeft, onClose }) => {
  const articles = [
    "Spatial Grid's new Admin Console",
    'Public beta program',
    'Migrating to Enterprise Plan',
    'Team management on Enterprise Plan',
    'Create a new team',
    'Team permissions',
    'Manage team privacy and discovery',
    'Content Admin permissions for Company Admins',
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="pl-4 lg:pl-0">Articles in this section</div>
      <div className="flex flex-col gap-2">
        {articles.map((title, i) => (
          <div
            key={i}
            className={`text-[13px] cursor-pointer px-3 py-2 w-full ${activeLeft === i ? 'bg-[#31333A] rounded-[5px]' : ''}`}
            onClick={() => {
              if (onClose) onClose();
              setActiveLeft(i);
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
});

// Right Sidebar Component
const RightComponent = React.memo(() => {
  const topics = [
    'How Feature activation works',
    'How to use Feature activation',
    'Available Feature access controls',
    'Spatial Grid AI',
    'Talktrack',
  ];

  return (
    <div className="mt-10 flex-[3] flex flex-col gap-5 border-l border-[#515151] pl-10">
      <div>On this page</div>
      <div className="flex flex-col gap-2">
        {topics.map((title, i) => (
          <div key={i} className="text-[13px] font-light cursor-pointer py-2">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
});

// Content Header with Toggle Button for Mobile
const ContentHeader = ({ setOpen, open }) => (
  <div className="text-xl md:text-2xl lg:text-3xl font-bold flex justify-between items-center">
    Feature Use
    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden text-white focus:outline-none"
      aria-label="Toggle Menu"
    >
      <img
        src={iconsPath.menuIcon}
        alt="menu icon"
        className="h-[26px] w-[26px] cursor-pointer"
      />
    </button>
  </div>
);

// Reusable component for displaying feature sections
const FeatureSection = ({ title, description, image, links }) => (
  <div className="my-10">
    <div className="text-[22px] tracking-tight text-[#D8D8D8] mb-3">
      {title}
    </div>
    <p className="font-extralight my-4">{description}</p>
    {image && <img src={image} alt={title} />}
    {links && (
      <div className="mt-5">
        <div className="text-[25px] tracking-tight text-[#D8D8D8] mb-3">
          More information:
        </div>
        {links.map((link, index) => (
          <div
            key={index}
            className="cursor-pointer text-[#519FFF] underline underline-offset-4 pt-2"
          >
            {link}
          </div>
        ))}
      </div>
    )}
  </div>
);

// Main content body
const ContentBody = () => {
  const featureList = [
    {
      title: 'Spatial Grid AI',
      description:
        'Spatial Grid uses machine learning models along with your input to generate content on your Spatial Grid board. Spatial Grid AI enables users to automate content generation, organization, and summarization on their boards. Within the Spatial Grid AI section, you have the option to turn on or off beta features.',
      links: ['Spatial Grid AI', 'Spatial Grid Admin security'],
    },
    {
      title: 'Talktrack',
      description:
        'Record interactive video walkthroughs of Spatial Grid boards to get ideas across, without spending extra time in meetings. Explore Talktrack’s features and see how it can help your team be more productive and efficient in their collaboration efforts.',
      image: imagePath?.HelpCenterLevelIII_2,
      links: ['Talktrack', 'Talktrack Admin security'],
    },
  ];

  return (
    <div>
      <p className="font-extralight my-4">
        Start using the latest Spatial Grid tools for your organization. Grant
        your users access to Spatial Grid features directly from your admin
        settings.
      </p>

      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#D8D8D8]">
        How Feature activation works
      </h2>

      <p className="font-extralight my-4">
        Easily manage your organization's access to Spatial Grid features. Grant
        access to a feature to evaluate its capabilities, and update access
        anytime.
      </p>

      <ul className="list-disc pl-4 md:pl-10">
        {[
          'You can make a feature accessible to everyone, specific teams, or revoke access.',
          'Feature settings remain the same after release if granted in beta.',
          'Revoking access doesn’t delete any created content.',
        ].map((text, index) => (
          <li key={index} className="font-light">
            {text}
          </li>
        ))}
      </ul>

      <div className="w-full bg-[#1E1F22] rounded-[10px] flex gap-2 items-center px-5 py-5 my-10 text-[16px] font-light">
        💡 Track feature availability in Audit logs.
      </div>

      <img src={imagePath?.HelpCenterLevelIII} alt="Feature settings" />

      <h3 className="font-light italic text-[#949494] pt-4">
        Feature access settings
      </h3>

      <div className="mt-10 mb-3 text-xl md:text-2xl lg:text-3xl tracking-tight text-[#D8D8D8]">
        Available Feature access controls
      </div>

      {featureList.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
};

export default HelpCenterLevelIII;
