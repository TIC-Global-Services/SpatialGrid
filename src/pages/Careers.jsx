import React from 'react';
import { array1Card, jobsDetailsArr } from '../utils/constant';
import { TodaySpatial } from '../components/ui/UtilsLayout';
import LayoutOther from '../components/layout/LayoutOther';

const Careers = () => {
  return (
    <LayoutOther
      heading="Join Our Team at SquareUp"
      subtext="Unlock your potential and join our team of innovators and problem solvers."
    >
      <div className="mt-10 w-full flex flex-col justify-center items-center gap-6 text-white px-5 md:px-10 lg:px-16 pb-16">
        <div className="flex flex-col xl:min-w-6xl xl:max-w-6xl justify-start items-start">
          <div className="w-full border-[1px] border-[#262626]">
            <div className="mt-16 mb-10 px-10">
              <Section title="Welcome to Spatial Grid, where talent meets opportunity!">
                At Spatial Grid, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We
                are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and
                contribute to cutting-edge projects, we invite you to explore career opportunities with us.
              </Section>
              <button className="w-fit bg-[#262626] px-4 py-2 rounded-[10px]">
                Why Work at Spatial Grid?
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              {array1Card.map(({ title, desc }, ind) => (
                <FirstCard
                  key={ind}
                  title={title}
                  desc={desc}
                  bl={ind % 2 === 0 ? '' : 'md:border-l-[1px] md:border-l-[#262626] border-l-[0px]'}
                />
              ))}
            </div>
          </div>

          <div className="w-full border-[1px] border-[#262626] mt-20">
            <div className="mt-16 mb-10 px-10">
              <Section title="Current Openings">
                We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences.
                Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to
                explore our open positions.
              </Section>
            </div>
            <div className="flex flex-col">
              {jobsDetailsArr.map(({ title, jobs }, ind) => (
                <div key={ind} className="flex flex-col">
                  <div className="border-[1px] border-[#262626] py-8 px-10 text-[#98989A] text-lg">
                    {title}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {jobs.map(({ title, desc, icon }, i) => (
                      <JobCard key={i} title={title} desc={desc} icon={icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10">
          <TodaySpatial />
        </div>
      </div>
    </LayoutOther>
  );
};

const Section = React.memo(({ mt = 'mt-10', my = 'my-4', title, children }) => (
  <div className={`${mt} text-[#98989A]`}>
    <Title>{title}</Title>
    <div className={`${my} lg:text-[14px] text-[10px] max-w-[1050px]`}>
      {children}
    </div>
  </div>
));

const Title = React.memo(({ children }) => {
  return (
    <>
      {children && (
        <div className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[26px] tracking-tight text-[#98989A] font-jakarta">
          {children}
        </div>
      )}
    </>
  );
});

const FirstCard = React.memo(({ title, desc, bl = '' }) => (
  <div className={`${bl} w-full border-t-[1px] border-t-[#262626] px-6 py-12 flex flex-col gap-6`}>
    <div className="text-md md:text-lg lg:text-xl xl:text-2xl tracking-tight font-jakarta text-[#EE2B2A]">
      {title}
    </div>
    <div className="border-[1px] border-[#262626] w-full" />
    <p className="my-4 lg:text-md text-sm">{desc}</p>
  </div>
));

const JobCard = React.memo(({ title, desc, icon }) => (
  <div className="border-[1px] border-[#262626] px-5 py-8 flex flex-col">
    <div className="flex flex-col gap-6">
      <div
        className="w-fit p-5 rounded-[8px]"
        style={{
          borderImageSource:
            'linear-gradient(180deg, rgba(46, 46, 46, 1) 0%, rgba(46, 46, 46, 0) 100%)',
          background:
            'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%),linear-gradient(130.97deg, rgba(158, 255, 0, 1) -72.89%, rgba(158, 255, 0, 0) 37.34%)',
        }}
      >
        <img src={icon} alt={title} />
      </div>
      <div className="lg:text-2xl text-lg">{title}</div>
      <div className="lg:text-lg text-[12px] text-left text-opacity-90 text-[#E6E6E6] font-normal">
        {desc}
      </div>
    </div>
    <div className="mt-auto pt-6">
      <button className="w-full bg-[#262626] text-white text-sm py-3 rounded-md font-jakarta">
        Apply Now
      </button>
    </div>
  </div>
));

export default Careers;
