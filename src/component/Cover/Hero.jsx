"use client";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";

export default function ResumeBuilderHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts for entrance animations
    setIsVisible(true);
  }, []);

  return (
    <div className="h-fit w-full bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Online Cover Letter Builder
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg transition-all duration-300 hover:text-gray-800">
              Resumeace is the resume builder that helps you land your dream
              job. Beat the blank page anxiety with our intuitive resume
              generator. Just answer a few simple questions, customize the
              design, and save as PDF.
            </p>
            <Link href="/Coverbuilder">
              <button className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-700 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Build My Cover Letter Now
              </button>
            </Link>

            {/* Reviews */}
            <div className="mt-8 sm:mt-12 transform transition-all duration-500 hover:translate-y-1">
              <div className="flex items-center mb-2 sm:mb-3">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star
                    key={index}
                    className={`text-red-500 fill-red-500 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                      index < 4 ? "hover:scale-110" : "hover:scale-110"
                    }`}
                    strokeWidth={index === 4 ? 0.5 : 1}
                  />
                ))}
                <span className="text-gray-600 text-xs sm:text-sm font-medium ml-2 transition-all duration-300 hover:text-red-500">
                  REVIEWS.io
                </span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base transition-all duration-300 hover:text-gray-800">
                4,250 happy customers shared their experience.
              </p>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="relative z-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl mx-auto lg:mx-0 max-w-md sm:max-w-lg md:max-w-xl">
            <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 sm:p-6 transform transition-all duration-500">
              <Image
                src="/cover/herocover.png"
                alt="Resume Preview"
                width={700}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* Mobile Preview - Hidden on mobile, visible on larger screens */}
            <div className="absolute -bottom-12 sm:-bottom-16 -right-10 sm:-right-16 sm:w-50 sm:h-60 bg-white rounded-md shadow-lg border border-gray-100 p-2 -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110 hidden sm:block">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded flex items-center justify-center">
                <Image
                  src="/cover/tablet.png"
                  alt="Mobile Preview"
                  width={800}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layered Blob Design at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">

        {/* Second Layer - Slightly Darker */}
        <div className="absolute bottom-0 left-0 w-full h-3/4">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,250 C400,120 600,350 900,180 C1050,80 1150,220 1200,160 L1200,400 L0,400 Z"
              fill="#F9C7C9"
            />
          </svg>
        </div>

        {/* Third Layer - Medium Dark */}
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,300 C250,180 450,380 700,220 C900,120 1000,280 1200,200 L1200,400 L0,400 Z"
              fill="#F5B0B3"
            />
          </svg>
        </div>

        {/* Inner Layer - Darkest */}
        <div className="absolute bottom-0 left-0 w-full h-1/3">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,340 C350,240 550,400 750,280 C950,180 1050,320 1200,260 L1200,400 L0,400 Z"
              fill="#F1999D"
            />
          </svg>
        </div>
      </div>

      {/* Add custom animation keyframes for fade-in */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        @media (max-width: 640px) {
          .animate-fade-in {
            animation-delay: 0ms !important;
          }
        }

        /* Blob animation for subtle movement */
        @keyframes blob-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .blob-layer {
          animation: blob-float 6s ease-in-out infinite;
        }

        .blob-layer:nth-child(2) {
          animation-delay: -1s;
        }

        .blob-layer:nth-child(3) {
          animation-delay: -2s;
        }

        .blob-layer:nth-child(4) {
          animation-delay: -3s;
        }
      `}</style>
    </div>
  );
}