import FAQSection from '../components/3D_Home/FAQSection';
import CanvasSequenceHero from '../components/3D_Home/ImageSequenceHero';
import BackgroundWrapper from '../components/Reusable/BackgroundWrapper';
import SpatialEngineering from '../components/3D_Home/SpatialEngineering';
import EnterpriseImpact from '../components/3D_Home/EnterpriseImpact';
import Companies from '../components/3D_Home/Companies';
import Testimonials from '../components/3D_Home/Testimonials';
import XRSolutions from '../components/3D_Home/XRSolutions';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div className="bg-black flex flex-col max-w-[100vw] custom-scrollbar">
      <BackgroundWrapper>
        <CanvasSequenceHero />
        <SpatialEngineering />
        <XRSolutions />
        <EnterpriseImpact />
      </BackgroundWrapper>
      <Companies />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Home;
