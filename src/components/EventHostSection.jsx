import React from 'react';

const EventHostSection = () => {
  return (
    <section
      className="relative w-full  px-4 bg-contain bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url('/contnacthelp.png')` }}
    >
      <div className="container mx-auto max-w-4xl bg-transparent p-10 md:p-16 relative overflow-hidden">
        
        <div className="relative z-10 text-center">
          <h2 className="text-[32px] md:text-6xl font-semibold text-black leading-loose tracking-widest mb-8 drop-shadow-lg">
            Want to <span className="text-gold font-bold text-5xl">host</span>
            <br />
            an <span className="text-dark-blue font-bold text-5xl">Event</span> ?
          </h2>
          <button className="px-10 py-4 bg-light-blue text-gold text-xl font-semibold rounded-full shadow-lg hover:bg-dark-blue transition border border-black duration-300 transform hover:scale-105">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventHostSection;