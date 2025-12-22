import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../utils/constant';

const FAQSection = React.memo(() => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-black py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-10 md:mb-12 text-center font-jakarta text-white py-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-white/10">
              {/* Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 flex items-start gap-6 md:gap-10 text-left"
              >
                {/* Index */}
                <span className="text-white/40 text-lg md:text-2xl font-bold min-w-[40px]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Question */}
                <div className="flex-1">
                  <h3 className="text-white text-base md:text-xl font-telegraf font-bold leading-snug">
                    {faq.question}
                  </h3>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="mt-4 text-white/60 text-sm md:text-base leading-relaxed overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Plus / Close */}
                <div className="">
                  <div className="">
                    <span className={`text-white text-2xl leading-none`}>
                      {isOpen ? '-' : '+'}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default FAQSection;
