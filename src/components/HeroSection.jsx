import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-screen overflow-hidden">
      {/* Top background section */}
      <div className="relative min-h-[50vh] bg-[url('/hero-bg1.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-white opacity-20"></div>
        <motion.img
          src="/hero1.png"
          alt="Hero"
          className="relative w-64 h-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Bottom background section */}
      <div className="relative bg-[url('/hero-bg2.png')] bg-cover bg-center overflow-visible min-h-[50vh]">
        {/* Optional white overlay */}
        <div className="absolute inset-0 bg-white opacity-10"></div>

        {/* Vertical black line */}
        <div className="absolute left-2 md:left-4 top-3 h-[90%] w-0.5 bg-black z-10"></div>

        {/* Heading */}
        <motion.h1
          className="absolute top-10 left-6 md:left-10 text-5xl md:text-6xl font-bold leading-tight text-shadow-lg/30"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <span className="text-dark-blue">Tasty</span>{" "}
          <span className="text-light-blue">
            Just <br />
            Got
          </span>
          <br />
          <span className="text-gold">Healthier</span>
        </motion.h1>

        {/* Button */}
        <motion.button
          className="absolute top-60 left-6 md:left-10 px-4 py-2 bg-light-blue text-gold text-xl font-semibold rounded-full hover:bg-dark-blue transition border border-black duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Enquire Now
        </motion.button>

        {/* Social Icons */}
        <motion.div
          className="absolute left-6 md:left-10 bottom-10 flex flex-col space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          <Facebook className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer" />
          <MessageCircle className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer" />
          <Instagram className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer" />
        </motion.div>

        {/* Hero Image with infinite floating animation */}
        <motion.img
          src="/hero2.png"
          alt="Hero 2"
          className="absolute top-30 right-0 w-80 h-auto"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
