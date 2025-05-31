"use client";
import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const JobPortalTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(2);

  const testimonials = [
    {
      id: 1,
      content:
        "This job portal revolutionized our hiring process. We found exceptional talent faster than ever before. The quality of candidates and the streamlined application process made recruitment effortless. Highly recommend for any company looking to scale their team efficiently.",
      name: "Sarah Johnson",
      position: "HR Director, TechCorp Solutions",
      initials: "SJ",
    },
    {
      id: 2,
      content:
        "As a hiring manager, I've used many platforms, but this one stands out. The advanced filtering options and candidate matching algorithm saved us countless hours. We hired three amazing developers within two weeks of posting our jobs.",
      name: "Michael Chen",
      position: "Engineering Manager, StartupXYZ",
      initials: "MC",
    },
    {
      id: 3,
      content:
        "The user experience is outstanding for both employers and candidates. Our job postings get high-quality applications, and the built-in communication tools make coordinating interviews seamless. A game-changer for modern recruitment.",
      name: "Emily Rodriguez",
      position: "Talent Acquisition Lead, Global Ventures",
      initials: "ER",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial(activeTestimonial >= 3 ? 1 : activeTestimonial + 1);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(activeTestimonial === 1 ? 3 : activeTestimonial - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section - Header */}
            <div className="relative bg-gradient-to-br from-red-600 to-red-800 px-8 py-16 lg:py-24 flex flex-col justify-center">
              {/* Decorative Grid Pattern */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                <div className="grid grid-cols-4 gap-1 w-full h-full">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-sm"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 text-center lg:text-left">
                <ScrollReveal animation="slideUp" duration={1000} delay={200}>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    <span className="block">What Our</span>
                    <span className="block">Employers</span>
                    <span className="block text-red-200">Are Saying!</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal animation="slideDown" duration={1000} delay={400}>
                <div className="hidden lg:block mt-12">
                  <p className="text-red-100 text-lg mb-8">
                    Trusted by thousands of companies worldwide
                  </p>
                </div>
                </ScrollReveal>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="absolute bottom-8 right-8 hidden lg:flex space-x-1">
                <ScrollReveal animation="fadeSlideLeft" duration={800} delay={300}>
                  <button
                    onClick={prevTestimonial}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-red-600 rounded-l-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </ScrollReveal>
                <ScrollReveal animation="fadeSlideRight" duration={800} delay={300}>
                <button
                  onClick={nextTestimonial}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-red-600 rounded-r-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Section - Testimonials */}
            <div className="bg-white px-8 py-16 lg:py-24 flex flex-col justify-between">
              {/* Quote Icon */}
              <div className=" left-8 lg:top-12 lg:left-12">
                <svg
                  className="w-12 h-12 lg:w-16 lg:h-16 text-red-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 mt-12 lg:mt-0">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`${
                      activeTestimonial === testimonial.id ? "block" : "hidden"
                    } transition-all duration-500 ease-in-out`}
                  >
                    {activeTestimonial === testimonial.id && (
                      <ScrollReveal
                        animation="fadeSlideUp"
                        duration={600}
                        delay={index * 100}
                        easing="gentle"
                      >
                        <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed italic mb-8">
                          "{testimonial.content}"
                        </blockquote>
                      </ScrollReveal>
                    )}
                  </div>
                ))}
              </div>

              {/* Avatar Navigation */}
              <div className="flex justify-center space-x-4 mb-8">
                {testimonials.map((testimonial, index) => (
                  <ScrollReveal
                    key={testimonial.id}
                    animation="slightUp"
                    duration={500}
                    delay={100}
                    stagger={100}
                    index={index}
                  >
                    <button
                      onClick={() => setActiveTestimonial(testimonial.id)}
                      className={`${
                        activeTestimonial === testimonial.id
                          ? "w-16 h-16 bg-red-600 text-white opacity-100 scale-110"
                          : "w-12 h-12 bg-gray-300 text-gray-600 opacity-75 hover:opacity-100"
                      } rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center`}
                    >
                      {testimonial.initials}
                    </button>
                  </ScrollReveal>
                ))}
              </div>

              {/* Author Information */}
              <div className="text-center">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`${
                      activeTestimonial === testimonial.id ? "block" : "hidden"
                    } transition-all duration-500`}
                  >
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {testimonial.position}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center space-x-2 mt-8 lg:hidden">
                <ScrollReveal animation="fadeSlideLeft" duration={800} delay={300}>
                <button
                  onClick={prevTestimonial}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                </ScrollReveal>
                <ScrollReveal animation="fadeSlideRight" duration={800} delay={300}>
                <button
                  onClick={nextTestimonial}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
            {[
              { src: "/job/flipkart-Logo.wine.svg", alt: "Flipkart" },
              { src: "/job/Microsoft-Logo.wine.svg", alt: "Microsoft" },
              { src: "/job/amazon_(company)-Logo.wine.svg", alt: "Amazon" },
              { src: "/job/Airbnb-Logo.wine.svg", alt: "Airbnb" },
              { src: "/job/Paytm-logo.wine.svg", alt: "Paytm" },
            ].map((logo, index) => (
              <ScrollReveal
                key={logo.alt}
                animation="fadeSlideUp"
                duration={500}
                delay={index * 150}  // stagger delay for each logo
                easing="gentle"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortalTestimonials;
