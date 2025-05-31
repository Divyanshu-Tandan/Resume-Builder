import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What makes ResumeAce the perfect tool to prepare your job application?",
      answer:
        "ResumeAce uses AI-powered technology to analyze job descriptions and optimize your resume accordingly, ensuring you highlight the most relevant skills and experiences for each position.",
    },
    {
      question: "How to use ResumeAce Resume Creator?", 
      answer:
        "Simply create an account, input your information, and our builder will guide you through creating a professional resume. You can choose from our templates and get real-time suggestions for improvement.",
    },
    {
      question:
        "Why do I have to make a different resume for every job application?",
      answer:
        "Tailoring your resume for each job increases your chances of passing applicant tracking systems (ATS) and shows employers you're genuinely interested in their specific position.",
    },
    {
      question: "Should I use a resume template in 2025?",
      answer:
        "Yes, using a modern, ATS-friendly template ensures your resume looks professional while being optimized for both human readers and applicant tracking systems.",
    },
    {
      question: "Should my resume be in PDF or Word format?",
      answer:
        "PDF is generally preferred as it maintains formatting across devices. However, some older ATS systems may require Word format - always check the job posting requirements.",
    },
    {
      question: "Should I send a cover letter with my resume?",
      answer:
        "Yes, whenever possible. A tailored cover letter complements your resume by explaining why you're the perfect fit for the specific role and company.",
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
        <ScrollReveal animation="top" duration={1000} delay={300}>
          <h2 className="text-4xl font-extrabold text-black mb-2">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          </ScrollReveal>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Get answers to common questions about optimizing your resume and
            landing your dream job with ResumeAce
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Section - Left Side */}
          <div className="lg:w-1/2">
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
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
                          xmlns="http://www.w3.org/2000/svg"
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
                          xmlns="http://www.w3.org/2000/svg"
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
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-lg">
                Still have questions? We're here to help.
              </p>
              <button className="mt-4 px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 shadow-md hover:shadow-lg transition-all">
                Contact Support
              </button>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center space-y-10">
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md aspect-[4/3] border-4 border-white">
              {/* <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold z-10 rounded-bl-lg">
                RESUME PREVIEW
              </div> */}
              <img
                src="/Resumefyq.png"
                alt="Resume template example"
                className="w-full h-full object-cover"
              />

             
            </div>

            <div className="grid grid-cols-2 gap-5 w-full max-w-md">
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                  <svg
                    className="w-7 h-7 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-black text-lg">ATS Friendly</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Passes all modern systems
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                  <svg
                    className="w-7 h-7 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-black text-lg">Fast Setup</h3>
                <p className="text-sm text-gray-600 mt-1">Ready in minutes</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                  <svg
                    className="w-7 h-7 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-black text-lg">AI Powered</h3>
                <p className="text-sm text-gray-600 mt-1">Smart suggestions</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                  <svg
                    className="w-7 h-7 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-black text-lg">Customizable</h3>
                <p className="text-sm text-gray-600 mt-1">Fully editable</p>
              </div>
            </div>


              </div>

             </div>
            </div>
          </div>
       
  );
};

export default FAQSection;
