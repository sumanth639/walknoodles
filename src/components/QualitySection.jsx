import React from 'react';
import { motion } from 'framer-motion';

const QualitySection = () => {
  const qualities = [
    {
      id: 1,
      bgImage: '/gallery/img-7.jpg',
      title: 'NO PALM OIL',
      description:
        "We don't use palm oil in our food because your body deserves better ingredients.",
    },
    {
      id: 2,
      bgImage: '/gallery/img-5.jpg',
      title: 'NO MAIDA',
      description:
        "Our noodles are hearty, healthy, and wholesome! Now, you can binge eat your favourite noodles guilt free",
    },
    {
      id: 3,
      bgImage: '/gallery/img-6.jpg',
      title: 'NO REFINED SUGAR',
      description:
        "We do not add refined sugar in any of our dishes & drinks because sweet moments shouldn't come with side effects!",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-cream-bg py-12 md:py-16 overflow-hidden lg:py-24">
      {/* SECTION HEADER (Desktop Enhancement) */}
      <motion.h2
        className="text-3xl font-extrabold text-dark-blue text-center mb-10 md:mb-12 lg:text-5xl lg:mb-16 xl:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Our Commitment to <span className="text-light-blue">Quality</span>
      </motion.h2>
      {/* --- */}

      {/* Content Container (Desktop Centering) */}
      <div className="space-y-6 lg:space-y-12 max-w-7xl mx-auto px-0 lg:px-6">
        {qualities.map((quality, index) => (
          <motion.div
            key={quality.id}
            // ADJUSTED: Added desktop rounding and size constraint
            className={`relative flex flex-col justify-center min-h-[280px]
                        w-screen overflow-hidden shadow-lg group
                        bg-no-repeat bg-cover bg-center rounded-none
                        lg:w-full lg:min-h-[380px] lg:rounded-3xl xl:min-h-[420px]`}
            style={{
              backgroundImage: `url(${quality.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* Blue info box */}
            <motion.div
              className={`absolute top-[5%] bottom-[5%]
                          w-[60%] h-[90%] flex flex-col justify-center
                          p-6 sm:p-8 md:p-10 
                          rounded-2xl bg-light-blue text-white opacity-90 shadow-xl
                          ${index % 2 === 0
                            ? 'right-4 sm:right-6 md:right-8 lg:right-12 xl:right-20'
                            : 'left-4 sm:left-6 md:left-8 lg:left-12 xl:left-20'} // Odd index: Left side
                          transition-all duration-300
                          
                          /* ADDED: Desktop sizing and text styles */
                          lg:w-[45%] lg:h-auto lg:py-12 lg:px-16 xl:w-[40%] xl:py-16 xl:px-20 lg:rounded-3xl`}
              variants={contentVariant}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gold mb-3 sm:mb-4 lg:text-4xl xl:text-5xl">
                {quality.title}
              </h3>
              <p className="text-[14px] leading-relaxed lg:text-lg xl:text-xl xl:leading-normal">
                {quality.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;