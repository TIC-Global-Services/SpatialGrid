import React from 'react';
import NavbarComponent from '../HomePage/NavBarComponent';
import { Outlet } from 'react-router-dom';
import FooterSection from './FooterSection';

/**
 * LayoutHome Component
 * This component acts as a layout wrapper for pages within the home section.
 * It includes a navbar at the top, a dynamic content area (Outlet), and a footer.
 */
const LayoutHome = () => {
  return (
    <div className="h-full bg-black flex flex-col min-h-screen max-w-[100vw] overflow-x-hidden relative">
      {/* Navbar Component */}
      <NavbarComponent />

      {/* Main Content Wrapper */}
      <main className="flex-1">
        <Outlet /> {/* Dynamic page content will be rendered here */}
      </main>

      {/* Footer Component */}
      <FooterSection />
    </div>
  );
};

export default LayoutHome;
