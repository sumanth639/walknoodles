import React from "react";

const OurVisionSection = () => {
  return (
    <section className="relative flex w-full min-h-[70vh] items-center justify-between bg-light-blue overflow-hidden py-8">
      {/* Circle wrapper (no absolute overlap) */}
      <div className="relative flex w-[55%] justify-end">
        <div className="relative bg-gold border-2 border-black rounded-full aspect-square w-[420px] sm:w-[520px] flex items-center justify-end overflow-hidden -ml-[25%]">
          {/* Images inside circle */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 w-[70%] h-[85%] mr-[10%]">
            <div className="h-4/5 w-1/4 rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img-6.jpg"
                alt="Red Dumplings"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-full w-2/5 rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img-2.jpg"
                alt="Noodles Bowl"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-4/5 w-1/4 rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img-1.jpg"
                alt="Fried Noodles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-[45%] flex flex-col justify-center pr-2 text-right">
        <h3 className="text-gold text-2xl text-right sm:text-3xl font-bold mb-2">
          Our Vision
        </h3>
        <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
          <span className="text-gold font-bold text-right">walkin'oodle </span>
          envisions leading a new wave of healthy dining—serving bold, guilt-free flavours that
          inspire better living without compromise.
        </p>
      </div>
    </section>
  );
};

export default OurVisionSection;
