import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * PageNotFound Component
 * Displays a "Coming Soon" page with a button to navigate back to the dashboard.
 *
 * @param {Object} props - Component props
 * @param {string} props.bg - Background color for the page
 */
const PageNotFound = ({ bg }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full text-white"
      style={{ backgroundColor: bg }} // Dynamic background color
    >
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-6">This page is under development.</p>

      {/* Button to navigate back to the dashboard */}
      <button
        onClick={() => navigate(bg ? '/' : '/gridpage')}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go to {bg ? 'Home' : 'Dashboard'}
      </button>
    </div>
  );
};

export default PageNotFound;
