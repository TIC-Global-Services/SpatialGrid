import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ================= CONFIG ================= */
const TOTAL_FRAMES = 1349;
const SCROLL_MULTIPLIER = 8;
const IDLE_FRAMES = 45;        // 0–24 → corresponds to first ~0.8 seconds of video
const IDLE_FPS = 30;           // Adjust if needed for smoother loop
/* ========================================== */

/* -------- CONTENT DEFINITIONS -------- */
const CONTENT = [
  {
    id: '1',
    from: 0,
    to: 70,
    title: 'Leading the Future of  immersive ',
    highlight: 'spatial model',
    desc: 'The Enterprise suit for Immersive Tech powered by Spatial Ai and designed to ___________ across Industries.',
    position: 'left-1/2 top-[30%] md:top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center ',
    headingStyle: ' max-w-2xl text-2xl md:text-5xl',
    descStyle: 'text-[#BBBBBB] max-w-md',
  },
  {
    id: '2',
    from: 80,
    to: 140,
    title: 'Train Safer. Operate Smarter. Scale Faster',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center ',
    headingStyle: '  max-w-2xl text-2xl md:text-5xl',
  },
  {
    id: '3',
    from: 185,
    to: 220,
    desc: 'Spatial Grid delivers intelligent XR training platforms for complex, high-risk industries — oil & gas, pharma, agrochem. Adaptive environments, spatial models, and AI ensure mastery before mistakes.',
    position: ' left-[2%] md:left-[10%] top-[15%] ',
    descStyle: '  text-white md:max-w-md',
  },
  {
    id: '4',
    from: 223,
    to: 280,
    title:
      'From site tours to store fronts. From Showrooms to shelf space, Engage with ',
    highlight: 'immersion and drive conversion.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center',
    headingStyle: '  max-w-4xl text-2xl md:text-3xl max-w-xl',
  },
  {
    id: '5',
    from: 340,
    to: 400,
    desc: 'Spatial Grid delivers intelligent XR training platforms for complex, high-risk industries — oil & gas, pharma, agrochem. Adaptive environments, spatial models, and AI ensure mastery before mistakes.',
    position: ' left-[15%] top-[25%] ',
    descStyle: '  text-white max-w-md',
  },
  {
    id: '6',
    from: 490,
    to: 580,
    title:
      'From site tours to store fronts. From Showrooms to shelf space, Engage with ',
    highlight: 'immersion and drive conversion.',
    position: ' left-[5%] top-[25%] ',
    customStyle: " items-start justify-start",
    headingStyle: ' max-w-2xl text-lg md:text-3xl',
  },
  {
    id: '7',
    from: 770,
    to: 800,
    desc: '(For real estate, FMCG, or F&B )— Immersive brand journeys now begin in XR. With AI-personalized walkthroughs, product interactions, and layered storytelling, Spatial Grid redefines engagement.',
    position: 'left-1/2 -translate-x-1/2 bottom-[20%] ',
    descStyle: '  text-white max-w-xl',
    customStyle: ' items-center justify-center text-center ',
  },
  {
    id: '8',
    from: 850,
    to: 910,
    title:
      'Turning Lessons into Spatial Journeys. Beyond the page into the world. See it Feel it, understand it.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-2xl text-3xl',
  },
  {
    id: '9',
    from: 1040,
    to: 1100,
    title:
      'Digital Twins, Simulating Ops- from cockpits to command centers, immersive superiority for Air, Land, Water and Space',
    position: 'left-1/2 -translate-x-1/2 bottom-[20%] ',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-3xl text-2xl md:text-3xl',
  },
  {
    id: '10',
    from: 1285,
    to: 1349,
    title:
      'Spatial Grid – A Boundless Frontier for ',
    highlight:"Immersive Spatial Models.",
    position: 'left-[10%] top-1/2 -translate-y-1/2  ',
    customStyle: '  justify-center text-start',
    headingStyle: '  max-w-lg text-4xl',
  },
];

const VideoSequenceHero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const durationRef = useRef(0);
  const rafRef = useRef(null);
  const idleRafRef = useRef(null);
  const contentRefs = useRef({});

  const [frame, setFrame] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ================= VIDEO LOADING ================= */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration;
      video.currentTime = 0.001;
    };

    const onProgress = () => {
      if (video.buffered.length && video.duration) {
        const end = video.buffered.end(video.buffered.length - 1);
        setProgress(Math.min(Math.round((end / video.duration) * 100), 100));
      }
    };

    const onCanPlay = () => {
      video.pause();
      setProgress(100);
      setVideoReady(true);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('progress', onProgress);
    video.addEventListener('canplay', onCanPlay);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('progress', onProgress);
      video.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  /* ================= SCROLL + PING-PONG IDLE LOOP ================= */
  useEffect(() => {
    if (!videoReady) return;

    const video = videoRef.current;
    const duration = durationRef.current;

    let currentIdleFrame = 0;
    let direction = 1;
    let lastIdleTime = 0;

    const startIdleAnimation = () => {
      if (idleRafRef.current) return;

      const animate = (time) => {
        if (!lastIdleTime) lastIdleTime = time;

        if (time - lastIdleTime >= 1000 / IDLE_FPS) {
          currentIdleFrame += direction;

          if (currentIdleFrame >= IDLE_FRAMES - 1) {
            currentIdleFrame = IDLE_FRAMES - 1;
            direction = -1;
          } else if (currentIdleFrame <= 0) {
            currentIdleFrame = 0;
            direction = 1;
          }

          const targetTime = (currentIdleFrame / (TOTAL_FRAMES - 1)) * duration;
          video.currentTime = Math.max(targetTime, 0.001);

          setFrame(currentIdleFrame);
          lastIdleTime = time;
        }

        idleRafRef.current = requestAnimationFrame(animate);
      };

      idleRafRef.current = requestAnimationFrame(animate);
    };

    const stopIdleAnimation = () => {
      if (idleRafRef.current) {
        cancelAnimationFrame(idleRafRef.current);
        idleRafRef.current = null;
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${TOTAL_FRAMES * SCROLL_MULTIPLIER}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,

      onUpdate: (self) => {
        const progressVal = self.progress;
        const targetFrame = Math.floor(progressVal * (TOTAL_FRAMES - 1));

        // === At the very top → run/resume idle loop ===
        if (targetFrame === 0) {
          if (!idleRafRef.current) {
            startIdleAnimation();
          }
          setFrame(0); // Keep frame display consistent
          return;
        }

        // === Scrolled down → stop idle ===
        if (idleRafRef.current) {
          stopIdleAnimation();
        }

        // === Normal scroll-driven scrubbing ===
        if (targetFrame !== frame) {
          setFrame(targetFrame);

          if (!Number.isFinite(duration) || duration <= 0) return;

          const targetTime = Math.min(
            Math.max((targetFrame / (TOTAL_FRAMES - 1)) * duration, 0.001),
            duration - 0.04
          );

          cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            if (video.readyState >= 2) {
              video.currentTime = targetTime;
            }
          });
        }
      },
    });

    // Start idle loop on load
    startIdleAnimation();

    return () => {
      cancelAnimationFrame(rafRef.current);
      stopIdleAnimation();
      trigger.kill();
    };
  }, [videoReady]);

  /* ================= TEXT FADE ================= */
  useEffect(() => {
    CONTENT.forEach((block) => {
      const el = contentRefs.current[block.id];
      if (!el) return;

      gsap.to(el, {
        autoAlpha: frame >= block.from && frame <= block.to ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }, [frame]);

  return (
    <>
      {/* LOADER */}
      {!videoReady && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-[10vw] font-bold">{progress}%</div>
            <div className="mt-4 text-gray-400 tracking-widest text-sm">
              LOADING ASSETS
            </div>
          </div>
        </div>
      )}

      {/* PINNED VIDEO SECTION */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/output.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />

        {/* CONTENT LAYER */}
        <div className="pointer-events-none absolute inset-0">
          {CONTENT.map((block) => (
            <div
              key={block.id}
              ref={(el) => (contentRefs.current[block.id] = el)}
              className={`absolute flex flex-col opacity-0 px-2 ${block.customStyle} ${block.position}`}
            >
              {/* TITLE */}
              {block.title && (
                <h1 className={`text-white font-extrabold font-telegraf mx-auto ${block.headingStyle}`}>
                  {block.title}{' '}
                  {block.highlight && <span className="text-primary">{block.highlight}</span>}
                </h1>
              )}

              {/* DESCRIPTION */}
              {block.desc && (
                <p className={`mt-6 ${block.descStyle}`}>
                  {block.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* DEBUG FRAME */}
        <div className="absolute bottom-6 left-6 text-white text-sm opacity-60">
          Frame: {frame} {frame === 0 && idleRafRef.current ? '(Idle Loop)' : ''}
        </div>
      </section>
    </>
  );
};

export default VideoSequenceHero;