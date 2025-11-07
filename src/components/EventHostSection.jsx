import React from 'react';

const EventHostSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url('/contnacthelp.png')` }}
    >
      <div className="container mx-auto max-w-4xl bg-transparent p-6 md:p-8 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-[32px] md:text-6xl font-semibold text-black leading-loose tracking-widest mb-4 drop-shadow-lg">
            Want to <span className="text-gold font-bold text-5xl">host</span>
            <br />
            an <span className="text-dark-blue font-bold text-5xl">Event</span> ?
          </h2>

          {/* Responsive button sizing */}
          <button className="px-6 mb-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-light-blue text-gold text-xl font-semibold rounded-full shadow-lg hover:bg-dark-blue transition border border-black duration-300 transform hover:scale-105">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventHostSection;
