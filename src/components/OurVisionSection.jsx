import React from "react";

const OurVisionSection = () => {
  return (
    // ADJUSTED: Increased min-h for desktop and added responsive padding
    <section className="relative flex w-full min-h-[55vh] justify-between bg-light-blue overflow-hidden py-10 lg:min-h-[70vh] lg:py-20">
      
      {/* Content Container (Desktop Centering) */}
      <div className="max-w-7xl mx-auto w-full flex justify-between"> 
        
        {/* Circle wrapper (left side) */}
        <div className="relative flex w-[55%] justify-end">
          <div 
            className="relative bg-gold border-2 border-black rounded-full aspect-square w-[420px] sm:w-[520px] lg:w-[600px] xl:w-[700px] 
                       flex items-center justify-end overflow-hidden -ml-[25%] lg:-ml-[20%] lg:mr-4"
          >
            {/* Images inside circle */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 w-[70%] h-[85%] mr-[10%]">
              
              {/* Image 1 */}
              <div className="h-4/5 w-1/4 overflow-hidden shadow-md">
                <img
                  src="/gallery/img-6.jpg"
                  alt="Red Dumplings - Asian dim sum from Walk Noodles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 2 */}
              <div className="h-full w-2/5 overflow-hidden shadow-md">
                <img
                  src="/gallery/img-2.jpg"
                  alt="Noodles Bowl - Healthy Asian noodles from Walk Noodles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 3 */}
              <div className="h-4/5 w-1/4 overflow-hidden shadow-md">
                <img
                  src="/gallery/img-1.jpg"
                  alt="Fried Noodles - Authentic Asian cuisine from Walk Noodles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section (right side) */}
        <div className="w-[45%] flex flex-col justify-center p-2 lg:w-[40%] xl:w-[35%] lg:p-10 xl:pr-12">
          
          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Heading - Now text-left on desktop */}
            <h3 
              className="text-gold text-2xl wavy-underline-gold text-right sm:text-3xl font-bold mb-2 lg:text-5xl lg:mb-4 xl:text-6xl lg:text-left"
            >
              Our Vision
            </h3>
            
         

            {/* Description - Now text-left on desktop */}
            <p 
                className="text-[14px] sm:text-lg mt-10 font-normal text-white leading-relaxed lg:text-xl lg:mt-12 xl:text-2xl lg:text-left"
            >
              <span className="text-gold font-bold text-left">
                <strong>Walknoodle </strong>
              </span>
              <br className="md:hidden" /> 
              envisions leading a new wave of healthy dining—serving bold, guilt-free flavours that
              inspire better living without compromise.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default OurVisionSection;