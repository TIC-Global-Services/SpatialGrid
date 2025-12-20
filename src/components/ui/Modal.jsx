import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './UtilsLayout';

const Modal = React.memo(
  ({ isOpen, closeModal, children, className, inset }) => {
    const modalRef = useRef(null);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'; // Disable background scroll
      } else {
        document.body.style.overflow = 'auto'; // Enable background scroll
      }

      return () => {
        document.body.style.overflow = 'auto'; // Clean up on unmount
      };
    }, [isOpen]);

    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (modalRef.current && !modalRef.current.contains(event.target)) {
    //       closeModal();
    //     }
    //   };

    //   if (isOpen) {
    //     document.addEventListener('mousedown', handleClickOutside);
    //   }

    //   return () => {
    //     document.removeEventListener('mousedown', handleClickOutside);
    //   };
    // }, [isOpen, closeModal]);

    if (!isOpen) return null;

    return (
      <div
        className={`fixed inset-0 ${
          inset === 'false' ? '' : 'bg-black'
        } bg-opacity-50 flex items-center justify-center min-w-full min-h-screen md:min-w-[460px] z-[9991]`}
      >
        <div
          className={`rounded-lg w-full md:max-h-[90vh] overflow-y-hidden p-2 flex justify-center items-center ${className}`}
        >
          <div ref={modalRef} className="relative w-fit">
            <CloseIcon onClick={closeModal} />
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default Modal;
