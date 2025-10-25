import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';

const items = [
    { id: 1, image: '/gallery/img-1.jpg', name: 'Butter Chicken Noodles' },
    { id: 2, image: '/gallery/img-2.jpg', name: 'Pad Thai' },
    { id: 3, image: '/gallery/img-3.jpg', name: 'Chilli Crisp Noodles' },
    { id: 4, image: '/gallery/img-6.jpg', name: 'Street Style Chowmein' },
    { id: 5, image: '/gallery/img-5.jpg', name: 'Jajangmyeon' },
];

const MustTrySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="overflow-hidden bg-[#fbeeda]">
            <h2 className="text-3xl font-bold text-center text-light-blue mb-8 pt-4">
                Must Try..
            </h2>

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
                className="relative"
            >
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <SwiperSlide key={item.id} className="flex justify-center overflow-visible">
                            <div className="relative w-full max-w-[300px] mx-2">
    <div className="relative bg-white rounded-t-3xl z-10 h-64 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-t-2xl" />
    </div>

    {isActive && (
        <motion.div
            layout
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="relative -mt-8  left-1/2 -translate-x-1/2 w-[100%]  h-24 bg-gold rounded-b-3xl -z-10 flex items-center justify-center shadow-lg"
        >
            <h3 className="text-light-blue text-center font-semibold text-lg">{item.name}</h3>
        </motion.div>
    )}
</div>

                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default MustTrySection;
