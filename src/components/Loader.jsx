import React, { useState, useEffect } from 'react';
import { Grid } from 'ldrs/react';
import 'ldrs/react/Grid.css';

const Loader = ({ bgColor }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    if (progress >= 100) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  // Animate through grid cells in a pattern
  useEffect(() => {
    if (isLoaded) return;

    const cellInterval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % 9);
    }, 600);

    return () => clearInterval(cellInterval);
  }, [isLoaded]);

  // Grid cell component
  const GridCell = ({ active, index }) => {
    return (
      <div
        className={`
          border-gray-200 border-opacity-10 border
          transition-all duration-300 ease-in-out
          ${active ? 'bg-blue-500 bg-opacity-20' : 'bg-gray-800 bg-opacity-30'}
        `}
        style={{
          transitionDelay: `${index * 50}ms`,
        }}
      />
    );
  };

  return (
    <div
      className={`flex items-center justify-center fixed z-[9999999] h-screen w-full ${bgColor || 'bg-gray-900'}`}
    >
      <Grid
        size={60}
        speed={1.5}
        color="rgb(238,43,42)"
        style={{ zIndex: '9999999' }}
      />
    </div>
  );
};

export default Loader;
