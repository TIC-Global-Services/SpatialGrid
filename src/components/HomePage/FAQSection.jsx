import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../utils/constant';
import { iconsPath } from '../../utils/imagePath';

const FAQSection = React.memo(
  ({ containerClass = 'max-w-4xl mx-auto', gridClass, title }) => {
    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle function to open/close FAQ answers
    const toggleFAQ = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
      <div
        className={
          containerClass ? 'w-full' : 'max-w-4xl py-16 px-8 lg:px-16 w-full'
        }
      >
        <div className={containerClass}>
          {/* Section Title */}
          {title || (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center font-jakarta text-[#909090]">
              Frequently Asked Questions
            </h2>
          )}

          {/* FAQ List */}
          <div className={gridClass || 'space-y-6 md:space-y-8 '}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1E1F22] rounded-lg overflow-hidden mx-5 md:mx-0"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-8 py-6  transition duration-300 flex justify-between items-center focus:outline-none gap-2"
                >
                  <h3 className="text-[16px] sm:text-[20px] md:text-[20px] font-medium font-jakarta text-[#B7B7BA]">
                    {faq.question}
                  </h3>
                  <img
                    src={
                      openIndex == index
                        ? iconsPath.minusIcon
                        : iconsPath.plusIcon
                    }
                    alt={openIndex == index ? 'Minus icon' : 'plus icon'}
                    className="h-[22px] w-[22px]"
                  />
                </button>

                {/* Answer with Animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-6 text-[14px] md:text-[18px] font-light font-inter text-[#B7B7BA]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default FAQSection;
