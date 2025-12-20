import React from 'react';
import HeadingText from '../ui/HeadingText';
import { MediumButton } from '../ui/buttons';
import { imagePath } from '../../utils/imagePath';
import { useNavigate } from 'react-router-dom';

const VisualEditor = React.memo(() => {
  const navigate = useNavigate();

  return (
    <div className="text-white flex flex-col items-center px-4 md:px-8 lg:px-12 w-full max-w-screen-xl mx-auto">
      {/* Section Heading */}
      <HeadingText
        text1="Business Ready Features"
        text2="Spatial Engineering has never been easier."
        text3="Our Visual Editor offers scalable infrastructure for millions of users, industry-ready templates for quick deployment, enterprise-grade security, seamless cross-platform integration, precision mapping for real-world accuracy, and fully customizable solutions for diverse business needs."
      />

      {/* Visual Editor Image */}
      <div className="flex justify-center items-center mt-10 w-full">
        <img
          src={imagePath?.visual_editor}
          alt="Visual Editor"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>

      {/* Call-to-Action Button */}
      <MediumButton
        className="mt-6 bg-[#4C4C50] hover:bg-[#262626] text-sm sm:text-base"
        onClick={() => navigate('/platform-overview')}
        title="Platform Overview"
      />
    </div>
  );
});

export default VisualEditor;
