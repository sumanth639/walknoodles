import React from "react";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-cream-text py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two columns always */}
        <div
          className="relative grid grid-cols-2 gap-4 items-start w-full
                     min-h-[120px] md:min-h-[140px] lg:min-h-40">
          {/* Column 1 */}
          <div
            className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-2"
            style={{ gap: "0.5rem" }}
          >
            <h3
              className="text-gold font-semibold"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
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
                className="shrink-0 text-gold"
                style={{ width: "clamp(16px, 2.6vw, 20px)", height: "auto" }}
                aria-hidden
              />
              <span style={{ fontSize: "clamp(13px, 2vw, 16px)" }} className="text-white">
                @walknoodles
              </span>
            </a>

            <a
              href="mailto:info@walknoodles.com"
              className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold transition-colors duration-200"
            >
              <FaEnvelope
                className="shrink-0 text-gold" 
                style={{ width: "clamp(16px, 2.6vw, 20px)", height: "auto" }}
                aria-hidden
              />
              <span style={{ fontSize: "clamp(13px, 2vw, 16px)" }} className="text-white">
                info@walknoodles.com
              </span>
            </a>
          </div>

          {/* Vertical divider (centered) */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-600/40 -translate-x-1/2 z-0" />

          {/* Column 2 */}
          <div
            className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-2"
            style={{ gap: "0.5rem" }}
          >
            <h3
              className="text-gold font-semibold"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              Our Location
            </h3>

            <div className="flex items-start justify-center sm:justify-start gap-3">
              <FaMapMarkerAlt
                className="shrink-0 mt-1 text-gold"
                style={{ width: "clamp(16px, 2.6vw, 20px)", height: "auto" }}
                aria-hidden
              />
              <p
                className="leading-relaxed text-white"
                style={{ fontSize: "clamp(13px, 1.9vw, 15px)" }}
              >
                Shop No.5, GC, Grand Street,
                <br />
                Vaibhav Khand, Indirapuram,
                <br />
                Ghaziabad, Uttar Pradesh 201014
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} WalkNoodles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
