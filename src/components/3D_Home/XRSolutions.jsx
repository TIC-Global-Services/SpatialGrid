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
];

export default function XRSolutions() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const texts = textContainerRef.current.children;

    // Pin the section and control progress
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${content.length * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * content.length),
            content.length - 1
          );
          setActiveIndex(newIndex);
        },
      },
    });

    // Animate text layers (fade out previous, fade in next)
    gsap.set(texts, { opacity: 0, y: 60 });
    gsap.set(texts[0], { opacity: 1, y: 0 }); // First one visible

    content.forEach((_, i) => {
      if (i > 0) {
        tl.to(texts[i - 1], { opacity: 0, y: -60 }, i * 0.5);
        tl.to(texts[i], { opacity: 1, y: 0 }, '-=0.3');
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Safeguard: current item with fallback
  const currentItem = content[activeIndex] || content[0];

  return (
    <>
      {/* Pinned Section */}
      <section ref={sectionRef} className="relative h-screen bg-black text-white overflow-hidden">
        <div className="h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Text Content (layered) */}
              <div ref={textContainerRef} className="relative h-full flex flex-col justify-center">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 flex flex-col justify-center space-y-6"
                    style={{ pointerEvents: 'none' }} // Prevent interaction issues
                  >
                    <p className="text-2xl md:text-3xl font-bold font-telegraf">
                      {item.title}
                    </p>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-600">
                      {item.percentage}
                    </h2>
                    <p className="text-lg md:text-xl font-semibold">
                      {item.descTitle}
                    </p>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right: Image (synced with activeIndex) */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-2xl h-[400px] aspect-video bg-[#171616] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    key={activeIndex} // Forces re-render with new src
                    src={currentItem.imgSrc}
                    alt={currentItem.title}
                    className="w-full h-full max-w-[300px] object-contain transition-all duration-700 ease-out"
                    style={{
                      opacity: activeIndex >= 0 ? 1 : 0, // Safe fallback
                    }}
                    onError={(e) => {
                      e.target.src = '/fallback-placeholder.png'; // Optional fallback
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}