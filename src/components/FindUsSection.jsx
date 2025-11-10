import React from 'react';
import shopPhoto from '/shop-photo.png';

const FindUsSection = () => {
  const mapLink = "https://share.google/3S6RKOfAbN6E8gqmw";

  return (
    // ADJUSTED: Increased vertical padding for desktop
    <section className="py-6 bg-white lg:py-16">
      
      {/* ADJUSTED: Added max-w-7xl for centering on large screens */}
      <div className="mx-auto px-4 sm:px-6 max-w-7xl lg:px-8">
        <div 
          // ADJUSTED: Increased overall height for desktop
          className="flex flex-row items-stretch rounded-2xl overflow-hidden shadow-xl h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] 
                     lg:h-[450px] lg:rounded-3xl lg:shadow-2xl"
        >

          {/* Left Column: Shop Photo */}
          <div className="w-[40%]">
            <img 
              src={shopPhoto} 
              alt="WalkN'oodles Shop Front" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Map Image with Link and Hover Effect */}
          <div className="w-[60%] relative group">
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full"
            >
              <img 
                src="/map-photo.png" 
                alt="WalkN'oodles Location Map" 
                // ENHANCED: Added scale transition on map image
                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-60 group-hover:scale-[1.05]"
              />

              {/* "Visit us" Button & Overlay */}
              <div 
                // ENHANCED: Added a dark overlay behind the button for better contrast on hover
                className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button 
                  // ENHANCED: Increased button size and applied colors for higher desktop visibility
                  className="px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold cursor-pointer bg-gold text-dark-blue
                             transition-all duration-300 ease-in-out hover:bg-light-blue hover:text-white lg:px-10 lg:py-4 lg:text-xl"
                >
                  Visit us
                </button>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindUsSection;