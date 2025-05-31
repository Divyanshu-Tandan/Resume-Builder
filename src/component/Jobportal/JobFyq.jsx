"use client";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const JobFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does CareerTronic help me find the right job?",
      answer:
        "CareerTronic uses advanced matching algorithms to connect you with jobs that align with your skills, experience, and career aspirations. Our platform also provides personalized recommendations based on your profile and job search behavior.",
    },
    {
      question: "Is CareerTronic free for job seekers?",
      answer:
        "Yes, creating an account and applying for jobs on CareerTronic is completely free for job seekers. We offer premium features for those who want enhanced visibility and additional tools for their job search.",
    },
    {
      question: "How do I create an effective profile on CareerTronic?",
      answer:
        "Complete all profile sections with detailed information about your skills, experience, and education. Use keywords relevant to your industry, upload a professional resume, and include a clear profile picture to increase your chances of being noticed by employers.",
    },
    {
      question: "What types of jobs can I find on CareerTronic?",
      answer:
        "CareerTronic features opportunities across all industries and career levels, from entry-level positions to executive roles. We specialize in tech, healthcare, finance, marketing, and engineering jobs but cover all professional fields.",
    },
    {
      question:
        "How can I improve my chances of getting hired through CareerTronic?",
      answer:
        "Keep your profile updated, set up job alerts, apply to relevant positions promptly, and use our resume optimization tools. Engaging with our career resources and completing skills assessments can also make your profile stand out.",
    },
    {
      question: "Does CareerTronic offer career advice or resources?",
      answer:
        "Yes, we provide extensive career resources including interview tips, resume writing guides, salary negotiation advice, and industry insights through our Career Resources Center available to all members.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-16 bg-white overflow-hidden">
      {/* Red dots background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(#dc2626 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 opacity-5 rounded-full translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-red-600 opacity-5 rounded-full -translate-x-28 translate-y-28"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <ScrollReveal animation="slideUp" duration={600} delay={0} easing="smooth">
            <h2 className="text-4xl font-extrabold text-black mb-2">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeIn" duration={600} delay={150} easing="smooth">
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" duration={600} delay={300} easing="smooth">
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Get answers to common questions about finding your dream job and
              maximizing your career potential with CareerTronic
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Section - Left Side */}
          <div className="lg:w-1/2">
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <ScrollReveal
                  key={faq.question} // Prefer id if available
                  animation="slideUp"
                  duration={500}
                  delay={index * 100} // staggered delay for nice effect
                  easing="ease"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <button
                      className="w-full px-6 py-5 text-left font-medium flex justify-between items-center"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={`faq-${index}`}
                    >
                      <span className="font-bold text-gray-800 pr-8">
                        {faq.question}
                      </span>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          activeIndex === index
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-gray-500"
                        } transition-all duration-300`}
                      >
                        {activeIndex === index ? (
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
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : (
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
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>
                    </button>

                    <div
                      id={`faq-${index}`}
                      className={`transition-all duration-300 ease-in-out ${
                        activeIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Final CTA */}
            <ScrollReveal animation="fadeInUp" duration={600} delay={faqs.length * 100} easing="ease-in-out">
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-lg">
                  Still have questions? We're here to help.
                </p>
                <button className="mt-4 px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 shadow-md hover:shadow-lg transition-all">
                  Contact Support
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Section - Right Side */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center space-y-10">
            {/* Job Portal Image */}
            <ScrollReveal animation="fadeInUp" duration={700} easing="ease-in-out">
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md aspect-[4/3] border-2 border-white">
                <img
                  src="/Jobfyq.png"
                  alt="CareerTronic job portal interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-5 w-full max-w-md">
              {[
                {
                  title: "Smart Matching",
                  desc: "Precision job recommendations",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
                {
                  title: "Quick Apply",
                  desc: "One-click applications",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                },
                {
                  title: "AI Insights",
                  desc: "Career path suggestions",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                },
                {
                  title: "Custom Alerts",
                  desc: "Personalized job notifications",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  ),
                },
              ].map((item, idx) => (
                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                    <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                      <svg
                        className="w-7 h-7 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="font-bold text-black text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFAQSection;
