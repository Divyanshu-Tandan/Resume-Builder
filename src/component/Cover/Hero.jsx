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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-24">
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

  {/* Template Selection Preview - Hidden on mobile, visible on larger screens
  <div className="absolute -right-12 sm:-right-20 top-12 sm:top-16 w-40 sm:w-56 h-56 sm:h-72 bg-white rounded-md shadow-lg border border-gray-100 p-3 rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110 hidden sm:block">
   
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded w-full h-16 sm:h-24 hover:scale-105 transition-transform duration-300"></div>
      <div className="bg-gradient-to-br from-red-100 to-red-200 rounded w-full h-16 sm:h-24 hover:scale-105 transition-transform duration-300"></div>
      <div className="bg-gradient-to-br from-gray-800 to-black rounded w-full h-16 sm:h-24 hover:scale-105 transition-transform duration-300"></div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded w-full h-16 sm:h-24 hover:scale-105 transition-transform duration-300"></div>
    </div>
  </div> */}

  {/* Mobile Preview - Hidden on mobile, visible on larger screens */}
  <div className="absolute -bottom-12 sm:-bottom-16 -right-10 sm:-right-16 sm:w-50 sm:h-60 bg-white rounded-md shadow-lg border border-gray-100 p-2 -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110 hidden sm:block">
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded flex items-center justify-center">
      <Image
        src="/cover/tablet.png"
        alt="Mobile Preview"
        width={800}
        height={1200}
        // className="w-3/4 h-auto"
      />
    </div>
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
      `}</style>
    </div>
    </div>
</div>
  );
}
{/* <div class="outer-glass"></div>
<span class="svg-icon icons-1"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#Type=filled, Name=bulb__a)"><path d="M5.868 15.583a8.938 8.938 0 0 1-2.793-7.761 9 9 0 1 1 14.857 7.941A5.74 5.74 0 0 0 16.338 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 1 0-2 0 1 1 0 1 1-2 0 1 1 0 1 0-2 0 3 3 0 0 0 2 2.816V18H7.563a6.838 6.838 0 0 0-1.695-2.417ZM8 20v.31A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31V20H8Z" fill="#fff"/></g><defs><clipPath><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg></span>
<span class="svg-icon icons-2"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#Type=filled, Name=briefcase__a)" fill="#fff"><path d="M19 4h-1.1A5.01 5.01 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v3h24V9a5.006 5.006 0 0 0-5-5ZM8.184 4A3 3 0 0 1 11 2h2a3 3 0 0 1 2.816 2H8.184ZM13 15a1 1 0 0 1-2 0v-1H0v5a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-5H13v1Z"/></g><defs><clipPath><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg></span>
<span class="svg-icon icons-3"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M6 12.649c0-.612 0-.918.053-1.212a3.29 3.29 0 0 1 .234-.755c.121-.27.292-.517.634-1.01L13.416.306a.695.695 0 0 1 .57-.306c1.562 0 2.829 1.342 2.829 2.996V8.25h.314c1.8 0 2.7 0 3.363.382a3.083 3.083 0 0 1 1.305 1.511c.3.734.22 1.683.06 3.583l-.31 3.693c-.137 1.617-.205 2.425-.546 3.037-.3.538-.746.97-1.279 1.239-.605.305-1.372.305-2.904.305h-6.07c-1.662 0-2.493 0-3.128-.342a3.06 3.06 0 0 1-1.297-1.374C6 19.612 6 18.732 6 16.972v-4.323ZM0 12a2 2 0 0 1 4 0v8a2 2 0 1 1-4 0v-8Z" fill="#fff"/></svg></span>
<span class="svg-icon icons-4"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g clip-path="url(#Type=filled, Name=smile__a)"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM8 8a2 2 0 0 1 2 2c0 1-.895 1-2 1s-2 0-2-1a2 2 0 0 1 2-2Zm9.666 7.746A9.453 9.453 0 0 1 12 18a9.453 9.453 0 0 1-5.666-2.254 1 1 0 1 1 1.332-1.492A7.508 7.508 0 0 0 12 16a7.508 7.508 0 0 0 4.336-1.748 1.001 1.001 0 0 1 1.33 1.494ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" fill="#fff"/></g><defs><clipPath><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg></span>
  
</div> */}