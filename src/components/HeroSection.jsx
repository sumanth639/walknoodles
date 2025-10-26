import { Facebook, Instagram, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-screen overflow-hidden">
      {/* Top background section */}
      <div className="relative min-h-[50vh] bg-[url('/hero-bg1.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-white opacity-20"></div>
        <img
          src="/hero1.png"
          alt="Hero"
          className="relative w-64 h-auto"
        />
      </div>

      {/* Bottom background section */}
      <div className="relative bg-[url('/hero-bg2.png')] bg-cover bg-center overflow-visible min-h-[50vh]">
  {/* Optional white overlay */}
  <div className="absolute inset-0 bg-white opacity-10"></div>

  {/* Vertical black line */}
  <div className="absolute left-2 md:left-4 top-3 h-[90%] w-0.5 bg-black z-10"></div>

  {/* Heading */}
  <h1 className="absolute top-10 left-6 md:left-10 text-5xl md:text-6xl font-bold leading-tight text-shadow-lg/30">
    <span className="text-dark-blue">Tasty</span>{" "}
    <span className="text-light-blue">
      Just <br />
      Got
    </span>
    <br />
    <span className="text-gold">Healthier</span>
  </h1>

  {/* Button */}
  <button className="absolute top-60 left-6 md:left-10 px-4 py-2 bg-light-blue text-gold text-xl font-semibold rounded-full hover:bg-dark-blue transition border border-black duration-300 transform hover:scale-105">
    Enquire Now
  </button>

  {/* Social Icons */}
  <div className="absolute left-6 md:left-10 bottom-10 flex flex-col space-y-4">
    <Facebook className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer" />
    <MessageCircle className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer" />
    <Instagram className="w-8 h-8 text-dark-blue hover:text-light-blue cursor-pointer" />
  </div>

  {/* Hero Image */}
  <img
    src="/hero2.png"
    alt="Hero 2"
    className="absolute top-30 right-0 w-80 h-auto"
  />
</div>

    </div>
  );
};

export default HeroSection;
