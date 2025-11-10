import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Top background section */}
      <div className="relative min-h-[50vh] bg-[url('/hero-bg1.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-white opacity-20"></div>

        {/* Hero1 Image */}
        <motion.img
          src="/hero1.png"
          alt="Walk Noodles - Healthy and tasty Asian noodles"
          className="relative w-64 h-auto max-h-[420px] object-contain xs:w-68 xxs:w-55 xxs:max-h-80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          loading="eager"
        />
      </div>

      {/* Bottom background section */}
      {/* ADJUSTED: Increased height to 90vh on desktop */}
      <div className="relative bg-[url('/hero-bg2.png')] bg-cover bg-center overflow-hidden min-h-[70vh] lg:min-h-[90vh] lg:flex lg:flex-row">
        <div className="absolute inset-0 bg-white opacity-10"></div>

        {/* Left Content Column */}
        <div className="lg:w-1/2 lg:relative lg:py-14 lg:px-16">
          {/* Vertical line (Hidden on desktop) */}
          <div className="absolute left-2 md:left-4 top-3 h-[90%] w-0.5 bg-black z-10 lg:left-14 lg:top-10 lg:h-[85%] lg:hidden"></div>

          {/* Heading */}
          <motion.h1
            className="absolute top-10 left-6 md:left-10 text-5xl md:text-6xl font-bold leading-tight text-shadow-lg/30 lg:relative lg:top-0 lg:left-0 lg:text-6xl lg:mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-dark-blue">Tasty</span>{" "}
            <span className="text-light-blue">
              Just <br /> Got
            </span>
            <br />
            <span className="text-gold">Healthier</span>
          </motion.h1>

          {/* Text block */}
          <motion.div
            className="absolute top-[45%] left-6 md:left-10 hidden md:block max-w-md lg:relative lg:top-0 lg:left-0 lg:max-w-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-dark-blue text-lg leading-relaxed font-medium mb-4 lg:text-lg">
              Indulge in authentic Asian flavors made with love and the finest ingredients.
              From hand-tossed noodles to fresh veggies — we bring the best of
              Asian cuisine to your plate in Indirapuram. Discover wholesome meals crafted for both
              taste and health. Your go-to healthy noodles restaurant!
            </p>
          </motion.div>

          {/* Enquire Button */}
          <motion.div
            className="absolute top-60 left-6 md:left-10 lg:relative lg:top-0 lg:left-0 lg:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="inline-block px-4 py-2 bg-light-blue text-gold text-xl font-semibold rounded-full hover:bg-dark-blue transition border border-black duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold lg:px-8 lg:py-2.5 lg:text-xl"
            >
              Enquire Now
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.nav
            className="absolute left-6 md:left-10 bottom-10 flex flex-col space-y-6 lg:relative lg:left-0 lg:bottom-0 lg:mt-8 lg:flex-row lg:space-y-0 lg:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            aria-label="Social media links"
          >
            <a 
              href="https://www.facebook.com/walknoodles" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded lg:w-8 lg:h-8"
              aria-label="Follow Walk Noodles on Facebook"
            >
              <Facebook className="w-8 h-8" aria-hidden="true" />
            </a>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded lg:w-8 lg:h-8"
              aria-label="Message Walk Noodles on WhatsApp"
            >
              <MessageCircle className="w-8 h-8" aria-hidden="true" />
            </a>
            <a 
              href="https://www.instagram.com/walknoodles/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded lg:w-8 lg:h-8"
              aria-label="Follow Walk Noodles on Instagram"
            >
              <Instagram className="w-8 h-8" aria-hidden="true" />
            </a>
          </motion.nav>
        </div>

        {/* Right Image Column */}
        {/* ADDED: lg:flex lg:items-center lg:justify-center to center the image vertically */}
        <div className="lg:w-1/2 lg:relative lg:flex lg:items-center lg:justify-center">
          <motion.img
            src="/hero2.png"
            alt="Delicious Asian noodles and ramen dishes from Walk Noodles"
            className="
              absolute top-60 right-0 w-[420px] h-auto max-h-[720px] object-contain
              xs:w-96 xxs:w-84 xxs:max-h-[460px]
              md:top-1/2 md:right-1/2 md:translate-x-1/2 md:-translate-y-1/2 md:w-[480px]
              /* Adjusted for vertical centering and better sizing on desktop */
              lg:static lg:w-[85%] lg:h-auto lg:max-h-[600px] lg:translate-x-0 lg:translate-y-0 lg:object-contain lg:mx-auto xl:w-[75%]
            "
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;