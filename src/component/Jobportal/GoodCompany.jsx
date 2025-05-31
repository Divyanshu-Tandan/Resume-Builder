import React from "react";
import {
  Star,
  Coffee,
  Compass,
  Users, 
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from '../ScrollReveal';

import Link from "next/link";
const GoodCompany = () => {
  // Sample data for work-life balance stats
  const workLifeStats = [
    {
      value: "78%",
      label:
        "of employees say work-life balance is the most important factor in job satisfaction",
      icon: <Coffee size={24} />,
      gradient: "from-red-500 to-red-700",
    },
    {
      value: "3.8x",
      label:
        "higher productivity reported by employees with positive work-life balance",
      icon: <TrendingUp size={24} />,
      gradient: "from-red-600 to-red-800",
    },
    {
      value: "65%",
      label: "lower burnout rates in companies with flexible work policies",
      icon: <Star size={24} />,
      gradient: "from-red-700 to-red-900",
    },
    {
      value: "87%",
      label: "of job seekers consider company culture before applying",
      icon: <Users size={24} />,
      gradient: "from-red-700 to-red-900",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100/30 rounded-full blur-3xl"></div>
        {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200/30 rounded-full blur-3xl"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fadeUp" duration={800} delay={0}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <ScrollReveal animation="fadeZoomIn" duration={800} delay={100}>
              <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 font-medium mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Sparkles size={16} className="animate-pulse" />
                <span className="text-sm sm:text-base">MORE THAN JUST A JOB</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeSlideUp" duration={900} delay={200}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Good Life Starts with a
                <span className="text-red-600"> Good Company</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" duration={900} delay={300}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                The right workplace doesn't just advance your career—it enhances
                your quality of life.
                <br className="hidden sm:block" />
                <span className="text-red-600 font-semibold">
                  Find companies that value what matters most to you.
                </span>
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Work-Life Balance Statistics */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {workLifeStats.map((stat, index) => (
              <ScrollReveal
                key={index}
                animation="fadeUp"
                duration={700}
                delay={index * 100} // staggered animation
                triggerOnce={true}
              >
                <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${stat.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  <p
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Company Culture Benefits */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <ScrollReveal animation="fadeUp" duration={700} delay={0} triggerOnce={true}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                What makes a company worth your talent?
              </h3>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                icon: <Coffee size={32} />,
                title: "Work-Life Balance",
                description:
                  "Companies that respect your time outside work lead to higher job satisfaction and better mental health.",
                gradient: "from-red-500 to-red-700",
                hoverGradient: "from-red-600 to-red-800",
              },
              {
                icon: <Compass size={32} />,
                title: "Growth Opportunities",
                description:
                  "Organizations that invest in your development help you build a fulfilling and sustainable career path.",
                gradient: "from-red-500 to-red-700",
                hoverGradient: "from-red-600 to-red-800",
              },
              {
                icon: <Users size={32} />,
                title: "Positive Culture",
                description:
                  "Supportive environments foster collaboration, innovation, and meaningful connections with colleagues.",
                gradient: "from-red-500 to-red-700",
                hoverGradient: "from-red-600 to-red-800",
              },
            ].map((benefit, index) => (
              <ScrollReveal
                key={index}
                animation="fadeUp"
                duration={700}
                delay={index * 150}
                triggerOnce={true}
              >
                <div className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.hoverGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    {benefit.icon}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.title}
                  </h4>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* For Employers Section */}
        <div className="mb-16 sm:mb-20">
          <ScrollReveal animation="fadeUp" duration={800} delay={0} triggerOnce>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                
                {/* Left Side - Image */}
                <ScrollReveal animation="fadeRight" duration={800} delay={100} triggerOnce className="w-full lg:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/job/hire.jpg"
                      alt="Businessman"
                      width={500}
                      height={400}
                      className="object-cover w-full h-64 sm:h-80 md:h-96 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                  </div>
                </ScrollReveal>

                {/* Right Side - Text */}
                <ScrollReveal animation="fadeLeft" duration={800} delay={200} triggerOnce className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Sparkles size={16} className="animate-pulse" />
                    <span className="text-sm sm:text-base">FOR EMPLOYERS</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                    Looking to hire?
                  </h2>

                  <p className="text-gray-700 mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
                    Access a talent pool of over
                    <span className="text-red-600 font-bold"> 50 million active job seekers!</span>
                  </p>

                  <button className="group relative bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl px-8 py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Post a Job
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Call to Action */}
        <ScrollReveal animation="fadeUp" duration={800} delay={0} triggerOnce>
          <div className="relative bg-black text-white p-8 sm:p-12 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <ScrollReveal animation="fadeRight" duration={700} delay={100} triggerOnce className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Find companies that match your values
                </h3>
                <p className="text-white/90 text-base sm:text-lg md:text-xl">
                  Explore our company culture insights and reviews
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeLeft" duration={700} delay={200} triggerOnce className="flex flex-col sm:flex-row gap-4">
                <Link href="/Job/companyReview" passHref>
                  <button className="group relative bg-white text-black hover:bg-gray-100 font-bold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                    <span className="relative z-10">View Top Companies</span>
                  </button>
                </Link>

                <Link href="/Job/companyReview" passHref>
                  <button className="group relative bg-red-600 text-white hover:bg-red-700 font-bold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                    <span className="relative z-10">Company Reviews</span>
                  </button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GoodCompany;
