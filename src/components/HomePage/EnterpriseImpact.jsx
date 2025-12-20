import React, { useEffect, useRef, useState } from 'react';
import HeadingText from '../ui/HeadingText';
import { MediumButton } from '../ui/buttons';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { videoPath } from '../../utils/imagePath';

// XR Card Component for displaying videos
const XRCard = React.memo(({ videoSrc, altText, active }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (window.innerWidth <= 768) {
        active
          ? videoRef.current
              .play()
              .catch((err) => console.log('Autoplay blocked:', err))
          : videoRef.current.pause();
      }
    }
  }, [active]);

  return (
    <div className="w-full max-w-[370px] mx-auto bg-[#191A1D] min-h-[100%] rounded-lg overflow-hidden group shadow-[0px_4px_10px_rgba(255,255,255,0.2)]">
      <video
        ref={videoRef}
        autoPlay={window.innerWidth > 768 ? true : active}
        loop
        muted
        playsInline={window.innerWidth > 768 ? true : active}
        className="w-full h-[400px] object-cover transition-transform duration-300 transform group-hover:scale-105"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

const EnterpriseImpact = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Common Video Slides Data
  const videoSlides = [
    { src: videoPath?.motor, alt: 'AR Phone XR Experience' },
    { src: videoPath?.chair, alt: 'Lunar XR Experience' },
    { src: videoPath?.drilling, alt: 'Industrial XR Experience' },
  ];

  return (
    <div className="py-8 md:py-16 px-4 sm:px-8 lg:px-16">
      <HeadingText
        text1="The Enterprise Impact"
        text2="Why Leading Enterprises Choose Us"
        text3="Empower your enterprise with tools that deliver results. Our Spatial Computing platform enhances collaboration with immersive communication, accelerates training with lifelike simulations, streamlines operations through spatial insights, and delivers engaging customer experiences."
      />

      {/* Desktop and Tablet View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto my-9">
          {videoSlides.map((video, index) => (
            <XRCard key={index} videoSrc={video.src} altText={video.alt} />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={16}
          loop={true}
          speed={1000}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          modules={[Navigation, Pagination]}
          wrapperClass="py-4"
        >
          {videoSlides.map((video, index) => (
            <SwiperSlide key={index}>
              <XRCard
                active={activeIndex === index}
                videoSrc={video.src}
                altText={video.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <MediumButton
          title="See All Use Cases"
          className="bg-[#4C4C50] hover:bg-[#262626]"
        />
      </div>

      {/* Custom Pagination Styles */}
      <style>
        {`
          .custom-bullet {
            background-color: #1E1F22 !important;
            width: 12px;
            height: 12px;
            opacity: 1;
            transition: all 0.3s ease;
            display: inline-block;
            margin: 0 4px;
            border-radius: 50%;
          }
          .custom-bullet-active {
            background-color: #71747D !important;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
});

export default EnterpriseImpact;
