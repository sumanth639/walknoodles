import React from 'react';
import shopPhoto from '/shop-photo.png';

const FindUsSection = () => {
  const mapLink = "https://share.google/3S6RKOfAbN6E8gqmw";

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-stretch rounded-2xl overflow-hidden shadow-xl">
          
          {/* Left Column: Shop Photo */}
          <div className="w-[40%]">
            <img 
              src={shopPhoto} 
              alt="WalkN'oodles Shop Front" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Map Image with Link and Hover Effect */}
          <div className="w-[60%] relative group"> {/* Added 'group' class for hover effects */}
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full"
            >
              <img 
                src="/map-photo.png" 
                alt="WalkN'oodles Location Map" 
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              
              {/* "Visit us" Button with Glassmorphism Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  className="px-6 py-3 rounded-full text-lg font-semibold  cursor-pointer
                             bg-gold
                             transition-all duration-300 ease-in-out"
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