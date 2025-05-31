
'use client'
import React from "react";
import { useState } from "react";
import {
  FaBrain,
  FaFileAlt,
  FaGlobe,
  FaCheckCircle,
  FaChartLine,
  FaPalette,
} from "react-icons/fa";
import ResumeCarousel from "@/component/ResumeCarousel";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function PricingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "It's the only tool online that gives a millennial-worthy resume without the cheap, non-applicable templates. The balance between style, content, and function is just stunning. I've been on many hiring committees and an Enhancv resume will always catch my eye. It's clean and minimal.",
      author: "Joshua Perk",
      title: "Account Manager, OpenNest"
    },
    {
      quote: "This platform transformed my job search experience. The intuitive design tools helped me create a resume that truly represents my professional journey. Within two weeks of updating my resume, I received three interview calls.",
      author: "Sarah Chen",
      title: "Marketing Director, TechVision"
    },
    {
      quote: "As someone who reviews hundreds of applications monthly, I can immediately spot resumes made with this tool. They stand out for their thoughtful organization and modern aesthetic without being distracting.",
      author: "Miguel Rodriguez",
      title: "HR Manager, GlobalCorp"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];
  return (
    <div className="bg-gradient-to-b from-red-50 via-white to-white">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white px-4 py-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 via-black to-red-600 text-transparent bg-clip-text">
          Choose the right plan for you
        </h1>
        <p className="text-center text-gray-700 mb-10">
          Build a strikingly powerful resume approved by recruiters
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Free Plan */}
          <div className="border border-gray-300 rounded-2xl p-6 shadow-md bg-white shadow-zinc-600">
            <h2 className="text-xl font-semibold mb-2 text-black">FREE PLAN</h2>
            <p className="text-4xl font-bold mb-1 text-red-600">₹0</p>
            <p className="text-sm text-gray-500 mb-4">Valid for 7 days</p>
            <ul className="text-sm space-y-2 mb-6 text-black">
              <li>✓ Two resumes and cover letters</li>
              <li>✓ All resume templates</li>
              <li>✓ Basic resume sections</li>
              <li>✓ Enhancv branding</li>
            </ul>
            <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-red-700 transition-all">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-red-600 rounded-2xl p-6 shadow-lg bg-red-50 shadow-red-900">
            <div className="text-sm bg-red-600 text-white rounded-full px-3 py-1 inline-block mb-2">
              PRO QUARTERLY PLAN
            </div>
            <p className="text-4xl font-bold mb-1 text-black">
              ₹199<sup className="text-base">/mo</sup>
            </p>
            <p className="text-sm text-gray-600 mb-1">
              ₹500 billed every 3 months
            </p>
            <p className="text-sm text-red-700 font-medium mb-4">
              ₹2400.00 - SAVE 25.38%
            </p>
            <ul className="text-sm space-y-2 mb-6 text-black">
              <li>✓ 150 resumes and cover letters</li>
              <li>✓ All resume templates</li>
              <li>✓ Real-time content suggestions</li>
              <li>✓ ATS check (Applicant Tracking System)</li>
            </ul>
            <button className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-black transition-all">
              Go Pro
            </button>
          </div>
        </div>

        <section className="bg-white py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-black via-red-600 to-black text-transparent bg-clip-text">
            Popular premium features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Enhance with AI",
                icon: <FaBrain className="text-4xl text-red-600" />,
                description:
                  "Use AI-powered tools to optimize your resume and make it stand out.",
              },
              {
                title: "AI Cover Letter Builder",
                icon: <FaFileAlt className="text-4xl text-red-600" />,
                description:
                  "Generate customized cover letters tailored to each job application.",
              },
              {
                title: "Resume Website",
                icon: <FaGlobe className="text-4xl text-red-600" />,
                description:
                  "Create a personal online portfolio to showcase your skills and work.",
              },
              {
                title: "Resume Review",
                icon: <FaCheckCircle className="text-4xl text-red-600" />,
                description:
                  "Get expert feedback and suggestions to improve your resume.",
              },
              {
                title: "Resume Tracking",
                icon: <FaChartLine className="text-4xl text-red-600" />,
                description:
                  "Track how your resume performs with potential employers and recruiters.",
              },
              {
                title: "35+ Template Designs",
                icon: <FaPalette className="text-4xl text-red-600" />,
                description:
                  "Build confidently with thousands of potential design combinations that help you stand out to hiring managers.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl p-4"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-sm mt-2 text-gray-600">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#f7f8fa] py-20 px-6">
      
          <ResumeCarousel />
        </section>

        <section className="w-full bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            {/* Left section - Question */}
            <div className="w-full md:w-1/3 bg-[#FEF3F3] rounded-3xl p-12 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
                What do people say about us?
              </h2>
            </div>

            {/* Right section - Testimonial */}
            <div className="w-full md:w-2/3 bg-white rounded-3xl p-8 shadow-sm relative">
              <div className="mb-8">
                <p className="text-gray-700 text-lg md:text-xl">
                  "{current.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {current.author}
                  </p>
                  <p className="text-gray-600">{current.title}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="h-12 w-12 rounded-full border border-red-200 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform rotate-180"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="h-12 w-12 rounded-full border border-red-200 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-red-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-red-700 via-black to-red-700 text-transparent bg-clip-text">
              Why professionals love our platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Fast & Easy to Use",
                  desc: "Get started instantly and build your resume in minutes with our intuitive interface.",
                },
                {
                  icon: "🎯",
                  title: "Job-Winning Templates",
                  desc: "Professionally designed templates optimized to pass ATS and impress recruiters.",
                },
                {
                  icon: "🔒",
                  title: "Secure & Private",
                  desc: "Your data stays safe. We never share your information with third parties.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
