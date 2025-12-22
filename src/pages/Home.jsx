import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQSection from '../components/3D_Home/FAQSection';
import GetStartedSection from '../components/HomePage/GetStartedSection';
import Modal from '../components/ui/Modal';
import { ModalDefaultComponent } from '../components/ui/UtilsLayout';
import ButtonComponent from '../components/ui/ButtonComponent';
import CanvasSequenceHero from '../components/3D_Home/ImageSequenceHero';
import BackgroundWrapper from '../components/Reusable/BackgroundWrapper';
import SpatialEngineering from '../components/3D_Home/SpatialEngineering';
import EnterpriseImpact from '../components/3D_Home/EnterpriseImpact';
import Companies from '../components/3D_Home/Companies';
import Testimonials from '../components/3D_Home/Testimonials';

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
    <div className="h-full bg-black flex flex-col min-h-screen max-w-[100vw] overflow-hidden relative custom-scrollbar">

      {/* <SequenceHero /> */}
      <CanvasSequenceHero />

      <BackgroundWrapper>
        <div className=' pt-36' />
        <SpatialEngineering />
        <EnterpriseImpact />
      </BackgroundWrapper>
      <Companies />
      <Testimonials />
      <FAQSection />
      {/* <GetStartedSection /> */}

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
