import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { iconsPath, imagePath } from '../../utils/imagePath';
import useClickOutside from '../UseClickOutside';

export const RightIcon = React.memo(({ open, onClick, className }) => {
  return (
    <span
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`ml-2 ${className}`}
    >
      <img
        src={iconsPath?.rightIcon}
        className={`transform transition-transform ${
          open ? 'rotate-90' : 'rotate-0'
        }`}
        alt="Right Icon"
      />
    </span>
  );
});

export const CloseIcon = React.memo(({ closeModal, className }) => {
  return (
    <>
      {closeModal && (
        <button
          onClick={closeModal}
          className={`hover:scale-110 hover:transition  top-3 right-3 h-[30px] w-[30px] rounded-full bg-[#31333A] p-[2px] text-white text-[20px] flex justify-center items-center ${className}`}
        >
          <img src={iconsPath.closeIcon} alt="close Icon" />
        </button>
      )}
    </>
  );
});

export const Brodcrumb = React.memo(({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="hidden sm:block ">
        {Object.keys(data)?.length > 0 && (
          <p
            className={`flex gap-2 text-[14px] text-[#D9D9D9] ${
              data?.mt ? data?.mt : ''
            } `}
          >
            {data?.item?.map((v, i) => (
              <span
                className="cursor-pointer  flex gap-2 items-center "
                key={i}
                onClick={() => navigate(v?.path)}
              >
                {/* {v?.name} <FaChevronRight size={16} className="font-light" /> */}
                {v?.name} <img src={iconsPath?.rightIcon} alt="Right Icon" />
              </span>
            ))}
            <span className="font-light"> {data.name}</span>
          </p>
        )}
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
});

export const BackButton = React.memo(
  ({ className = 'flex sm:hidden', icon }) => {
    const navigate = useNavigate();
    return (
      <div
        className={`${className} gap-2 justify-start items-center cursor-pointer`}
        onClick={() => navigate(-1)}
      >
        {icon ? icon : <img src={iconsPath?.leftIcon} alt="Left Icon" />}
        Back
      </div>
    );
  }
);

export const SidebarSubmenu = React.memo(({ subItem }) => {
  const [isOpen, setIsOpen] = useState(false); // Initially open

  return (
    <li>
      <div
        className="flex justify-start gap-2 items-center p-2 hover:bg-[#31333A] cursor-pointer rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {subItem.submenu?.length > 0 && (
          // <FaChevronDown
          //   className={`transition-transform duration-300 ${
          //     isOpen ? 'rotate-0' : '-rotate-90'
          //   }`}
          // />
          <img
            src={iconsPath.downIcon}
            alt="down icon"
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-0' : '-rotate-90'
            }`}
          />
        )}
        <span>{subItem.name}</span>
      </div>

      {/* Nested Submenu */}
      {isOpen && subItem.submenu?.length > 0 && (
        <ul className="ml-4 mt-1  pl-4">
          {subItem.submenu.map((nestedItem, nestedIndex) => (
            <li
              key={nestedIndex}
              className="p-2 hover:bg-[#31333A] rounded cursor-pointer"
            >
              {nestedItem.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
});

export const SidebarMenu = React.memo(({ arr, onClose }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [version, setVersion] = useState('1.0');

  const versionData = [
    {
      version: '1.0',
    },
    {
      version: '1.1',
    },
    {
      version: '1.2',
    },
    {
      version: '1.3',
    },
    {
      version: '1.4',
    },
  ];

  const [openMenus, setOpenMenus] = useState(() => {
    let initialState = {};
    arr.forEach((_, index) => {
      initialState[index] = false;
    });
    return initialState;
  });

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="p-5 lg:p-0">
        <div
          ref={ref}
          className="relative w-full border-[#656565] border-2 p-3 rounded-[10px] mt-10 lg:mt-0 "
          onClick={() => setOpen(!open)}
        >
          <div className="flex justify-between items-center cursor-pointer ">
            <div className="flex gap-1 items-center">
              <span className="text-[12px] ">Spatial Grid </span>
              <span className="text-[12px] font-light">Version {version}</span>
            </div>
            {/* <FaChevronDown
              className={`${
                open ? '-rotate-90 ' : 'rotate-0'
              } transition-transform duration-300`}
            /> */}
            <img
              src={iconsPath.downIcon}
              alt="down icon"
              className={`${
                open ? '-rotate-90 ' : 'rotate-0'
              } transition-transform duration-300`}
            />
          </div>
          {open && (
            <div className="z-20 absolute flex flex-col left-0 top-[150%] bg-[#515151] w-full rounded-[10px]">
              {versionData?.map((v, i) => (
                <div
                  key={i}
                  className="p-2 text-[12px] cursor-pointer hover:bg-black hover:font-bold"
                  onClick={() => setVersion(v?.version)}
                >
                  Version {v?.version}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className=" w-full lg:w-60  xl:w-80  text-white h-screen p-4 overflow-y-auto">
        <ul className="space-y-2">
          {arr.map((item, index) => (
            <li key={index}>
              <div
                className="flex justify-start gap-3 items-center p-2 hover:bg-[#31333A] cursor-pointer rounded"
                onClick={() => toggleMenu(index)}
              >
                {item.submenu?.length > 0 && (
                  // <FaChevronDown
                  //   className={`transition-transform duration-300 ${
                  //     openMenus[index] ? 'rotate-0' : '-rotate-90'
                  //   }`}
                  // />
                  <img
                    src={iconsPath.downIcon}
                    alt="down icon"
                    className={`transition-transform duration-300 ${
                      openMenus[index] ? 'rotate-0' : '-rotate-90'
                    }`}
                  />
                )}
                <span className="font-bold text-[15px] lg:text-[18px]">
                  {item.name}
                </span>
              </div>

              {/* Submenu - Initially open, toggle on click */}
              {openMenus[index] && item.submenu?.length > 0 && (
                <ul className="ml-4 mt-2 space-y-1  pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <SidebarSubmenu key={subIndex} subItem={subItem} />
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export const DocumentationCard = React.memo(({ title, desc, index }) => {
  return (
    <div
      className={`flex ${
        index % 2 !== 0
          ? ' flex-col-reverse lg:flex-row'
          : ' flex-col-reverse lg:flex-row-reverse'
      } gap-10 items-start w-full `}
    >
      <div className="flex flex-col gap-3 flex-1 w-full mt-16 lg:mt-10 ">
        {/* <div className="">{title}</div>
        <div className="">{desc}</div> */}
        <div className="text-3xl cursor-pointer">{title} </div>
        <div className="tex-lg font-light text-[#717173] max-w-[75%]">
          {desc}{' '}
        </div>
      </div>
      <div className="flex-1 m min-w-full min-h-[400px] md:min-w-fit md:min-h-fit lg:w-full bg-[#1A1C20] rounded-[10px] h-[400px]  relative">
        <div
          className={`right-11 z-10 -bottom-16 absolute w-[250px] h-[140px] bg-[#28292D] rounded-[5px]`}
          style={{
            boxShadow: '0px 5px 4px 0px #00000040',
          }}
        ></div>
      </div>
    </div>
  );
});

export const ToolsCard = React.memo(({ img, title, desc }) => {
  return (
    <div className="px-3 md:px-5 py-3 md:py-10 w-full h-fuw-full bg-[#1A1C20] flex flex-col gap-2 items-center rounded-[10px]">
      <img
        src={img}
        alt="visual-editor"
        className="sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]  object-contain "
      />
      <div className="text-[20px]">{title}</div>
      <div className="text-center text-[18px] text-[#757678]">{desc}</div>
    </div>
  );
});

export const ModalDefaultComponent = React.memo(({ children, closeModal }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    closeModal();
  });
  return (
    <div
      ref={modalRef}
      className="flex justify-center items-center border border-[#444447] min-w-screen rounded-[10px] min-w-[500px] py-6 px-8 bg-[#1E1F22] overflow-hidden "
    >
      <div className="   rounded-lg  min-w-full md:min-w-[350px] max-w-[350px] justify-center items-center mr-auto ml-auto flex flex-col gap-2 min-h-[140px] h-auto w-full py-2">
        {children}
      </div>
    </div>
  );
});

export const TodaySpatial = React.memo(({}) => {
  return (
    <div className="px-6 md:px-20 mb-10 flex flex-col items-center gap-8 md:gap-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src={imagePath?.logo_small}
            alt="Spatial Grid Logo"
            className="w-20 md:w-32 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-4xl">
          <h5 className="text-[#98989A] text-lg md:text-xl font-semibold mb-3 md:mb-4">
            Today, Spatial Grid Leads the Way in Spatial Computing and
            Intelligent XR Solutions
          </h5>
          <p className="text-[#98989A] text-xs md:text-sm leading-relaxed">
            Combining the power of design, engineering, and AI-driven strategy
            to create transformative spatial experiences for the enterprise. We
            invite you to join us at the forefront of innovation — where
            physical and digital worlds converge. Discover how Spatial Grid can
            help your organization unlock immersive intelligence, redefine
            interaction, and bring visionary spatial experiences to life.
          </p>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-[#242424] bg-opacity-80 border-2 border-[#262626] rounded-md w-full max-w-[1200px] mx-auto p-4 md:py-0 md:h-[70px]">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4 md:gap-6 px-5 ">
          {/* Welcome Text */}
          <p className="text-sm sm:text-xs text-[#98989A] text-center md:text-left">
            Welcome to Spatial Grid
          </p>

          {/* Center Description */}
          <div className="bg-[#262626] px-4 sm:px-8 md:px-12 py-[10px] rounded-md w-full md:w-auto text-center md:text-left">
            <p className="text-sm sm:text-xs text-white">
              Where Spatial Intelligence Meets Deep Expertise to Power the
              Future of Immersive Enterprise Innovation.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#EE2B2A] py-3 px-6 sm:py-3.5 sm:px-8 text-sm sm:text-xs text-white rounded-[10px] whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
});
