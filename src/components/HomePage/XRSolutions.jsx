import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Divider from '../ui/Divider';
import HeadingText from '../ui/HeadingText';
import { arrayList } from '../../utils/constant';
import { iconsPath } from '../../utils/imagePath';

const SwiperCard = React.memo(({ item, swiperInstance, isMobile }) => {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile && videoRef.current) {
      clearTimeout(timeoutRef.current);
      videoRef.current
        .play()
        .catch((error) => console.log('Playback failed:', error));
      swiperInstance.current?.autoplay.stop();
    }
  }, [isMobile, swiperInstance]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        swiperInstance.current?.autoplay.start();
      }, 150);
    }
  }, [isMobile, swiperInstance]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[#1E1F22] rounded-2xl p-4 md:p-6 flex flex-col-reverse lg:flex-row gap-6 w-full h-[500px] "
    >
      {/* Left: Text Section */}
      <div className="flex flex-col flex-[0.9] h-full">
        <div className="w-40 md:w-52 h-14 md:h-16 bg-[#262626] rounded-xl" />
        <div className="flex items-end mt-4 md:mt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-questrial">
            {item.percentage}
          </h2>
          <span className="text-sm sm:text-base md:text-lg text-[#F5F5F5] font-semibold ml-4 font-jakarta">
            {item.text}
          </span>
        </div>
        <Divider />
        <h2 className="text-xl md:text-2xl font-jakarta text-white mt-2">
          {item.title}
        </h2>
        <p className="text-white mt-2 font-inter text-sm sm:text-base md:text-lg">
          {item.desc}
        </p>
        <a
          href="#"
          className="text-[#EE2B2A] font-semibold text-lg mt-4 flex gap-3 items-center"
        >
          See the full use case
          <img src={iconsPath?.rightArrowRed} alt="Right Arrow Red" />
        </a>
      </div>

      {/* Right: Video Section */}
      <div className="flex flex-1 bg-[#262626] rounded-lg w-full aspect-video overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          autoPlay={isMobile}
          className="w-full h-full object-cover"
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
});

const XRSolutions = React.memo(() => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="text-white py-16 lg:py-[120px] w-full overflow-hidden">
      <div className="container-fluid max-w-[1520px] mx-auto">
        <HeadingText
          text1="XR Solutions for every Industry"
          text2="Incorporate XR in every stage of your business"
          text3="Our customers achieve breakthroughs, visualize experiences faster and drive down costs. See how you can too."
        />

        <div className="flex flex-col gap-6 mt-10  items-center justify-center">
          <div className="w-full">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.autoplay.start();
              }}
              centeredSlides
              slidesPerView={'auto'}
              loop
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              autoplay={{ delay: 9000, disableOnInteraction: false }}
              speed={2000}
              modules={[Pagination, Autoplay]}
              className="w-full max-w-[100vw] mx-auto"
            >
              {arrayList.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="px-2 md:px-4 w-full md:max-w-[80%] lg:max-w-[75%]"
                >
                  <SwiperCard
                    item={item}
                    swiperInstance={swiperRef}
                    isMobile={isMobile}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="swiper-pagination-custom mt-6 flex justify-center"></div>
        </div>
      </div>

      <style>
        {`
          .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.5;
          }
          .swiper-pagination-bullet {
            background-color: #1E1F22 !important;
            width: 12px;
            height: 12px;
            opacity: 0.6;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: #71747D !important;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
});

export default XRSolutions;



