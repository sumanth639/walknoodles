import React from "react";

const OurMissionSection = () => {
  return (
    <section className="bg-gold p-6 overflow-x-hidden">
      <div
        className="bg-[url('/about-bg.png')] bg-cover rounded-2xl bg-center bg-no-repeat w-full py-12 px-6 md:px-12 relative overflow-visible"
      >
        {/* Title diagonally near image */}
        <div className="absolute right-10 top-8 md:right-16 md:top-12 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gold drop-shadow-md">
            Our Mission
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex flex-row justify-between items-center gap-2 mt-20 relative overflow-visible">
          {/* Left Column - Text (60%) */}
          <div className="w-[60%] z-10">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              To establish{" "}
              <span className="font-semibold text-gold">Walkin’Oodle </span>
              as the leading brand in the Quick Service Restaurant (QSR) model
              for innovative & health-centric Pan-Asian noodles in India.
            </p>
          </div>

          {/* Right Column - Image (40%) */}
          <div className="w-[40%] flex justify-center relative overflow-visible">
            <img
              src="/about.png"
              alt="About Walkin'Oodle"
              className="w-[120%] max-w-none relative -right-4 top-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
