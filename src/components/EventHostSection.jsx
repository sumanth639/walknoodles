import React from 'react';

const EventHostSection = () => {
  return (
    <section
      // ADJUSTED: Reduced default padding (py-12) and desktop padding (lg:py-20, xl:py-24) drastically
      className="relative w-full bg-cover bg-no-repeat bg-center overflow-hidden py-12 lg:min-h-[30vh] lg:py-20 xl:py-24"
      style={{ backgroundImage: `url('/contnacthelp.png')` }}
    >
      
      {/* Content Container (Kept clean, but focused on desktop typography/sizing) */}
      <div className="container mx-auto max-w-4xl bg-transparent p-6 md:p-8 relative overflow-hidden">
        <div 
          // Removed unnecessary background/border/shadow from the inner div for a cleaner look
          className="relative z-10 text-center"
        >
          <h2 
            // ADJUSTED: Increased text size and weight significantly for desktop impact.
            className="text-[32px] md:text-6xl font-semibold text-black leading-loose tracking-widest mb-4 drop-shadow-lg
                       lg:text-8xl lg:font-extrabold lg:leading-tight lg:tracking-normal"
          >
            Want to <span className="text-gold font-bold text-5xl lg:text-9xl">host</span>
            <br />
            an <span className="text-dark-blue font-bold text-5xl lg:text-9xl">Event</span> ?
          </h2>

          {/* Responsive button sizing */}
          <button 
            // ADJUSTED: Increased button size for desktop and added a slight vertical margin
            className="px-6 mb-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-light-blue text-gold text-xl font-semibold rounded-full shadow-lg 
                       hover:bg-dark-blue transition border border-black duration-300 transform hover:scale-105
                       lg:px-16 lg:py-6 lg:text-2xl lg:mt-8"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventHostSection;