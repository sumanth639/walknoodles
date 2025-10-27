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
          <img src='/logo-big.png' alt="Logo" className='h-[200px] w-[200px]' /> 
        </div>

        {/* Right Column - Content */}
        <div className="w-1/2 text-left text-dark-blue">
          <h2 className="text-5xl font-bold leading-16">
            Contact <br />
            <span className="text-light-blue">Us</span>
          </h2>
        </div> 
      </div>

      {/* Icons Section */}
      <div className='flex absolute top-60 right-[40px] space-x-4'>
        <div className="h-16 w-16 flex items-center justify-center bg-white/80 rounded-full  hover:bg-white transition duration-200 cursor-pointer">
          <Instagram className="h-10 w-10 text-pink-500" />
        </div>
        <div className="h-16 w-16 flex items-center justify-center bg-white/80 rounded-full  hover:bg-white transition duration-200 cursor-pointer">
          <AlarmClockPlus className="h-10 w-10 text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
