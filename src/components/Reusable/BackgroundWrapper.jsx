import { useState, useRef } from 'react';

const BackgroundWrapper = ({ children, className = '', glowColor = '#EE2B2A' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative bg-black ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Always Visible Base Grid (dim white lines) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center',
          opacity: 0.7, // Ensures grid is visible even without mouse
        }}
      />

      {/* Dynamic Highlight Grid (glowColor lines under spotlight) */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(${glowColor} 1.5px, transparent 1.5px),
              linear-gradient(90deg, ${glowColor} 1.5px, transparent 1.5px)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: 'center',
            opacity: 0.9,
            mixBlendMode: 'screen',
            maskImage: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 65%)`,
            maskSize: '100% 100%',
            WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 65%)`,
            WebkitMaskSize: '100% 100%',
          }}
        />
      )}

      {/* Top Overlay Gradient  */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-44"
        style={{
          background: `linear-gradient(to bottom, #000000, transparent)`,
        }}
      />

      {/* Bottom Overlay Gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-44"
        style={{
          background: `linear-gradient(to top, #000000, transparent 70%)`,
        }}
      />

      {/* Children Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;