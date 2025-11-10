import React from "react";

const OurMissionSection = () => {
  return (
    <section className="bg-gold p-6 overflow-x-hidden lg:p-10 xl:p-16">
      <div className="max-w-7xl mx-auto"> {/* Centering container for desktop */}
        <div
          className="bg-[url('/about-bg.png')] bg-cover rounded-2xl bg-center bg-no-repeat w-full py-12 px-4 md:px-12 relative overflow-visible
                     lg:py-24 lg:px-20 lg:rounded-3xl xl:py-32"
        >
          {/* Title diagonally near image */}
          {/* FIX: Centered the title container using left-1/2 and -translate-x-1/2 on desktop (lg:) */}
          {/* Mobile positioning (right-20 top-8) remains for small screens */}
          <div className="absolute right-20 top-8 z-10 lg:left-1/2 lg:-translate-x-1/2 lg:top-12 xl:top-16">
            <h2 
              // Removed the drop-shadow for a cleaner desktop look, but kept it for mobile/tablet
              className="text-3xl md:text-4xl font-bold text-gold drop-shadow-md 
                         lg:text-5xl xl:text-7xl  lg:drop-shadow-none lg:text-center"
            >
              Our Mission
            </h2>
          </div>

          {/* Content Row */}
          <div className="flex flex-row justify-between items-center gap-2 mt-20 relative overflow-visible lg:mt-32 xl:mt-40">
            
            {/* Left Column - Text (70%) */}
            <div className="w-[70%] -mt-10 z-10 lg:w-[60%] lg:pt-8 xl:w-[55%] xl:pt-12">
              <p className="text-white text-[13px] leading-relaxed md:text-lg lg:text-xl lg:leading-loose xl:text-3xl">
                To establish
                <span className="font-semibold text-gold lg:font-extrabold"> WalkNoodles </span>
                as the leading brand in the Quick Service Restaurant (QSR) model
                for innovative & health-centric Pan-Asian noodles in India.
              </p>
            </div>

            {/* Right Column - Image (30%) */}
            <div className="w-[30%] flex justify-center relative overflow-visible lg:w-[40%] xl:w-[45%]">
              <img
                src="/about.png"
                alt="Walk Noodles - About our mission and vision"
                className="w-[120%] max-w-none relative scale-150 -right-4 top-10 rotate-[8deg]
                           lg:scale-[1.2] lg:rotate-[4deg] lg:-right-8 lg:top-12 
                           xl:scale-[1.1] xl:-right-12"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;