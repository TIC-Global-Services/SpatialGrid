import React from 'react';
import { Brodcrumb } from '../components/ui/UtilsLayout';
import { iconsPath, imagePath } from '../utils/imagePath';

// CaseStudy Component
const CaseStudy = () => {
  return (
    <div className="flex justify-center items-center gap-6 pt-32 md:pt-40 text-white px-5 md:px-10 lg:px-16 pb-16">
      <div className="max-w-6xl w-full">
        {/* Breadcrumb Navigation */}
        <Brodcrumb
          data={{
            name: 'Monorail Simulator-Monorail Simulator',
            item: [
              { name: 'Automotive & Transportation', path: -2 },
              { name: 'Industry Use Cases', path: -1 },
            ],
          }}
        />

        <div className="my-10 flex flex-col w-full gap-10">
          {/* Header Section with Logo */}
          <div className="flex gap-3 md:gap-5 lg:gap-10">
            <div className="h-[100px] w-[100px] bg-[#31333A] rounded-[10px] p-2 flex justify-center items-center shadow-md">
              {/* Company Logo */}
              {imagePath?.medhaLogo ? (
                <img src={imagePath.medhaLogo} alt="Medha Logo" />
              ) : (
                <span className="text-gray-400">No Logo</span>
              )}
            </div>

            {/* Case Study Heading */}
            <div className="flex flex-col gap-5 justify-center">
              <CaseStudyHeading
                title="Case Study title mentioned over here"
                desc="Subtitle mentioned over here to boot."
              />
            </div>
          </div>

          {/* Video Section with Play Icon and QR Code */}
          <div className="relative h-[500px] w-full bg-[#31333A] rounded-[10px] flex justify-center items-center shadow-xl">
            {/* Play Icon */}
            {iconsPath?.PlayIcon && (
              <img src={iconsPath.PlayIcon} alt="Play Video" />
            )}

            {/* QR Code in Top-Right Corner */}
            {iconsPath?.QRIcon && (
              <div className="absolute -top-8 -right-8 bg-[#fff] p-3 rounded-[10px]">
                <img src={iconsPath.QRIcon} alt="QR Code" />
              </div>
            )}
          </div>

          {/* Case Study Description */}
          <Section
            title="Case Study title mentioned over here"
            content="It is a long established fact that a reader will be distracted..."
          />

          <Section
            title="Another Section"
            content="Various versions have evolved over the years, sometimes by accident..."
          />

          {/* Image Grid Section */}
          <div className="flex flex-col gap-3">
            <CaseStudyHeading
              title="Images and Insights"
              desc="Subtitle mentioned over here to boot."
            />
            <div className="flex md:flex-row flex-col gap-10 w-full">
              {[1, 2].map((_, i) => (
                <ImageCard key={i} />
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="flex flex-col gap-3">
            <CaseStudyHeading title="Impact" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 lg:gap-10">
              {[
                { percentage: '60%', description: 'Reduction in error rates' },
                { percentage: '75%', description: 'Increase in efficiency' },
                { percentage: '90%', description: 'Enhanced productivity' },
              ].map((impact, i) => (
                <ImpactCard
                  key={i}
                  percentage={impact.percentage}
                  description={impact.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Reusable Case Study Heading Component
const CaseStudyHeading = React.memo(({ title, desc }) => (
  <>
    {title && (
      <h2 className="text-left font-bold text-xl md:text-2xl text-[#D8D8D8]">
        {title}
      </h2>
    )}
    {desc && (
      <p className="text-[#fff] max-w-[630px] text-[16px] md:text-[20px]">
        {desc}
      </p>
    )}
  </>
));

// 🔹 Reusable Section Component
const Section = ({ title, content }) => (
  <div className="flex flex-col gap-3">
    <CaseStudyHeading title={title} />
    <p className="text-[#C8C8C8]">{content}</p>
  </div>
);

// 🔹 Reusable Image Card Component
const ImageCard = () => (
  <div className="flex-1 w-full flex flex-col gap-3">
    <div className="w-full h-[500px] bg-[#31333A] rounded-[10px] shadow-md"></div>
    <div className="w-full text-center text-[#949494]">
      Title of the image goes over here
    </div>
  </div>
);

// 🔹 Reusable Impact Card Component
const ImpactCard = ({ percentage, description }) => (
  <div className="rounded-[10px] p-4 h-[150px] md:h-[240px] w-full bg-[#232428] flex flex-col gap-2 justify-center items-center shadow-md">
    <div className="text-[30px] md:text-[40px] lg:text-[50px] text-center">
      {percentage}
    </div>
    <div className="text-[16px] md:text-[20px] lg:text-[25px] text-center">
      {description}
    </div>
  </div>
);

export default CaseStudy;
