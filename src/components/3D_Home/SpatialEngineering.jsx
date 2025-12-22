import React from 'react';
import StarBorder from '../Reusable/StarBorder';
import { iconsPath } from '../../utils/imagePath';

const SpatialEngineering = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-16 justify-center px-4 md:px-10 py-10">
      <div className="max-w-5xl text-center mx-auto space-y-4
      ">
        <StarBorder color="red" thickness={1.5} speed="4s">
          Business Ready Features
        </StarBorder>

        <h1 className="text-3xl md:text-5xl font-telegraf font-medium text-white">
          Spatial Engineering has never been easier.
        </h1>

        <p className="text-[#bbbbbb] max-w-4xl mx-auto">
          Our Visual Editor offers scalable infrastructure for millions of users,
          industry-ready templates for quick deployment, enterprise-grade
          security, seamless cross-platform integration, precision mapping for
          real-world accuracy, and fully customizable solutions for diverse
          business needs.
        </p>
      </div>

      {/* IMAGE + RED GLOW */}
      <div className="relative flex justify-center px-2 md:px-14">
        {/* Red glow */}
        <div
          className="absolute -top-10 w-[80%] h-[220px] rounded-full blur-[120px] opacity-90"
          style={{
            background:
              'radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(255,0,0,0.35) 35%, transparent 70%)',
          }}
        />

        {/* Image */}
        <img
          src={iconsPath.VisualEditorDesign}
          alt="VisualEditor"
          className="relative z-10 max-w-full"
        />
      </div>
    </div>
  );
};

export default SpatialEngineering;
