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

const MarqueeColumn = ({ items, reverse = false }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />
      <motion.div
        className="flex flex-col gap-8"
        animate={{
          y: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: 18,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    name: 'Sans Chris',
    text: 'Lorem ipsum dolor sit amet consectetur. Eget sed et aliquam ac nunc adipiscing.',
  },
  {
    name: 'Alex Morgan',
    text: 'Orci maecenas cras nunc vivamus arcu purus tincidunt vitae pulvinar.',
  },
  {
    name: 'John Doe',
    text: 'Id quis nec fringilla pellentesque vehicula.',
  },
  {
    name: 'Sarah Lee',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
];

const Testimonials = () => {
  return (
    <div className=" bg-black min-h-screen py-20">
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

      {/* Desktop marquee grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 mx-auto max-w-8xl px-6 md:px-14">
        <MarqueeColumn items={testimonials} reverse={false} />
        <MarqueeColumn items={testimonials} reverse={true} />
        <MarqueeColumn items={testimonials} reverse={false} />
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden space-y-8 px-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
