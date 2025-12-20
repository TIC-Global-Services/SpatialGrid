import React from 'react';
import { iconsPath, imagePath } from '../../../utils/imagePath';

const GridVentureai = () => {
  const gridAiData = [
    {
      id: 1,
      icon: iconsPath?.experienceGeneration,
      title: 'Prompt-to-Experience Generation',
      description:
        'Turn text, image, or video inputs into immersive scenes, simulations, or training modules.',
    },
    {
      id: 2,
      icon: iconsPath?.agenticLoop,
      title: 'Agentic Iteration Loop',
      description:
        'AI agent tests the experience, gathers insights, and continuously improves performance.',
    },
    {
      id: 3,
      icon: iconsPath?.analytics,
      title: 'Built-in Analytics for Continuous Learning',
      description:
        'Captures real-time user behavior to optimize interactions, layouts, and outcomes.',
    },
    {
      id: 4,
      icon: iconsPath?.modularBusiness,
      title: 'Modular, Business-Specific Assets',
      description:
        'Generates reusable templates and logic tailored to your enterprise needs.',
    },
  ];

  return (
    <div className="bg-[#121316] min-h-screen overflow-x-hidden">
      <div className="bg-[#ffffff] flex flex-col px-4 sm:px-8 md:px-12 lg:px-[17%] py-6 md:py-10 relative z-0">
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

        <div className="hidden md:block absolute -top-[40px] right-[-245px] lg:right-[-15px]">
          <img
            className="h-[400px] md:h-[600px] lg:h-[800px] w-auto object-contain"
            src={imagePath?.reaearch1}
            alt="Grid AI"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-8 mt-6 md:mt-10">
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
        <div className="bg-white mt-8 md:mt-16 px-4 md:px-6 z-[999] p-2">
          <p className="text-[#333333] text-sm md:text-base max-w-[670px]">
            "Our research explores how these agents can operate within immersive
            platforms, driving automation, assistance, and intelligent system
            orchestration."
          </p>
        </div>

        <div className="hidden md:block absolute -bottom-[0px] -left-16">
          <img
            className="h-[100px] md:h-[200px] w-auto object-contain"
            src={imagePath?.reaearch2}
            alt="Grid AI"
          />
        </div>
      </div>

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

          <div className="hidden md:block">
            <div className="absolute -top-5 -right-16 z-[999999]">
              <img
                className="z-[9999] h-16 w-16 md:h-20 md:w-20"
                src={imagePath?.plus}
                alt=""
              />
            </div>
          </div>

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
              "By embedding intelligence into physical spaces, we enable
              adaptive environments that enhance user experience and optimize
              operations."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridVentureai;
