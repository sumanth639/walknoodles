import React from "react";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  // ADJUSTED: Manually selected 6 image paths, ensuring '/gallery/img-7.jpg' is included
  const galleryImages = [
    '/gallery/img-1.jpg',
    '/gallery/img-2.jpg',
    '/gallery/img-3.jpg',
    '/gallery/img-5.jpg', // Used img-5 instead of img-4
    '/gallery/img-6.jpg',
    '/gallery/img-7.jpg', // Ensures img-7 is used
  ];

  return (
    <footer className="bg-dark-blue text-cream-text py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 2 columns on mobile/tablet, 3 columns on desktop */}
        <div
          className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 items-start w-full
                     min-h-[120px] md:min-h-[140px] lg:min-h-40"
        >
          {/* Column 1: Connect With Us */}
          <div
            className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-2 
                       lg:items-start lg:text-left" // Ensure left alignment on desktop
            style={{ gap: "0.5rem" }}
          >
            <h3
              // Replaced clamp with responsive Tailwind classes
              className="text-gold font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2"
            >
              Connect With Us
            </h3>

            <a
              href="https://www.instagram.com/walknoodles/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold transition-colors duration-200"
            >
              <FaInstagram
                className="shrink-0 text-gold text-base sm:text-lg lg:text-xl" // Replaced clamp with responsive Tailwind classes
                aria-hidden
              />
              <span className="text-white text-sm sm:text-base lg:text-lg"> {/* Replaced clamp */}
                @walknoodles
              </span>
            </a>

            <a
              href="mailto:info@walknoodles.com"
              className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold transition-colors duration-200"
            >
              <FaEnvelope
                className="shrink-0 text-gold text-base sm:text-lg lg:text-xl" // Replaced clamp
                aria-hidden
              />
              <span className="text-white text-sm sm:text-base lg:text-lg"> {/* Replaced clamp */}
                info@walknoodles.com
              </span>
            </a>
          </div>

          {/* Vertical divider (centered) - Now hidden on lg+ as it's a 3-column layout */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-600/40 -translate-x-1/2 z-0 lg:hidden" />

          {/* Column 2: Our Location */}
          <div
            className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-2
                       lg:items-start lg:text-left" // Ensure left alignment on desktop
            style={{ gap: "0.5rem" }}
          >
            <h3
              className="text-gold font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2" // Replaced clamp
            >
              Our Location
            </h3>

            <div className="flex items-start justify-center sm:justify-start gap-3">
              <FaMapMarkerAlt
                className="shrink-0 mt-1 text-gold text-base sm:text-lg lg:text-xl" // Replaced clamp
                aria-hidden
              />
              <p
                className="leading-relaxed text-white text-sm sm:text-base lg:text-lg" // Replaced clamp
              >
                Shop No.5, GC, Grand Street,
                <br />
                Vaibhav Khand, Indirapuram,
                <br />
                Ghaziabad, Uttar Pradesh 201014
              </p>
            </div>
          </div>

          {/* NEW Column 3: Our Gallery (Desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-start text-center px-2">
            <h3 className="text-gold font-semibold text-xl xl:text-2xl mb-4">
              Our Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2 w-full max-w-xs"> {/* Mini-grid for gallery images */}
              {galleryImages.map((src, index) => ( // Now maps the curated 6 images
                <div key={index} className="w-full aspect-square overflow-hidden rounded-md shadow-sm">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400 lg:mt-10">
          &copy; {new Date().getFullYear()} WalkNoodles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;