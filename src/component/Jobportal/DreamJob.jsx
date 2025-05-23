import React from 'react'
import Image from 'next/image'
import { MapPin, Briefcase, Clock, User, ArrowRight } from "lucide-react";

const DreamJob = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-medium mb-3">THE ULTIMATE CAREER DESTINATION</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">Find your dream job today</h1>
          <p className="text-lg md:text-xl text-gray-800">Access over 10 million opportunities worldwide</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-2 flex flex-col md:flex-row mb-12 border border-gray-200">
          <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 flex-1 p-2">
            <Briefcase className="text-gray-400 mr-2" size={20} />
            <input 
              type="text" 
              placeholder="Job title, skills or keywords" 
              className="w-full outline-none text-gray-800"
            />
          </div>
          <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 flex-1 p-2">
            <Clock className="text-gray-400 mr-2" size={20} />
            <select className="w-full outline-none text-gray-800 bg-transparent">
              <option>Experience Level</option>
              <option>Entry Level</option>
              <option>Mid-Senior Level</option>
              <option>Director</option>
              <option>Executive</option>
            </select>
          </div>
          <div className="flex items-center flex-1 p-2">
            <MapPin className="text-gray-400 mr-2" size={20} />
            <input 
              type="text" 
              placeholder="City, state or remote" 
              className="w-full outline-none text-gray-800"
            />
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded mt-3 md:mt-0 md:ml-3">
            Find Jobs
          </button>
        </div>

        {/* Key Features */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-red-600 mb-3"><User size={24} /></div>
            <h3 className="text-xl font-bold text-black mb-2">Personalized Matches</h3>
            <p className="text-gray-700">AI-powered job recommendations based on your skills and preferences</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-red-600 mb-3"><Clock size={24} /></div>
            <h3 className="text-xl font-bold text-black mb-2">Real-time Updates</h3>
            <p className="text-gray-700">Be the first to know about new opportunities with instant notifications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-red-600 mb-3"><Briefcase size={24} /></div>
            <h3 className="text-xl font-bold text-black mb-2">Career Resources</h3>
            <p className="text-gray-700">Access resume builder, interview tips, and salary insights</p>
          </div>
        </div>

        
        {/* Call to Action */}
        <div className="bg-red-600 text-white p-8 rounded-lg mb-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Ready to take the next step?</h3>
            <p className="text-gray-300">Create your profile and let employers find you</p>
          </div>
          <button className="bg-white hover:bg-red-300 text-black font-bold py-3 px-8 rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      
      {/* Updated Tailwind Animation Classes */}
      {/* <style jsx>{`
        @keyframes marquee1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-80%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-80%); }
        }
        @keyframes marquee3 {
          0% { transform: translateX(-80%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee1 {
          animation: marquee1 15s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
        .animate-marquee3 {
          animation: marquee3 15s linear infinite;
        }
        .animate-marquee3:hover,.animate-marquee2:hover,.animate-marquee1:hover{
          animation-play-state: paused;
        }


        @media(max-width:640px) {
          @keyframes marquee1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-300%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-300%); }
        }
        @keyframes marquee3 {
          0% { transform: translateX(-300%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee1 {
          animation: marquee1 10s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 16s linear infinite;
        }
        .animate-marquee3 {
          animation: marquee3 10s linear infinite;
        }
        .animate-marquee3:hover,.animate-marquee2:hover,.animate-marquee1:hover{
          animation-play-state: paused;
        }
        }
      `}</style> */}
    </section>
  )
}
export default DreamJob;