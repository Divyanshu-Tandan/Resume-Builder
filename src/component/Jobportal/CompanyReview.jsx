import React from "react";
import Image from "next/image";
import JobNavBar from "./JobNavbar";
import Footer from "../Footer";

const CompaniesReview = () => {
  const companies = [
    {
      id: 1,
      name: "Flipkart",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "1,125 reviews",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      name: "Publicis Sapient",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "1,202 reviews",
      color: "bg-purple-600",
    },
    {
      id: 3,
      name: "ICICI Bank Ltd",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "7,334 reviews",
      color: "bg-red-600",
    },
    {
      id: 4,
      name: "Tata Electronics Pvt Ltd",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "14 reviews",
      color: "bg-blue-900",
    },
    {
      id: 5,
      name: "Indigo Airlines",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "497 reviews",
      color: "bg-blue-700",
    },
    {
      id: 6,
      name: "HCLTech",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "11,231 reviews",
      color: "bg-purple-700",
    },
    {
      id: 7,
      name: "Bajaj Finance",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "794 reviews",
      color: "bg-blue-600",
    },
    {
      id: 8,
      name: "HSBC",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "15,955 reviews",
      color: "bg-red-700",
    },
    {
      id: 9,
      name: "Amazon.com",
      logo: "/api/placeholder/60/60",
      rating: 4.0,
      reviews: "52,853 reviews",
      color: "bg-orange-400",
    },
  ];

  const features = [
    {
      icon: "👷",
      title: "Quality Job",
      color: "text-white",
    },
    {
      icon: "📄",
      title: "Resume builder",
      color: "text-white",
    },
    {
      icon: "🏢",
      title: "Top Companies",
      color: "text-white",
    },
    {
      icon: "⭐",
      title: "Top Talents",
      color: "text-white",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) ? "text-red-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <JobNavBar />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-24 px-4 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-32 w-64 h-64 rounded-full bg-white "></div>
            <div className="absolute bottom-12 right-4 w-24 h-24 rounded-full bg-white"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Images - Now larger and more prominent */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-6 max-w-2xl">
                  {" "}
                  {/* Increased max-width */}
                  {/* Large image - now taller and more visible */}
                  <div className="bg-white/20 rounded-2xl h-96 col-span-1 overflow-hidden shadow-xl relative group">
                    {" "}
                    <img
                      src="/Job/jobrev1.jpg"
                      alt="Main Display"
                      className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-700 ease-in-out"
                    />
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>
                  {/* Two smaller images stacked vertically - also enlarged */}
                  <div className="flex flex-col gap-6 h-96">
                    {/* Matched height to main image */}
                    <div className="bg-white/20 rounded-2xl flex-1 overflow-hidden shadow-xl relative group">
                      <img
                        src="/Job/jobrev2.jpg"
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>
                    <div className="bg-white/20 rounded-2xl flex-1 overflow-hidden shadow-xl relative group">
                      <img
                        src="/Job/jobrev3.webp"
                        alt="Image 2"
                        className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Connecting Talent With <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
                    Exceptional Companies
                  </span>
                </h1>
                <p className="text-red-100 mb-8 text-lg max-w-lg">
                  Discover your dream career with top employers. We partner with
                  industry leaders to bring you the most exciting opportunities
                  in the market.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl border border-white/20">
                        {feature.icon}
                      </div>
                      <span className={`font-semibold ${feature.color}`}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Trusted by Leading Companies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore opportunities with the most respected employers in the
                industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100"
                >
                  {/* Company Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center shadow-md`}
                    >
                      <span className="text-white font-bold text-xl">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(company.rating)}
                        </div>
                        <span className="text-gray-500 text-sm font-medium">
                          {company.reviews}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 text-sm mt-6">
                    <button className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg font-medium transition-colors">
                      Salaries
                    </button>
                    <button className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                      Questions
                    </button>
                    <button className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                      Open jobs
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                Load More Companies
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400 rounded-full filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join our network of professionals and discover opportunities that
              match your skills and aspirations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Browse Jobs
              </button>
              <button className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Upload Resume
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CompaniesReview;
