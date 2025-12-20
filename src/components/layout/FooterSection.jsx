import React from 'react';
import { iconsPath, imagePath } from '../../utils/imagePath';
import { Link } from 'react-router-dom';

const FooterSection = React.memo(() => {
  // Footer navigation items with paths
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { text: 'Features', href: '/features' },
        { text: 'IOS', href: '/ios' },
        { text: 'Android', href: '/android' },
        { text: 'VR', href: '/vr' },
        { text: 'Templates', href: '/templates' },
        { text: 'AI (Coming Soon)', href: '/ai' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Tutorials', href: '/tutorials' },
        { text: 'Documentation', href: '/documentation' },
        { text: 'Use', href: '/use' },
        { text: 'Cases', href: '/cases' },
        { text: 'Help Center', href: '/help-center' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Careers', href: '/careers' },
        { text: 'Terms & Conditions', href: '/terms-conditions' },
        { text: 'Privacy Policy', href: '/privacy-policy' },
        { text: 'Security', href: '/security-and-trust' },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          text: 'software@spatialgrid.ai',
          href: 'mailto:software@spatialgrid.ai',
        },
        { text: '+918978078143', href: 'tel:+918978078143' },
      ],
    },
  ];

  // Social media icons
  const socialIcons = ['x', 'instagram', 'linkdin', 'youtube', 'discord'];

  return (
    <footer className=" bg-black text-white py-12 px-8 lg:px-16 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Mobile Logo */}
        <div className="md:hidden flex items-start">
          <img
            src={imagePath?.logo_small}
            alt="logo_small"
            className="w-[70px] object-contain mx-auto sm:mx-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1 lg:gap-8">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-start">
            <img
              src={imagePath?.logo_small}
              alt="logo_small"
              className="w-[90px] object-contain"
            />
          </div>

          {/* Footer Navigation */}
          {footerLinks.map(({ title, links }, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4 font-inter text-center sm:text-start">
                {title}
              </h3>
              <ul className="space-y-2 font-inter text-center sm:text-start">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="text-[#7B7B7C] hover:text-white"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-[#4D4D4E] md:mt-14 gap-5">
          {/* Copyright & Language Selector */}
          <div className="text-nowrap text-center text-[12px] sm:text-xs md:text-xl font-inter font-medium flex gap-24 text-[#7B7B7C] mx-auto sm:mx-0">
            &copy; 2025-SpatialGridAI.Inc
            <span className="ext-[12px] sm:text-xs md:text-xl flex items-center gap-2">
              English{' '}
              <img
                className="h-[18px] w-[18px]"
                src={iconsPath?.group598Image}
                alt=""
              />
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialIcons.map((icon, i) => (
              <img
                key={i}
                src={imagePath?.[icon]}
                alt={icon}
                className="h-[24px] w-[24px]  object-contain cursor-pointer transition brightness-75 duration-300 hover:brightness-100"
                onClick={() => {
                  const urls = {
                    x: '',
                    instagram:
                      'https://www.instagram.com/spatialgridlabs?igsh=dHY3dmM1MDNiOTNs',
                    linkdin: 'http://www.linkedin.com/company/spatial-grid',
                    youtube: 'https://www.youtube.com/@SpatialGrid',
                    discord: '',
                  };
                  if (urls[icon] !== '') window.open(urls[icon], '_blank');
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default FooterSection;
