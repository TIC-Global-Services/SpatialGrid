import React from 'react';
import BackgroundWrapper from '../Reusable/BackgroundWrapper';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="relative bg-black/80 text-white p-6 overflow-hidden border border-red-600/40">
      {/* Red corner border */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600" />
        <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-600" />
        <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-600" />
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600" />
      </div>

      <h3 className="text-lg font-semibold mb-3">{name}</h3>

      <p className="text-sm text-white/60 leading-relaxed mb-6">{text}</p>

      {/* Stars */}
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-white text-xl">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const HorizontalMarquee = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="w-[420px] shrink-0">
            <TestimonialCard {...item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};


const testimonials = [
  {
    name: 'Sans Chris',
    text: 'Lorem ipsum dolor sit amet consectetur. Eget sed et aliquam ac nunc adipiscing. Lorem ipsum dolor sit amet consectetur. Eget sed et aliquam ac nunc adipiscing.',
  },
  {
    name: 'Alex Morgan',
    text: 'Orci maecenas cras nunc vivamus arcu purus tincidunt vitae pulvinar. Lorem ipsum dolor sit amet consectetur. Eget sed et aliquam ac nunc adipiscing.',
  },
  {
    name: 'John Doe',
    text: 'Id quis nec fringilla pellentesque vehicula. Lorem ipsum dolor sit amet consectetur. Eget sed et aliquam ac nunc adipiscing.',
  },
  {
    name: 'Sarah Lee',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit amet consectetur. Eget sed et aliquam ac nunc adipiscing.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black  py-20">
      {/* Heading */}
      <div className="max-w-5xl text-center mx-auto space-y-4 pb-16">
        <h1 className="text-3xl md:text-5xl font-telegraf font-medium text-white">
          Testimonials
        </h1>

        <p className="text-[#bbbbbb] max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. At a enim sem nisi amet neque
          vulputate imperdiet amet.
        </p>
      </div>

      {/* Horizontal Marquee */}
      <div className="max-w-7xl mx-auto px-6">
        <HorizontalMarquee items={testimonials} />
      </div>
    </div>
  );
};


export default Testimonials;
