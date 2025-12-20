import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CloseIcon } from './UtilsLayout';

export const Drawer = React.memo(
  ({ position = 'right', isOpen, setIsOpen, children, title, zInd }) => {
    const handleClose = () => setIsOpen(false);

    const drawerVariants = {
      hidden: { x: position === 'right' ? '100%' : '-100%', opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeInOut' },
      },
      exit: {
        x: position === 'right' ? '100%' : '-100%',
        opacity: 0,
        transition: { duration: 0.3 },
      },
    };

    return (
      <div className="relative ">
        {isOpen && (
          <div
            className="fixed inset-0 bg-[black] bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={handleClose}
          />
        )}

        {/* Drawer */}
        <motion.div
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          exit="exit"
          variants={drawerVariants}
          style={{
            [position]: 0,
            zIndex: zInd,
          }}
          className={`fixed top-0 h-full w-60 bg-[#1e1f22] text-white shadow-lg z-50 py-4`}
        >
          {/* Close Button */}
          <CloseIcon closeModal={handleClose} className={'!right-4 absolute'} />

          {title && <lable className={'pl-5 font-bold'}>{title}</lable>}
          {/* Drawer Content */}
          <div className="mt-5">{children}</div>
        </motion.div>
      </div>
    );
  }
);
