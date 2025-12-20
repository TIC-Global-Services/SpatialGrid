import React from 'react';
import { imagePath } from '../utils/imagePath';
import LayoutOther from '../components/layout/LayoutOther';

const OurTeam = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: 'Arjun Reddy',
      designation: 'Founder & CXO',
      image: imagePath?.arjunReddy,
    },
    {
      id: 2,
      name: 'Ranga Maramraju',
      designation: 'Founder & CTO',
      image: imagePath?.ranga,
    },
    // {
    //   id: 3,
    //   name: 'Ramji Geddam',
    //   designation: 'Chief Platform Architect',
    //   image: imagePath?.ramji,
    // },
    {
      id: 4,
      name: 'Krishna Chaitanya',
      designation: 'Chief Marketing Strategist',
      image: imagePath?.krishna,
    },
  ];

  return (
    <LayoutOther
      heading={'Our Team'}
      subtext={
        'A diverse team of innovators with 40+ years of experience building the future of spatial computing and intelligent XR.'
      }
    >
      {/* Shared content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-4 sm:gap-6 my-4 sm:my-6 md:my-10">
          <h1 className="text-[#ffffff] font-jakarta font-semibold text-2xl md:text-3xl lg:text-[32px]">
            Meet the Visionaries Behind Spatial Grid
          </h1>
          <p className="text-[#ffffff] text-sm sm:text-base">
            With over 45 years of collective experience in immersive
            technologies, Spatial Grid is powered by a team of pioneers in
            Immersive Technology.
          </p>
          <p className="text-[#ffffff] text-sm sm:text-base">
            At Spatial Grid, we're not just building technology — we're shaping
            the future of spatial intelligence. Our team is a collective of
            innovators, engineers, designers, and strategists driven by a shared
            mission: to transform how enterprises interact with space, data, and
            reality. With deep roots in AR/VR/MR, AI, and immersive computing,
            we bridge physical and digital realms through intelligent, scalable,
            and intuitive spatial solutions.
          </p>
          <p className="text-[#ffffff] font-normal text-sm sm:text-base">
            From product design to AI architecture, from enterprise deployment
            to human-centered UX, every member of our team brings bold ideas,
            rigorous expertise, and relentless curiosity to the table. We thrive
            on collaboration, obsess over quality, and are united by a singular
            vision: to unlock the full potential of spatial computing — making
            it accessible, actionable, and revolutionary for medium and large
            enterprises across the globe.
          </p>

          {/* Leadership Team Section with responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 ">
            {leadershipTeam.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center gap-3 sm:gap-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full object-cover"
                />
                <h2 className="text-[#ffffff] font-jakarta font-semibold text-lg sm:text-2xl md:text-[24px] text-center">
                  {member.name}
                </h2>
                <p className="text-[#ffffff] text-center text-sm sm:text-base">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
          {/* End of Leadership Team Section */}

          <div className="my-8 sm:my-10 flex flex-col gap-6 sm:gap-8">
            <h2 className="text-[#ffffff] font-jakarta text-2xl sm:text-[28px] font-semibold">
              Our Mission
            </h2>
            <p className="text-[#ffffff] text-sm sm:text-base">
              To empower enterprises with cutting-edge spatial computing and
              intelligent XR solutions that seamlessly merge the physical and
              digital — unlocking new dimensions of efficiency, creativity, and
              connection. We exist to make environments smarter, experiences
              richer, and decisions faster through the power of immersive
              technology and agentic AI.
            </p>
            <p className="text-[#ffffff] text-sm sm:text-base">
              To make spatial computing seamless for businesses by combining AR
              | VR | MR technologies with AI-driven intelligence. Our platform
              accelerates deployment, delivers industry tailored immersive
              experiences, and serves as the Operating System for MR Devices,
              empowering enterprises to shape the future of digital interaction.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-[#ffffff] font-jakarta text-2xl sm:text-[28px] font-semibold">
              Spatial Grid -{' '}
              <span className="font-thin font-jakarta">
                A boundless frontier
              </span>
            </h2>
            <p className="text-[#ffffff] text-sm sm:text-base">
              Imagine a world where reality itself could be rewritten. Where
              data moved not as numbers but as experiences, flowing seamlessly
              through an interconnected web of possibilities. Spaces alive with
              intelligence. Ideas manifesting into environments. Entire worlds
              built, shaped, and shared—all in the blink of an eye. A platform
              that could bridge the tangible and the virtual, a place where
              enterprises could step beyond the limits of screens and into
              realms of infinite potential.
            </p>
            <p className="text-[#ffffff] text-sm sm:text-base">
              Spatial Grid is more than a platform—it's the epicenter of
              Extended Reality. Powered by Spatial Agentic AI, it transforms how
              businesses connect, create, and conquer. A turn-key solution that
              merges the visionary with the practical, accelerating deployments
              and unlocking the future.
            </p>
            <h3 className="text-[#ffffff] text-lg sm:text-xl font-semibold">
              This is your grid. Your frontier. Are you ready to Jump In?
            </h3>
          </div>

          <div className="flex my-5 sm:my-8 flex-col gap-6 sm:gap-8">
            <h2 className="text-[#ffffff] font-jakarta text-2xl sm:text-[28px] font-semibold">
              Our Squad
            </h2>
            <div className="w-full">
              <img
                src={imagePath?.spatialgridSquad}
                alt="Spatial Grid Team"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutOther>
  );
};

export default OurTeam;
