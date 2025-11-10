import React from 'react';
import { Instagram, AlarmClockPlus } from 'lucide-react';
import contactHeroBg from '/contactHeroBg.png';

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center overflow-hidden   bg-cover bg-center"
      style={{ backgroundImage: `url(${contactHeroBg})` }}
    >
      <div className="container mx-auto flex flex-row items-center justify-center h-full px-4 "> 
        {/* Left Column - Image */}
        <div className="w-1/2 flex justify-center">
          <img src='/logo-big.png' alt="Walk Noodles Logo" className='h-[200px] w-[200px]' loading="eager" /> 
        </div>

        {/* Right Column - Content */}
        <div className="w-1/2 text-left text-dark-blue">
          <h1 className="text-5xl font-bold leading-16">
            Contact <br className='lg:hidden'/>
            <span className="text-light-blue">Us</span>
          </h1>
        </div> 
      </div>

      {/* Icons Section */}
      <div className='flex absolute top-60 right-10 space-x-4'>
        <a 
          href="https://www.instagram.com/walknoodles/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-16 w-16 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Follow Walk Noodles on Instagram"
        >
          <Instagram className="h-10 w-10 text-pink-500" aria-hidden="true" />
        </a>
        <a 
          href="tel:+91-XXXXXXXXXX" 
          className="h-16 w-16 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Call Walk Noodles"
        >
          <AlarmClockPlus className="h-10 w-10 text-blue-500" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default ContactHero;
