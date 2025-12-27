import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ================= CONFIG ================= */
const TOTAL_FRAMES = 1485;
const SCROLL_MULTIPLIER = 8;
const IDLE_FRAMES = 119;
const IDLE_FPS = 30;  
/* ========================================== */

// Snap targets: start frame of each section
const SNAP_TARGETS = [
  0, 80, 140, 185, 223, 340, 490, 600, 710, 770, 820, 850, 980, 1040, 1285,
  1346,
];

const FRAME_PATH = (i) =>
  `/updated_seq/frames/frame_${String(i + 1).padStart(4, '0')}.webp`;

/* -------- CONTENT DEFINITIONS -------- */
const CONTENT = [
  {
    id: '1',
    from: 0,
    to: 170,
    title: 'Leading the Future of  immersive ',
    highlight: 'spatial model',
    desc: 'The Enterprise suit for Immersive Tech powered by Spatial AI and designed to ___________ across Industries.',
    position:
      'left-1/2 top-[30%] md:top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center ',
    headingStyle: ' max-w-2xl text-2xl md:text-5xl',
    descStyle: 'text-[#BBBBBB] max-w-md',
  },
  {
    id: '2',
    from: 195,
    to: 285,
    title: 'Train Safer. Operate Smarter. Scale Faster',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center ',
    headingStyle: '  max-w-2xl text-2xl md:text-5xl',
  },
  {
    id: '3',
    from: 310,
    to: 350,
    desc: 'Spatial Grid delivers intelligent XR training platforms for complex, high-risk industries — oil & gas, pharma, agrochem. Adaptive environments, spatial models, and AI ensure mastery before mistakes.',
    position: ' left-[2%] md:left-[10%] top-[15%] ',
    descStyle: '  text-white md:max-w-md',
  },
  {
    id: '4',
    from: 360,
    to: 400,
    title:
      'From site tours to store fronts. From Showrooms to shelf space, Engage with ',
    highlight: 'immersion and drive conversion.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: ' items-center justify-center text-center',
    headingStyle: '  md:max-w-3xl text-2xl md:text-4xl max-w-xl',
  },
  {
    id: '5',
    from: 420,
    to: 500,
    desc: 'Spatial Grid delivers intelligent XR training platforms for complex, high-risk industries — oil & gas, pharma, agrochem. Adaptive environments, spatial models, and AI ensure mastery before mistakes.',
    position: ' left-[15%] top-[25%] ',
    descStyle: '  text-white max-w-md',
  },
  {
    id: '6',
    from: 595,
    to: 720,
    title:
      'From site tours to store fronts. From Showrooms to shelf space, Engage with ',
    highlight: 'immersion and drive conversion.',
    position: ' left-[5%] top-[25%] ',
    customStyle: ' items-start justify-start',
    headingStyle: ' max-w-2xl text-lg md:text-3xl',
  },
  {
    id: '7',
    from: 900,
    to: 920,
    desc: '(For real estate, FMCG, or F&B )— Immersive brand journeys now begin in XR. With AI-personalized walkthroughs, product interactions, and layered storytelling, Spatial Grid redefines engagement.',
    position: 'left-1/2 -translate-x-1/2 bottom-[20%] ',
    descStyle: '  text-white max-w-xl',
    customStyle: ' items-center justify-center text-center ',
  },
  {
    id: '8',
    from: 980,
    to: 1010,
    title:
      'Turning Lessons into Spatial Journeys. Beyond the page into the world. See it Feel it, understand it.',
    position: 'left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-2xl text-3xl',
  },
  {
    id: '9',
    from: 1157,
    to: 1200,
    title:
      'Digital Twins, Simulating Ops- from cockpits to command centers, immersive superiority for Air, Land, Water and Space',
    position: 'left-1/2 -translate-x-1/2 bottom-[40%] ',
    customStyle: '  justify-center text-center items-center',
    headingStyle: '  max-w-3xl text-2xl md:text-3xl',
  },
  {
    id: '10',
    from: 1385,
    to: 1485,
    title: 'Spatial Grid – A Boundless Frontier for ',
    highlight: 'Immersive Spatial Models.',
    position: 'left-[10%] top-1/2 -translate-y-1/2  ',
    customStyle: '  justify-center text-start',
    headingStyle: '  max-w-lg text-4xl',
  },
];

const CanvasSequenceHero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const imagesRef = useRef([]);
  const rafRef = useRef(null);
  const idleAnimationRef = useRef(null);

  const contentRefs = useRef({});

  const [frame, setFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const frameRef = useRef(0);

  /* ================= CANVAS SETUP ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [frame]);

  /* ================= PRELOAD ================= */
  useEffect(() => {
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
          setFrame(0);
          frameRef.current = 0;
          draw(0);
        }
      };
      imagesRef.current[i] = img;
    }
  }, []);

  /* ================= DRAW ================= */
  const draw = (index) => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];

    if (!ctx || !canvas || !img || !img.complete) return;

    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    ctx.clearRect(0, 0, cw, ch);

    const ratio = img.width / img.height;
    const viewRatio = cw / ch;

    let dw,
      dh,
      dx = 0,
      dy = 0;

    if (ratio > viewRatio) {
      dh = ch;
      dw = dh * ratio;
      dx = (cw - dw) / 2;
    } else {
      dw = cw;
      dh = dw / ratio;
      dy = (ch - dh) / 2;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
  };

  /* ================= SCROLL + IDLE + BUILT-IN SNAP ================= */
  useEffect(() => {
    if (!loaded) return;

    let currentIdleFrame = 0;
    let direction = 1;
    let lastIdleTime = 0;

    const startIdleAnimation = () => {
      if (idleAnimationRef.current) return;

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

          draw(currentIdleFrame);
          setFrame(currentIdleFrame);
          frameRef.current = currentIdleFrame;
          lastIdleTime = time;
        }

        idleAnimationRef.current = requestAnimationFrame(animate);
      };

      idleAnimationRef.current = requestAnimationFrame(animate);
    };

    const stopIdleAnimation = () => {
      if (idleAnimationRef.current) {
        cancelAnimationFrame(idleAnimationRef.current);
        idleAnimationRef.current = null;
      }
    };

    // Built-in GSAP snapping using progress values
    const snapProgressValues = SNAP_TARGETS.map(
      (target) => target / (TOTAL_FRAMES - 1)
    );

    const trigger = ScrollTrigger.create({
      id: 'canvas-seq',
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${TOTAL_FRAMES * SCROLL_MULTIPLIER}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      refreshPriority: 100,
      // snap: {
      //   snapTo: snapProgressValues,
      //   duration: 1,
      //   ease: 'power2.out',
      //   delay: 0.1,
      // },
      // snap: 0.05,
      onUpdate: (self) => {
        const clampedFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(self.progress * TOTAL_FRAMES))
        );

        // ▶ At TOP → idle animation
        if (clampedFrame === 0) {
          if (!idleAnimationRef.current) startIdleAnimation();
          return;
        }

        stopIdleAnimation();

        // ▶ At END → freeze on last frame
        if (self.progress >= 0.999) {
          frameRef.current = TOTAL_FRAMES - 1;
          setFrame(TOTAL_FRAMES - 1);
          draw(TOTAL_FRAMES - 1);
          return;
        }

        // ▶ Normal scroll
        if (clampedFrame !== frameRef.current) {
          frameRef.current = clampedFrame;
          setFrame(clampedFrame);
          rafRef.current && cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => draw(clampedFrame));
        }
      },
    });

    startIdleAnimation();

    return () => {
      trigger.kill();
      stopIdleAnimation();
      document.body.style.overflow = '';
    };
  }, [loaded]);

  /* ================= TEXT FADE ================= */
  useEffect(() => {
    CONTENT.forEach((b) => {
      const el = contentRefs.current[b.id];
      if (!el) return;

      gsap.to(el, {
        autoAlpha: frame >= b.from && frame <= b.to ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }, [frame]);

  /* ================= INITIAL DRAW ================= */
  useEffect(() => {
    if (loaded && imagesRef.current[0]?.complete) {
      draw(0);
    }
  }, [loaded]);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <div className="text-white text-[10vw]">{progress}%</div>
        </div>
      )}

      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        <canvas ref={canvasRef} className="absolute w-full h-full block z-0" />

        <div className="pointer-events-none absolute inset-0 z-10">
          {CONTENT.map((b) => (
            <div
              key={b.id}
              ref={(el) => (contentRefs.current[b.id] = el)}
              className={`absolute flex flex-col opacity-0 w-full px-2 ${b.customStyle} ${b.position}`}
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
              {b.desc && <p className={` py-2 ${b.descStyle}`}>{b.desc}</p>}
            </div>
          ))}
        </div>

        {/* DEBUG */}
        <div className="absolute bottom-6 left-6 text-white text-sm opacity-60">
          Frame: {frame} {idleAnimationRef.current ? '(Idle Loop)' : ''}
        </div>
      </section>
    </>
  );
};

export default CanvasSequenceHero;
