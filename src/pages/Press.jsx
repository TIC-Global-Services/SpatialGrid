import React from 'react';
import LayoutOther from '../components/layout/LayoutOther';
import { Link } from 'react-router-dom';

const Press = () => {
  return (
    <LayoutOther
      heading={'Press'}
      subtext={
        'Pioneering spatial intelligence with over 20 years of innovation in AR, VR, MR, and agentic enterprise AI.'
      }
    >
      <div className="w-full flex flex-col justify-center items-center gap-6 text-white px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col max-w-6xl w-full justify-start items-start">
          <Title color="#fff" className="mt-6">
            Shaping the Future of Spatial Intelligence —
          </Title>
          <Title color="#fff" className="mb-8">
            One Breakthrough at a Time
          </Title>

          <Section>
            Spatial Grid is at the forefront of a technological revolution,
            where space meets intelligence. With over 20 years of combined
            experience in AR/VR/MR, Spatial Computing, and Agentic AI, we’re
            redefining how enterprises interact with the world around them —
            digitally, physically, and intelligently.
          </Section>
          <Section>
            Our work has empowered medium and large enterprises to unlock new
            levels of operational efficiency, training, collaboration, and
            customer engagement. From immersive product showcases to AI-powered
            digital twins, our platform is paving the way for a smarter, more
            connected spatial future.
          </Section>
          <Section>
            We welcome media, analysts, and storytellers who want to explore the
            next frontier of technology with us. Whether you're covering the
            rise of enterprise XR, spatial computing's role in industry
            transformation, or how intelligent environments are reshaping
            business — we’re here to collaborate, share insights, and provide
            access to the people behind the vision.
          </Section>

          <Section mt="mt-16" title="Media Inquiries">
            Looking to feature Spatial Grid or speak with our leadership team?
            <br />
            Reach out to us at{' '}
            <Link
              className="text-[#96CCFF] underline"
              to="mailto:info@spatialgrid.ai"
            >
              info@spatialgrid.ai
            </Link>
          </Section>
        </div>
      </div>
    </LayoutOther>
  );
};

const Section = React.memo(({ mt = 'mt-10', title, children }) => (
  <div className={`${mt} w-full`}>
    {title && <Title className="mb-4">{title}</Title>}
    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">{children}</p>
  </div>
));

const Title = React.memo(({ children, color = '#ffffff', className = '' }) => {
  if (!children) return null;
  return (
    <div
      style={{ color }}
      className={`tracking-tight font-jakarta text-xl sm:text-2xl lg:text-3xl ${className}`}
    >
      {children}
    </div>
  );
});

export default Press;
