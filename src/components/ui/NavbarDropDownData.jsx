import React from 'react';
import Dropdown2 from './DropDown2';
import { iconsPath, imagePath } from '../../utils/imagePath';
import { useNavigate } from 'react-router-dom';
import { industries } from '../../utils/constant';

const PRODUCTS_DROPDOWN_DATA = [
  {
    section: 'SPATIAL GRID PLATFORM',
    columns: 2,
    items: [
      {
        title: 'Platform Overview',
        description: 'XR platform for enterprise innovation & efficiency.',
        path: '/platform-overview',
        icon: iconsPath?.PlatformOverview,
        comingSoon: false,
      },
      {
        title: 'Generative AI',
        description: 'AI-driven creation for dynamic virtual experiences.',
        icon: iconsPath?.SpatialAI,
        comingSoon: true,
      },
      {
        title: 'Agentic AI',
        description: 'Adaptive intelligence for virtual solutions.',
        icon: iconsPath?.SpatialAI,
        comingSoon: true,
      },
      {
        title: 'Real-Time Analytics',
        description: 'Instant insights for optimization.',
        icon: iconsPath?.RealTimeAnalytics,
        comingSoon: true,
      },
    ],
  },
  {
    section: 'INTEGRATION & OS',
    columns: 1,
    items: [
      {
        title: 'Marketplace',
        description: 'Curated hub for immersive technology solutions.',
        icon: iconsPath?.Multiplayer,
        comingSoon: true,
      },
      {
        title: 'Operating System',
        description: 'Foundation for spatial computing and virtual ecosystems.',
        icon: iconsPath?.OS,
        comingSoon: true,
      },
    ],
  },
];

export const RESOURCES_DROPDOWN_DATA = [
  {
    section: "Get Help",
    items: [
      {
        title: "Customer Support",
        path: "/",
        icon: iconsPath.Documentation,
        description: "Get assistance and resolve issues quickly.",
      },
      {
        title: "Documentation",
        path: "/documentation",
        icon: iconsPath.Documentation,
        description: "Technical guides and developer references.",
      },
      {
        title: "Help Center",
        path: "/help-center",
        icon: iconsPath.HelpCenter,
        description: "FAQs and self-service support resources.",
      },
    ],
  },

  {
    section: "Events",
    items: [
      {
        title: "Summits",
        icon: iconsPath.Documentation,
        description: "Industry-leading immersive technology summits.",
        comingSoon: true,
      },
      {
        title: "Event Calendar",
        icon: iconsPath.HelpCenter,
        description: "Upcoming conferences and community events.",
        comingSoon: true,
      },
    ],
  },

  {
    section: "Blogs & Podcasts",
    items: [
      {
        title: "Spatial Grid Blog",
        icon: iconsPath.HelpCenter,
        description: "Insights on XR, AI, and spatial computing.",
        comingSoon: true,
      },
      {
        title: "Spatial Grid Research",
        icon: iconsPath.Documentation,
        description: "Whitepapers and applied research publications.",
        comingSoon: true,
      },
    ],
  },

  {
    section: "Training & Certification",
    items: [
      {
        title: "Learning Overview",
        icon: iconsPath.Documentation,
        description: "Structured learning paths for all skill levels.",
        comingSoon: true,
      },
      {
        title: "Training Overview",
        icon: iconsPath.HelpCenter,
        description: "Hands-on training programs and workshops.",
        comingSoon: true,
      },
      {
        title: "Spatial Grid Academy",
        icon: iconsPath.Documentation,
        description: "Official certification and learning platform.",
        comingSoon: true,
      },
      {
        title: "University Alliance",
        icon: iconsPath.HelpCenter,
        description: "Academic partnerships and research programs.",
        comingSoon: true,
      },
    ],
  },
];

export const ABOUT_DROPDOWN_DATA = [
  {
    section: "Company",
    items: [
      {
        title: "Who we are",
        path: "/about",
        icon: iconsPath.WhoWeAre,
      },
      {
        title: "Our Team",
        path: "/ourteam",
        icon: iconsPath.OurTeam,
      },
      {
        title: "Spatial Grid Ventures",
        path: "/gridventure",
        icon: iconsPath.SpatialGridVentures,
      },
      {
        title: "Contact Us",
        path: "/contactus",
        icon: iconsPath.ContactUs,
      },
    ],
  },
  {
    section: "Careers",
    items: [
      {
        title: "Working at Spatial Grid",
        path: "/careers",
        icon: iconsPath.OpenPositions,
      },
      {
        title: "Open Jobs",
        path: "/careers",
        icon: iconsPath.OpenPositions,
      },
    ],
  },
  {
    section: "Press",
    items: [
      {
        title: "Awards & Recognitions",
        path: "/press",
        icon: iconsPath.Press,
      },
      {
        title: "Newsroom",
        path: "/press",
        icon: iconsPath.Press,
      },
    ],
  },
  {
    section: "Security & Trust",
    items: [
      {
        title: "Security & Trust",
        path: "/security-and-trust",
        icon: iconsPath.SecurityTrust,
      },
    ],
  },
];


const DropdownItem = ({ item, onClick }) => {
  return (
    <div
      className={`cursor-pointer flex flex-col gap-1 ${
        item.path ? 'hover:opacity-80' : ''
      }`}
      onClick={item.path ? onClick : undefined}
    >
      <div className="flex items-center justify-between gap-4">
        <div className=" relative flex items-center gap-3 w-full">
          {item.icon && (
            <div className="bg-[#2A2B2F] rounded-[5px] p-2">
              <img src={item.icon} className="w-6 h-6   " alt={item.name} />
            </div>
          )}
          <div>
            <h2 className="font-normal lg:font-medium text-sm text-white text-nowrap">
              {item.title}
            </h2>
            {item.description && (
              <p className="text-[10px] text-white opacity-50 hidden md:block">
                {item.description}
              </p>
            )}
          </div>
          {item.comingSoon && (
            <span
              style={{ boxShadow: '0px 0px 4px rgba(0,0,0,0.4)' }}
              className="hidden md:flex items-center justify-center text-[8px] bg-[#54565C] text-[#EDEDED] rounded-full px-4 h-[16px] absolute top-0 right-0"
            >
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProductsDropdown = React.memo(
  ({ isOpen, closeModal, setIsMobileMenuOpen }) => {
    const navigate = useNavigate();

    const navigationFunction = (path) => {
      navigate(path);
      closeModal();
    };

    return (
      <Dropdown2 product isOpen={isOpen}>
        <div className="flex gap-5 md:gap-0 text-white p-8 md:p-6 rounded-[50px]">
          {/* Mobile back */}
          <div className="block md:hidden mb-5">
            <button
              onClick={() => {
                closeModal();
                setIsMobileMenuOpen(true);
              }}
            >
              <img
                className="bg-[#252729] h-6 w-6 px-1 py-1 rounded-full"
                src={iconsPath?.leftIcon}
                alt="Back"
              />
            </button>
          </div>

          <div
            className="flex flex-col md:grid gap-4 md:gap-12"
            style={{ gridTemplateColumns: '1fr 0.6fr' }}
          >
            {PRODUCTS_DROPDOWN_DATA.map((section) => (
              <div key={section.section} className="flex flex-col">
                <h1 className="text-[14px] font-semibold mb-3 tracking-wide">
                  {section.section}
                </h1>

                <div className="hidden md:block h-[1px] bg-white/50 mb-5" />

                <div
                  className={`flex flex-col gap-4 md:grid`}
                  style={{
                    gridTemplateColumns:
                      section.columns === 2 ? '1fr 1fr' : '1fr',
                  }}
                >
                  {section.items.map((item) => (
                    <DropdownItem
                      key={item.title}
                      item={item}
                      onClick={() => item.path && navigationFunction(item.path)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dropdown2>
    );
  }
);

export const ResourcesDropdown = React.memo(
  ({ isOpen, closeModal, setIsMobileMenuOpen }) => {
    const navigate = useNavigate();

    const navigationFunction = (path) => {
      navigate(path);
      closeModal();
    };

    return (
      <Dropdown2 resources isOpen={isOpen}>
        <div className="flex gap-5 md:gap-0 p-7 md:p-6 rounded-[50px] text-white">

          {/* Mobile back button */}
          <div className="block sm:hidden mb-5">
            <button
              onClick={() => {
                closeModal();
                setIsMobileMenuOpen(true);
              }}
            >
              <img
                className="bg-[#252729] h-6 w-6 px-1 py-1 rounded-full"
                src={iconsPath?.leftIcon}
                alt="Back"
              />
            </button>
          </div>

          {/* Sections grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {RESOURCES_DROPDOWN_DATA.map((section, index) => (
              <React.Fragment key={section.section}>
                <div className="flex flex-col gap-0 md:gap-1">
                  <h1 className="text-sm font-semibold mb-3 tracking-wide uppercase text-white">
                    {section.section}
                  </h1>

                  <div className="hidden sm:block h-[1px] bg-white/50 mb-4" />

                  <div className="flex flex-col gap-4">
                    {section.items.map((item) => (
                      <DropdownItem
                        key={item.title}
                        item={item}
                        onClick={() =>
                          item.path && navigationFunction(item.path)
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile divider between sections */}
                {index !== RESOURCES_DROPDOWN_DATA.length - 1 && (
                  <div className="block sm:hidden h-[1px] mt-4 bg-white/50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Dropdown2>
    );
  }
);

export const SolutionDropdown = React.memo(
  ({ isOpen, closeModal, setIsMobileMenuOpen }) => {
    const navigate = useNavigate();

    const navigationFunction = (path) => {
      navigate(path);
      closeModal();
    };

    return (
      <Dropdown2 solutions={true} isOpen={isOpen}>
        <div className=" flex gap-3 md:gap-0 p-3 md:p-6 !rounded-[50px] text-white">
          <div className="block md:hidden  mb-5">
            <button
              onClick={() => {
                closeModal();
                setIsMobileMenuOpen(true);
                console.log('setIsMobileMenuOpen', setIsMobileMenuOpen);
              }}
            >
              <img
                className="bg-[#252729] h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 px-1 py-1 rounded-full"
                src={iconsPath?.leftIcon}
                alt=""
              />
            </button>
          </div>
          {/* Headings */}
          <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
              <h1 className="text-sm font-semibold  tracking-wide text-nowrap text-[#ffffff] uppercase">
                Industries
              </h1>
              <p
                className="text-[#EE2B2A] cursor-pointer"
                onClick={() => navigationFunction('/all-industries')}
              >
                See All Industries →
              </p>
            </div>
            <div className="hidden md:block h-[1px] bg-[#ffffff] bg-opacity-50 mb-5"></div>

            {/* 4-Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
              {[0, 1, 2, 3].map((colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2 md:gap-6">
                  {industries
                    .slice(colIndex * 3, colIndex * 3 + 3)
                    .map((industry, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 hover:opacity-90"
                      >
                        <div className="bg-[#2A2B2F] rounded-[5px] p-2">
                          <img
                            src={industry.icon}
                            className="w-6 h-6   "
                            alt={industry.name}
                          />
                        </div>
                        <span className="text-[#ffffff] text-opacity-90 md:text-opacity-100 text-[14px]">
                          {industry.name}
                        </span>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dropdown2>
    );
  }
);

export const AboutDropdown = React.memo(
  ({ isOpen, closeModal, setIsMobileMenuOpen }) => {
    const navigate = useNavigate();

    const navigationFunction = (path) => {
      navigate(path);
      closeModal();
    };

    return (
      <Dropdown2 about isOpen={isOpen}>
        <div className="flex gap-8 md:gap-0 text-white p-8 md:p-6 rounded-[50px]">

          {/* Mobile back */}
          <div className="block md:hidden mb-5">
            <button
              onClick={() => {
                closeModal();
                setIsMobileMenuOpen(true);
              }}
            >
              <img
                className="bg-[#252729] h-6 w-6 px-1 py-1 rounded-full"
                src={iconsPath?.leftIcon}
                alt="Back"
              />
            </button>
          </div>

          {/* Sections grid */}
          <div
            className="flex flex-col md:grid gap-3 md:gap-8"
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
          >
            {ABOUT_DROPDOWN_DATA.map((section, index) => (
              <React.Fragment key={section.section}>
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold mb-3 tracking-wide uppercase text-white">
                    {section.section}
                  </h1>

                  <div className="hidden md:block h-[1px] bg-white/50 mb-5" />

                  <div className="flex flex-col gap-3 md:gap-4">
                    {section.items.map((item) => (
                      <DropdownItem
                        key={item.title}
                        item={item}
                        onClick={() =>
                          item.path && navigationFunction(item.path)
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile divider */}
                {index !== ABOUT_DROPDOWN_DATA.length - 1 && (
                  <div className="block md:hidden h-[1px] bg-white/50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Dropdown2>
    );
  }
);
