import React, { useState } from 'react';
import Input from '../components/ui/Input';
import { iconsPath, imagePath } from '../utils/imagePath';
import { DocumentsLinks } from '../utils/constant';
import { SidebarMenu } from '../components/ui/UtilsLayout';
import { Drawer } from '../components/ui/Drawer';

const Documentation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6 mt-32 md:mt-40 text-white px-4 xl:px-8 border-t-none md:border-t border-[#515151] -mb-5">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* Sidebar for large screens */}
        <div className="hidden lg:block lg:w-1/4 pt-6 px-2">
          <SidebarMenu arr={DocumentsLinks} />
        </div>

        {/* Main Content Section */}
        <div className="w-full lg:w-3/4 pt-2 md:pt-6 px-2 sm:px-4 md:px-6 lg:px-8 border-l-none md:border-l border-[#515151] pb-10">
          {/* Documentation Header */}
          <div className="text-[#EE2B2A] text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight flex justify-between items-center">
            Documentation
            {/* Mobile Menu Button */}
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

          {/* Introduction Section */}
          <Section title="Introduction">
            <p>
              Start using the latest Spatial Grid tools for your organization.
              Grant your users access to Spatial Grid features directly from
              your admin settings.
            </p>
          </Section>

          {/* Feature Activation Section */}
          <Section title="How Feature activation works">
            <p>
              Easily manage your organization's access to Spatial Grid features.
              Grant access to a feature to evaluate its capabilities, and update
              access at any time based on the unique needs of your company and
              teams.
            </p>
            <ul className="list-disc pl-4 md:pl-10">
              <li>
                You can grant or revoke access to features for users or teams.
              </li>
              <li>Beta feature settings persist after release.</li>
              <li>Revoking access does not delete prior content.</li>
            </ul>
            <InfoBlock text="💡 Track which features have been made available to users in your Audit logs." />
          </Section>

          {/* Feature Activation Steps */}
          <Section title="Steps to Activate a Feature">
            <ol className="list-decimal pl-6 md:pl-10">
              <li>Go to your Account settings.</li>
              <li>Click on Organization.</li>
              <li>Click Feature activation.</li>
              <li>Choose who can access the feature.</li>
              <li>
                If selecting "Specific teams," add teams from the dropdown.
              </li>
              <li>Manage team access by adding or removing them as needed.</li>
            </ol>
            <InfoBlock text="✏️ Best practice: Start with one team before rolling out to the entire organization." />
          </Section>

          {/* Image Example */}
          <img
            src={imagePath?.HelpCenterLevelIII}
            alt="Feature Activation Guide"
            className="w-full max-w-full h-auto mt-6"
          />
          <p className="font-light italic text-[#949494] pt-4">
            Feature access settings
          </p>

          {/* Feature Access Control Section */}
          <Section title="Available Feature Access Controls">
            <SubSection title="Spatial Grid AI">
              <p>
                Spatial Grid AI automates content generation, organization, and
                summarization. You can enable or disable beta features in the AI
                settings.
              </p>
              <MoreInfo
                links={['Spatial Grid AI', 'Spatial Grid Admin Security']}
              />
            </SubSection>

            <SubSection title="Talktrack">
              <p>
                Record interactive video walkthroughs to improve collaboration
                without extra meetings. Explore Talktrack's features for better
                productivity.
              </p>
              <img
                src={imagePath?.HelpCenterLevelIII_2}
                alt="Talktrack Feature Access"
                className="w-full max-w-full h-auto mt-4"
              />
              <p className="font-light italic text-[#949494] pt-4">
                Talktrack Feature Access Control
              </p>
              <MoreInfo links={['Talktrack', 'Talktrack Admin Security']} />
            </SubSection>
          </Section>
        </div>

        {/* Right Sidebar Section */}
        <div className="hidden lg:block lg:w-1/4 pt-6 px-2 mt-10">
          <div className="w-full">
            <Input
              leftIcon={
                <img
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B8B8B8] h-[18px]"
                  src={imagePath?.SearchIcon}
                  alt=""
                />
              }
              className="pr-5 !h-[40px] !rounded-[40px] bg-[#444447] border border-[#5c5c5c] pl-10 text-white placeholder:text-[#B8B8B8]"
              type="text"
              placeholder="Search Documentation"
            />
            <RightComponent />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <Drawer zInd={10000} isOpen={open} setIsOpen={setOpen}>
        <SidebarMenu arr={DocumentsLinks} />
      </Drawer>
    </div>
  );
};

/* Section Component */
const Section = ({ title, children }) => (
  <div className="mt-10">
    <div className="text-xl md:text-2xl lg:text-3xl tracking-tight text-[#D8D8D8]">
      {title}
    </div>
    <div className="font-extralight my-4">{children}</div>
  </div>
);

/* SubSection Component */
const SubSection = ({ title, children }) => (
  <div className="mt-6">
    <div className="text-xl font-bold text-[#D8D8D8]">{title}</div>
    <div className="font-light">{children}</div>
  </div>
);

/* InfoBlock */
const InfoBlock = ({ text }) => (
  <div className="w-full bg-[#1E1F22] rounded-[10px] flex gap-2 items-center px-5 py-5 my-10 text-[16px] font-light">
    {text}
  </div>
);

/* More Info Section */
const MoreInfo = ({ links }) => (
  <div className="mt-5">
    <div className="text-[25px] tracking-tight text-[#D8D8D8]">
      More information:
    </div>
    {links.map((link, index) => (
      <div
        key={index}
        className="cursor-pointer text-[#519FFF] underline underline-offset-4 pt-4"
      >
        {link}
      </div>
    ))}
  </div>
);

/* Right Sidebar Component */
const RightComponent = React.memo(() => {
  const articles = [
    'Topic 1 written here',
    'Topic 2 written here',
    'Topic 3 written here',
    'Topic 4 written here',
    'Topic 5 written here',
  ];

  return (
    <div className="mt-10 border-l border-[#515151] pl-6">
      <div className="font-medium text-lg mb-4">Table of Contents</div>
      <div className="flex flex-col gap-2">
        {articles.map((title, i) => (
          <div
            key={i}
            className="text-[13px] font-light cursor-pointer py-2"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Documentation;
