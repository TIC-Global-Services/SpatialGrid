import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StarBorder from '../Reusable/StarBorder';
import { iconsPath } from '../../utils/imagePath';

const EnterpriseImpact = () => {
  const sectionRef = useRef(null);

  const isDesktop =
    typeof window !== 'undefined' && window.innerWidth >= 768;

  /**
   * Scroll progress for this section
   * 0 → top hits viewport
   * 1 → section bottom passes viewport
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 60%', 'end start'],
  });

  /** Map scroll progress → transforms */
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ['0%', '220%'] : ['-50%', '20%']
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ['0%', '140%'] : ['20%', '190%']
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [1, 0.9] : [1, 0.8]
  );

  const cardData = [
    {
      badge: 'Industry 4.0',
      desc: 'Our AI-powered spatial platform brings automation, data, and intelligence together to drive smarter operations, immersive training, and seamlessly connected industrial ecosystems.',
    },
    {
      badge: 'Total Cost of Ownership (TCO)',
      desc: 'Designed to optimize total cost of ownership through flexible architectures, reusable components, and develop-once, deploy-anywhere frameworks—maximizing long-term value with superior immersive quality.',
    },
    {
      badge: 'Turnaround Time (TAT)',
      desc: 'Accelerated development pipelines and modular frameworks help enterprises deploy immersive solutions faster, reducing turnaround time from concept to production-ready experiences.',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col gap-16 justify-center px-4 md:px-10 py-10 overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-5xl text-center mx-auto space-y-4">
        <StarBorder color="red" thickness={1.5} speed="4s">
          The Enterprise Impact
        </StarBorder>

        <h1 className="text-3xl md:text-5xl font-telegraf font-medium text-white">
          Why Leading Enterprises Choose Us
        </h1>

        <p className="text-[#bbbbbb] max-w-4xl mx-auto">
          Built for enterprises seeking efficiency and longevity, we deliver
          lower TCO, rapid deployment, and a future-ready platform.
        </p>
      </div>

      {/* FLIGHT IMAGE */}
      <motion.img
        src={iconsPath.Flight}
        alt="Flight"
        style={{ x, y, scale }}
        className="absolute -left-[10%] top-[0%] w-[600px] max-w-none pointer-events-none z-0 will-change-transform"
      />

      {/* CARDS */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((data, idx) => (
          <div
            key={idx}
            className={`bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 text-white border border-[#322F2F] flex flex-col items-start gap-4 px-6 py-8 rounded-md h-[250px]
              ${idx === 1 ? ' md:mt-32' : idx === 2 ? 'md:mt-64' : ''}
            `}
          >
            <div className="bg-[#262424] px-3 py-2 rounded-md">
              {data.badge}
            </div>
            <p className="font-bold">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseImpact;
