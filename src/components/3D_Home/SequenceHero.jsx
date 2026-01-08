import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ================= CONFIG ================= */
const TOTAL_FRAMES = 1485;
const SCROLL_MULTIPLIER = 4;
const OUTRO_SCROLL = 200;
const IDLE_FRAMES = 119;
const IDLE_FPS = 30; // Adjust if needed for smoother loop
/* ========================================== */

const SNAP_TARGETS = [
  0, 80, 140, 185, 223, 340, 490, 600, 710, 770, 820, 850, 980, 1040, 1285,
  1346,
];

/* -------- CONTENT DEFINITIONS -------- */
const CONTENT = [
  {
    id: '1',
    from: 0,
    to: 140,
    title: 'Leading the Future of Immersive ',
    highlight: 'Spatial Intelligence',
    desc: 'The enterprise suite for immersive technologies, powered by Spatial AI- designed to perform across industries.',
    position:
      'left-1/2 top-[30%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 ',
    customStyle: ' items-center justify-center text-center px-4',
    headingStyle: ' max-w-3xl text-2xl md:text-5xl',
    descStyle: 'text-[#BBBBBB] text-lg max-w-lg',
  },
  {
    id: '2',
    from: 145,
    to: 240,
    titleParts: [
      {
        text: 'Spatial Grid is built on Immersive Spatial Models',
        highlight: true,
      },
      {
        text: ' (ISMs) —advanced multimodal AI systems that replicate real-world spaces and human behavior to power immersive experiences across  ',
        highlight: false,
      },
      {
        text: 'simulations, extended-reality, and GIS systems.',
        highlight: true,
      },
    ],
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center ',
    headingStyle: '  max-w-3xl text-lg md:text-2xl ',
  },
  {
    id: '3',
    from: 270,
    to: 360,
    title: 'Train Safer. Operate Smarter. ',
    highlight: 'Scale Faster.',
    desc: 'Spatial Grid delivers intelligent XR training platforms for complex, high-risk industries — oil & gas, pharma, agrochem. Adaptive environments, spatial models, and AI ensure mastery before mistakes.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center px-4',
    headingStyle: '  max-w-2xl text-2xl md:text-5xl shadow-xl',
    descStyle: '  text-white md:max-w-md shadow-xl',
  },
  {
    id: '4',
    from: 400,
    to: 550,
    title: 'From site tours to ',
    highlight: 'store fronts.',
    position: ' left-1/2 -translate-x-1/2  top-[25%] ',
    customStyle: ' items-center justify-start',
    headingStyle: ' max-w-lg text-2xl md:text-5xl text-center',
  },
  {
    id: '5',
    from: 600,
    to: 910,
    title: 'From Showrooms to ',
    highlight: 'Shelf Space.',
    position: ' md:left-[5%] top-[15%] md:top-[25%] ',
    customStyle: ' items-center md:items-start justify-start',
    headingStyle: ' max-w-lg text-2xl md:text-5xl text-center',
  },
  {
    id: '6',
    from: 840,
    to: 930,
    desc: 'Immersive brand journeys now begin in XR. With AI-personalized walkthroughs, product interactions, and layered storytelling, Spatial Grid redefines engagement.',
    position: ' md:right-[5%] bottom-[10%] ',
    descStyle: '  text-white max-w-lg text-lg font-medium',
    customStyle: ' items-end justify-center text-center ',
  },
  {
    id: '7',
    from: 980,
    to: 1010,
    title:
      'Turning Lessons into Spatial Journeys. Beyond the page into the world. See it, feel it, understand it.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-2xl text-3xl',
  },
  {
    id: '8',
    from: 1157,
    to: 1200,
    title:
      'Spatial Grid turns learning into exploration. Whether it’s the beating heart or the stars above, our immersive education modules bring spatial environments into every classroom.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-xl text-lg md:text-xl',
  },
  {
    id: '9',
    from: 1230,
    to: 1400,
    title:
      'Digital Twins, Simulating Ops- from cockpits to command centers, immersive superiority for Air, Land, Water and Space',
    position: 'left-1/2 -translate-x-1/2 bottom-[40%] ',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-3xl text-2xl md:text-3xl',
  },
];

const VideoSequenceHero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const durationRef = useRef(0);
  const rafRef = useRef(null);
  const idleRafRef = useRef(null);
  const contentRefs = useRef({});
  const idleAnimationRef = useRef(null);
  const [frame, setFrame] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOutro, setIsOutro] = useState(false);
  const OUTRO_CONTENT_ID = 'outro';
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/new_seq/web.mp4');

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.matchMedia('(max-width: 768px)').matches ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      setIsMobile(mobile);
      setVideoSrc(mobile ? 'https://ik.imagekit.io/99y1fc9mh/SpatialGrid/mobile.mp4' : 'https://ik.imagekit.io/99y1fc9mh/SpatialGrid/web.mp4');
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoReady(false);
    setFrame(0);
    setIsOutro(false);

    video.pause();
    video.load();
  }, [videoSrc]);

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
      idleAnimationRef.current = true;

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
      idleAnimationRef.current = false;
    };

    const trigger = ScrollTrigger.create({
      id: 'canvas-seq',
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${TOTAL_FRAMES * SCROLL_MULTIPLIER + OUTRO_SCROLL}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      refreshPriority: 100,

      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const totalScrollFrames = TOTAL_FRAMES * SCROLL_MULTIPLIER;
        const scrollPosition =
          scrollProgress * (totalScrollFrames + OUTRO_SCROLL);

        // ===== OUTRO PHASE =====
        if (scrollPosition >= totalScrollFrames) {
          setIsOutro(true);

          // Lock video on last frame
          video.currentTime = duration - 0.04;
          setFrame(TOTAL_FRAMES - 1);

          // Stop idle animation permanently
          if (idleRafRef.current) stopIdleAnimation();

          return;
        }

        // ===== MAIN PHASE =====
        setIsOutro(false);

        const frameProgress = scrollPosition / totalScrollFrames;
        const targetFrame = Math.floor(frameProgress * (TOTAL_FRAMES - 1));

        // Top idle logic
        if (targetFrame === 0) {
          if (!idleRafRef.current) startIdleAnimation();
          setFrame(0);
          return;
        }

        if (idleRafRef.current) stopIdleAnimation();

        if (targetFrame !== frame) {
          setFrame(targetFrame);

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
    if (isOutro) return;

    CONTENT.forEach((block) => {
      const el = contentRefs.current[block.id];
      if (!el) return;

      gsap.to(el, {
        autoAlpha: frame >= block.from && frame <= block.to ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }, [frame, isOutro]);

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
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />

        <div
          className={`absolute inset-0 bg-black z-20 transition-opacity duration-500 ${
            isOutro ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* CONTENT LAYER */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {CONTENT.map((b) => (
            <div
              key={b.id}
              ref={(el) => (contentRefs.current[b.id] = el)}
              className={`absolute flex flex-col  opacity-0 w-full px-2 ${b.customStyle} ${b.position}`}
            >
              {b.title && (
                <h1
                  className={`text-white font-telegraf font-extrabold ${b.headingStyle}`}
                >
                  {b.title}
                  {b.highlight && (
                    <span className="text-primary font-telegraf">
                      {' '}
                      {b.highlight}
                    </span>
                  )}
                </h1>
              )}
              {b.titleParts && (
                <h1
                  className={`text-white font-telegraf font-extrabold ${b.headingStyle}`}
                >
                  {b.titleParts.map((part, i) => (
                    <span
                      key={i}
                      className={part.highlight ? 'text-primary' : ''}
                    >
                      {part.text}
                    </span>
                  ))}
                </h1>
              )}

              {b.desc && <p className={` py-2 ${b.descStyle}`}>{b.desc}</p>}
            </div>
          ))}
        </div>

        <div
          className={`absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-500 ${
            isOutro ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h1 className="text-white font-telegraf font-extrabold text-4xl md:text-5xl text-center max-w-xl px-4">
            Spatial Grid – A Boundless Frontier for{' '}
            <span className="text-primary">Immersive Spatial Models.</span>
          </h1>
        </div>

        {/* DEBUG */}
        <div className="absolute bottom-6 left-6 text-white text-sm opacity-60">
          Frame: {frame} {idleAnimationRef.current ? '(Idle Loop)' : ''}
        </div>
      </section>
    </>
  );
};

export default VideoSequenceHero;
