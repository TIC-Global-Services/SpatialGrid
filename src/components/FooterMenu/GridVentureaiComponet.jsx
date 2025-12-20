import React from 'react';
import { iconsPath, imagePath } from '../../utils/imagePath';
import { gridAiData, researchData, xrData } from '../../utils/constant';

export const SpatialOS = React.memo(({}) => {
  return (
    <>
      <div className="bg-[#ffffff] w-full relative ">
        <div className="pl-[20px] sm:pl-[50px] md:pl-[75px] lg:pl-[100px]   pt-12">
          <h1 className="text-[#121316] text-[42px] sm:text-[48px] md:text-[60px] font-anybody  pl-28">
            Spatial <span className="text-[#D9232A] font-anybody">OS</span>
          </h1>
          <p className="text-[#121316] mb-4  pl-28">
            Lightweight, responsive, & purpose-built for total immersion.
          </p>
          <img
            className="w-full h-auto"
            src={imagePath?.mrGlasses}
            alt="Spatial OS"
          />
        </div>
      </div>
    </>
  );
});

export const BuiltforSpace = React.memo(({}) => {
  return (
    <>
      <div className="my-4 sm:my-6 md:my-8 lg:my-10 px-4 sm:px-8 md:px-16 lg:px-24 ">
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
      <div className="w-full flex flex-col md:flex-row items-center  pr-0 sm:pr-0 md:pr-16 lg:pr-24 pb-8">
        <div className="w-full lg:w-2/3 flex  mb-8 lg:mb-0 relative ">
          <img
            className="max-w-full md:max-w-[85%] xl:max-w-[800px] object-contain"
            src={imagePath?.xrGlasses}
            alt="XR Glasses"
          />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-12 pl-[20px] sm:pl-[50px] md:pl-0">
          {xrData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 sm:gap-6 md:gap-10"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:gap-10">
                <img
                  className="h-8 w-8 sm:h-16 sm:w-16"
                  src={item.icon}
                  alt={item.title}
                />
                <div className="flex flex-col">
                  <h1 className="text-[14px] font-semibold text-white max-w-full md:max-w-[180px]">
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

      <div className="flex items-center bg-[#121316] pt-8 sm:pt-12 md:pt-16 justify-center px-4 sm:px-8 md:px-16 pb-24">
        <p className="text-[#ffffff] max-w-[1000px] text-[18px] sm:text-[22px] md:text-[28px] text-center ">
          "We're not just making MR glasses wearable — we're making them
          essential. A spatial-first OS built to power the next era of
          productivity, training, and collaboration at enterprise scale."
        </p>
      </div>
    </>
  );
});

export const AgenticIntelligence = React.memo(({}) => {
  return (
    <div className="bg-[#ffffff] flex flex-col px-4 sm:px-8 md:px-12 lg:px-[12%] py-6 md:py-10 relative z-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 md:gap-8">
          <img
            className="h-12 w-12 md:h-20 md:w-20"
            src={imagePath?.logo_small}
            alt="logo"
          />
          <h1 className="text-xl md:text-[32px] font-semibold font-jakarta max-w-[150px]">
            Spatial Grid <span className="text-[#D9232A]">AI</span>
          </h1>
        </div>
        <p className="text-[#121316] text-xl md:text-[28px] font-jakarta">
          Agentic Intelligence That Acts with Purpose
        </p>
        <span className="text-[#484848] text-base md:text-[20px] max-w-[650px]">
          An autonomous, goal-driven AI agents that operate within spatial
          environments to assist, advise, and act in real time.{' '}
        </span>
      </div>

      <div className="hidden lg:block absolute -top-[40px] right-[105px] lg:right-[0px]">
        <img
          className="h-[400px] md:h-[600px] lg:h-[800px] w-auto object-contain"
          src={imagePath?.reaearch1}
          alt="Grid AI"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-8 mt-6 md:mt-10 pb-5">
        {gridAiData.map((item) => (
          <div key={item.id} className="flex items-center gap-4 md:gap-8">
            <div className="bg-[#121316] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-[10px]">
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div>
              <h1 className="text-[#484848] text-sm md:text-[16px] font-semibold">
                {item.title}
              </h1>
              <p className="text-[#000000] text-xs md:text-[12px] max-w-[380px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white mt-8 md:mt-16 px-4 md:px-6 z-[999] py-5 ">
        <p className="text-[#333333] text-sm md:text-base lg:text-xl max-w-[80%]  font-bold">
          "Our research explores how these agents can operate within immersive
          platforms, driving automation, assistance, and intelligent system
          orchestration."
        </p>
      </div>

      <div className="hidden lg:block absolute -bottom-[0px] left-0">
        <img
          className="h-[100px] md:h-[230px] w-auto object-contain"
          src={imagePath?.reaearch2}
          alt="Grid AI"
        />
      </div>
    </div>
  );
});

export const SpacesSmart = React.memo(({}) => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden z-[99]">
      <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 max-w-6xl">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="flex items-center gap-2 mb-6 md:mb-12">
          <span className="text-base md:text-lg text-[#ffffff]">
            🌐 Spatial AI: Making Spaces Smart
          </span>
        </div>

        <h1 className="text-xl md:text-[28px] mb-8 md:mb-16 max-w-4xl leading-tight">
          Spatial AI is the brain that gives environments context. Our R&D is
          focused on turning physical spaces into intelligent systems that:
        </h1>

        <div className="space-y-8 md:space-y-12 relative">
          <div className="flex items-center gap-4 md:gap-8 relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1e2228] flex items-center justify-center relative z-10">
              <img
                className="h-8 w-8 md:h-10 md:w-10"
                src={iconsPath?.learn}
                alt=""
              />
            </div>
            <p className="text-base md:text-xl">
              Learn from movement, patterns, and voice
            </p>
            <div
              className="absolute top-12 left-14 w-[2px] bg-[#23D972] hidden md:block"
              style={{
                height: '120px',
                transform: 'rotate(-48deg)',
                transformOrigin: 'top left',
              }}
            />
          </div>

          <div className="flex items-center gap-4 md:gap-8 ml-4 sm:ml-16 md:ml-32 relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1e2228] flex items-center justify-center relative z-10">
              <img
                className="h-8 w-8 md:h-10 md:w-10"
                src={iconsPath?.understand}
                alt=""
              />
            </div>
            <p className="text-base md:text-xl">
              Understand human behavior and spatial intent
            </p>
            <div
              className="absolute top-12 left-14 w-[2px] bg-[#23D972] hidden md:block"
              style={{
                height: '120px',
                transform: 'rotate(-48deg)',
                transformOrigin: 'top left',
              }}
            />
          </div>

          <div className="flex items-center gap-4 md:gap-8 ml-8 sm:ml-32 md:ml-64 relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1e2228] flex items-center justify-center relative z-10">
              <img
                className="h-8 w-8 md:h-10 md:w-10"
                src={iconsPath?.learn}
                alt=""
              />
            </div>
            <p className="text-base md:text-xl">
              Integrate seamlessly with IoT and enterprise systems
            </p>
            <div
              className="absolute top-12 left-14 w-[2px] bg-[#23D972] hidden md:block"
              style={{
                height: '125px',
                transform: 'rotate(-48deg)',
                transformOrigin: 'top left',
              }}
            />
          </div>

          <div className="flex items-center gap-4 md:gap-8 ml-12 sm:ml-48 md:ml-96 relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1e2228] flex items-center justify-center relative z-10">
              <img
                className="h-8 w-8 md:h-10 md:w-10"
                src={iconsPath?.experience}
                alt=""
              />
            </div>
            <p className="text-base md:text-xl">
              Trigger dynamic experiences based on spatial context
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-24 max-w-3xl mx-auto">
          <p className="text-base md:text-[20px] font-medium text-center">
            "By embedding intelligence into physical spaces, we enable adaptive
            environments that enhance user experience and optimize operations."
          </p>
        </div>
      </div>
    </div>
  );
});

export const AppliedResearch = React.memo(({}) => {
  return (
    <div className="flex flex-col gap-2 px-4 sm:px-8 md:px-12 lg:px-[17%] py-6 sm:py-8 md:py-10 bg-[#1E1F22]">
      <h1 className="font-anybody text-2xl sm:text-3xl md:text-[40px] text-[#ffffff]">
        Applied Research & Real-World Impact
      </h1>
      <p className="text-[#ffffff] text-base sm:text-lg md:text-[18px] max-w-[600px]">
        Our innovations don't stay in the lab — we rapidly translate them into
        pilot programs, enterprise use cases, and industry-specific
        applications. Current focus areas include:
      </p>

      <div
        className="mt-4 md:mt-6"
        style={{
          zIndex: 1,
        }}
      >
        {researchData.map((item) => (
          <div
            key={item.id}
            className=" flex items-center gap-3 sm:gap-6 md:gap-10 text-[#ffffff] text-[14px] my-3 sm:my-4 md:my-5 mx-2 sm:mx-4 md:mx-8"
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
      <div className="hidden lg:block absolute pt-8 -left-64  pointer-events-none">
        <img
          className="z-0 h-[690px] w-[900px]"
          src={iconsPath?.realWorld1}
          alt="background"
        />
      </div>

      {/* Top-right image - hidden on small screens */}
      <div className="hidden lg:block absolute h-[300px] -top-[18px] -right-0  pointer-events-none">
        <img
          className="z-0 h-[300px] w-[400px]"
          src={iconsPath?.realWorld2}
          alt=""
        />
      </div>

      <p className="text-[#ffffff] max-w-[600px] mt-4 md:mt-6 text-base sm:text-lg">
        "We work closely with strategic partners, academic institutions, and
        enterprise clients to validate, scale, and deploy real-world solutions."
      </p>
    </div>
  );
});

export const JoinUsSection = React.memo(({}) => {
  return (
    <div
      className="relative z-10 pb-40 bg-no-repeat bg-cover joinUsBg"
      style={{
        backgroundImage: `url(${imagePath.JoinUsImg})`,
        backgroundPosition: 'center -50%',
      }}
    >
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-[10%] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10">
        <h1 className="text-[#ffffff] font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold">
          Join Us in Building Tomorrow
        </h1>
        <p className="text-[#ffffff] text-base sm:text-lg md:text-[18px] max-w-[800px]">
          Spatial Grid Ventures is not just about technology — it's about
          transforming how people interact with the world around them. If you're
          a founder, researcher, or organization pushing the edge of immersive
          intelligence, we'd love to collaborate.
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
  );
});
