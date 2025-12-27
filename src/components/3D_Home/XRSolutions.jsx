import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: 'Training, Safety & Performance',
    percentage: '60%',
    descTitle: 'Reduction in error rates.',
    desc: 'Immersive simulations strengthen training outcomes by improving hazard recognition, sharpening decision-making, reinforcing correct procedures, and reducing on-the-job errors.',
    imgSrc: '/XR_PLACEHOLDER.png',
  },
  {
    title: 'Education Tech',
    percentage: '43%',
    descTitle: 'Increase in retention rates.',
    desc: 'Immersive learning boosts retention by increasing engagement, improving comprehension, enabling hands-on practice, and helping educators explain complex topics clearly.',
    imgSrc: '/XR_PLACEHOLDER2.png',
  },
  {
    title: 'Sales & Marketing',
    percentage: '65%',
    descTitle: 'Boost in conversion rates.',
    desc: 'Immersive experiences boost conversions by increasing engagement and improving product understanding.',
    imgSrc: '/XR_PLACEHOLDER.png',
  },
  {

    title: 'Asset Simulation ',
    percentage: '90%',
    descTitle: 'Increase in Procedural Accuracy',
    desc: 'Simulation-based training boosts accuracy in mission planning, targeting, navigation, and procedures by allowing personnel to repeat tasks, refine skills, & correct mistakes without real-world risk.',
    imgSrc: '/XR_PLACEHOLDER2.png',
  },
  {
    title: 'Design & Prototyping',
    percentage: '60%',
    descTitle: 'Reduction in product development  time.',
    desc: 'Immersive prototyping accelerates design cycles by enabling rapid iteration, real-time visualization, and early issue detection—reducing product development time.',
    imgSrc: '/XR_PLACEHOLDER.png',
  },
];

export default function XRSolutions() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const prevIndex = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const st = ScrollTrigger.create({
      id: 'xr-solutions',
      trigger: section,
      start: 'top top',
      end: `+=${content.length * 100}%`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: 90,
      fastScrollEnd: true,
      // markers: true,
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * content.length),
          content.length - 1
        );

        if (index !== prevIndex.current) {
          animateText(prevIndex.current, index);
          prevIndex.current = index;
          setActiveIndex(index);
        }
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const animateText = (from, to) => {
    if (textRefs.current[from]) {
      gsap.to(textRefs.current[from], {
        opacity: 0,
        y: -60,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    if (textRefs.current[to]) {
      gsap.fromTo(
        textRefs.current[to],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  };

  useEffect(() => {
    gsap.set(textRefs.current, { opacity: 0, y: 60 });
    gsap.set(textRefs.current[0], { opacity: 1, y: 0 });
  }, []);

  const currentItem = content[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      <div className="h-full flex items-center">
        <div className="w-full px-8 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* LEFT TEXT */}
            <div className="relative h-[400px]">
              {content.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (textRefs.current[i] = el)}
                  className="absolute inset-0 flex flex-col justify-center space-y-6"
                >
                  <p className="text-2xl md:text-3xl font-bold">{item.title}</p>
                  <h2 className="text-6xl md:text-8xl font-bold text-red-600">
                    {item.percentage}
                  </h2>
                  <p className="text-lg font-semibold">{item.descTitle}</p>
                  <p className="text-white/70 max-w-lg">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-xl h-[400px] bg-[#171616] rounded-2xl flex items-center justify-center">
                <img
                  key={activeIndex}
                  src={currentItem.imgSrc}
                  alt={currentItem.title}
                  className="w-full h-full max-w-[300px] object-contain transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
