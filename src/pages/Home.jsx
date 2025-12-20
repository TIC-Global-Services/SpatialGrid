import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import XRSection from '../components/HomePage/XRSection';
import EnterpriseImpact from '../components/HomePage/EnterpriseImpact';
import VisualEditer from '../components/HomePage/VisualEditer';
import XRSolutions from '../components/HomePage/XRSolutions';
import FAQSection from '../components/HomePage/FAQSection';
import GetStartedSection from '../components/HomePage/GetStartedSection';
import Modal from '../components/ui/Modal';
import { ModalDefaultComponent } from '../components/ui/UtilsLayout';
import ButtonComponent from '../components/ui/ButtonComponent';
import NavbarComponent from '../components/HomePage/NavBarComponent';
import SequenceHero from '../components/3D_Home/SequenceHero';
import CanvasSequenceHero from '../components/3D_Home/ImageSequenceHero';
import HeroSection from '../components/Reusable/HeroSection';
import BackgroundWrapper from '../components/Reusable/BackgroundWrapper';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [mess, setMess] = useState('');
  const navigate = useNavigate();

  const closeModal = () => {
    setOpen(false);
  };

  const loginAgain = () => {
    setOpen(false);
    navigate('/');
    // store.dispatch(set_open_log_in(true));
  };

  return (
    <div className="h-full bg-[#121316] flex flex-col min-h-screen max-w-[100vw] overflow-hidden relative custom-scrollbar">
      {/* <NavbarComponent /> */}
      {/* <SequenceHero /> */}
      <CanvasSequenceHero />
      <BackgroundWrapper>
        <XRSection />
        <EnterpriseImpact />
        <VisualEditer />
      </BackgroundWrapper>
      <XRSolutions />
      <FAQSection />
      <GetStartedSection />

      {/* Modal for alert message */}
      <Modal isOpen={open} closeModal={closeModal}>
        <ModalDefaultComponent>
          <h2 className="text-lg text-center sm:text-xl md:text-[18px] lg:text-[20px] font-medium font-inter text-white mb-5 leading-snug">
            {mess}
          </h2>
          <div className="flex justify-center gap-4">
            <ButtonComponent
              className="bg-[#EE2B2A] hover:bg-[#252729]"
              onClick={loginAgain}
            >
              Login Again
            </ButtonComponent>
            <ButtonComponent
              className="bg-[#252729] hover:bg-[#EE2B2A]"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </ButtonComponent>
          </div>
        </ModalDefaultComponent>
      </Modal>
    </div>
  );
};

export default Home;
