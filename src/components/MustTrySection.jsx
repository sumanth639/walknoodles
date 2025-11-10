import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';

const items = [
  { id: 1, image: '/gallery/veg-pad-thai-noodles.jpg', name: 'Veg Pad Thai Noodles' },
  { id: 2, image: '/gallery/butter-chicken-noodles.jpg', name: 'Butter Chicken Noodles' },
  { id: 3, image: '/gallery/img-3.jpg', name: 'Veg Dimsums' },
  { id: 4, image: '/gallery/img-6.jpg', name: 'Basil Chicken Dimsums' },
  { id: 5, image: '/gallery/img-5.jpg', name: 'Chilli Crisp noodles' },
  { id: 6, image: '/gallery/veg-pad-thai-noodles.jpg', name: 'Veg Pad Thai Noodles' },
  { id: 7, image: '/gallery/butter-chicken-noodles.jpg', name: 'Butter Chicken Noodles' },
  { id: 8, image: '/gallery/img-3.jpg', name: 'Veg Dimsums' },
  { id: 9, image: '/gallery/img-6.jpg', name: 'Basil Chicken Dimsums' },
  { id: 10, image: '/gallery/img-5.jpg', name: 'Chilli Crisp noodles' },
];

const MustTrySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="overflow-hidden bg-[#fbeeda]">
      {/* Section Title */}
      <motion.h2
              className="text-3xl mt-3 font-extrabold text-dark-blue text-center mb-10 md:mb-12 lg:text-5xl lg:mb-12 xl:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              Must Try<span className='text-light-blue'>...</span>
            </motion.h2>

      {/* Subtitle below title */}
      <motion.p
        className="hidden sm:block text-center text-dark-blue/80 text-xl mt-2 mb-6 max-w-2xl mx-auto px-4 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Taste the essence of Asia — from flavorful noodles to delicate dim sums,
        each dish is a perfect blend of tradition and health.
      </motion.p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2.1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        className="relative mt-8"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide key={item.id} className="flex justify-center overflow-visible">
              <motion.div
                className="relative w-full max-w-[300px] mx-2"
                variants={slideVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Image */}
                <div className="relative flex items-center justify-center z-10 h-64 cursor-pointer overflow-visible">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-56 h-64 object-cover rounded-full"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                </div>

                {/* Yellow Card */}
                {isActive && (
                  <motion.div
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariant}
                    transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                    className="relative -mt-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gold -z-10 flex flex-col justify-end items-center rounded-b-3xl pb-5"
                  >
                    <h3 className="text-light-blue text-center font-semibold text-lg mt-2">
                      {item.name}
                    </h3>
                  </motion.div>
                )}
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MustTrySection;
