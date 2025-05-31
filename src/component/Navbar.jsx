"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Refs for dropdown containers and buttons
  const resumeDropdownRef = useRef(null);
  const coverLetterDropdownRef = useRef(null);
  const resumeButtonRef = useRef(null);
  const coverLetterButtonRef = useRef(null);
  
  // Timer ref for delayed hiding
  const hideTimerRef = useRef(null);

  // Function to clear hide timer
  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  // Function to handle mouseenter for dropdown items
  const handleMouseEnter = (item) => {
    clearHideTimer();
    setHoveredItem(item);
    setActiveDropdown(item);
  };

  // Function to handle mouseleave for dropdown items with delay
  const handleMouseLeave = (e, item) => {
    clearHideTimer();
    
    // Set a delay before hiding the dropdown
    hideTimerRef.current = setTimeout(() => {
      const relatedTarget = e.relatedTarget;
      const dropdownRef = item === "resume" ? resumeDropdownRef : coverLetterDropdownRef;
      const buttonRef = item === "resume" ? resumeButtonRef : coverLetterButtonRef;
      
      // Only hide if not moving to dropdown or button
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(relatedTarget) &&
        buttonRef.current && 
        !buttonRef.current.contains(relatedTarget)
      ) {
        setHoveredItem(null);
        setActiveDropdown(null);
      }
    }, 150); // 150ms delay
  };

  // Function to handle dropdown mouseenter
  const handleDropdownMouseEnter = (item) => {
    clearHideTimer();
    setHoveredItem(item);
    setActiveDropdown(item);
  };

  // Function to handle dropdown mouseleave with delay
  const handleDropdownMouseLeave = (e, item) => {
    clearHideTimer();
    
    hideTimerRef.current = setTimeout(() => {
      const relatedTarget = e.relatedTarget;
      const buttonRef = item === "resume" ? resumeButtonRef : coverLetterButtonRef;
      
      // Only hide if not moving back to the button
      if (buttonRef.current && !buttonRef.current.contains(relatedTarget)) {
        setHoveredItem(null);
        setActiveDropdown(null);
      }
    }, 150); // 150ms delay
  };

  // Handle hover for regular links
  const handleLinkHover = (item) => {
    clearHideTimer();
    setHoveredItem(item);
  };

  const handleLinkLeave = () => {
    clearHideTimer();
    setHoveredItem(null);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      clearHideTimer();
    };
  }, []);

  return (
    <header className="relative bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/Clogo.png"
              alt="Careertronic Logo"
              className="w-48 h-auto sm:w-64 md:w-72"
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {/* Dropdown Items */}
            {["resume", "coverLetter"].map((item) => (
              <div
                key={item}
                className="relative"
              >
                <button
                  ref={item === "resume" ? resumeButtonRef : coverLetterButtonRef}
                  className={`flex items-center transition-colors px-2 py-1 rounded-md ${
                    hoveredItem === item || activeDropdown === item
                      ? "text-red-500"
                      : "text-gray-700 hover:text-red-500"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={(e) => handleMouseLeave(e, item)}
                >
                  {item === "resume" && "Resume"}
                  {item === "coverLetter" && "Cover Letter"}
                  <ChevronDown size={16} className="ml-1" />
                </button>

                {/* Dropdowns */}
                {activeDropdown === item && (
                  <div
                    ref={
                      item === "resume"
                        ? resumeDropdownRef
                        : coverLetterDropdownRef
                    }
                    className={`absolute top-full right-0 mt-1 z-50 bg-white shadow-lg rounded-md overflow-hidden`}
                    onMouseEnter={() => handleDropdownMouseEnter(item)}
                    onMouseLeave={(e) => handleDropdownMouseLeave(e, item)}
                  >
                    {item === "resume" && (
                      <div className="p-5 w-64 flex flex-col gap-3">
                        {/* Resume Builder Option */}
                        <div className="group cursor-pointer">
                          <Link href="/builder">
                            <div className="flex items-center mb-3">
                              <div className="bg-red-100 group-hover:bg-red-200 transition-colors duration-200 p-2 rounded-md">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14 2V8H20"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16 13H8"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16 17H8"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 9H9H8"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors duration-200">
                                  Resume Builder
                                </h3>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                              Writing a resume that matches the design of your
                              resume has never been easier with Enhancv's free
                              resume builder
                            </p>
                          </Link>
                        </div>
                        {/* ATS Checker Option */}
                        <div className="group cursor-pointer">
                          <div className="flex items-center mb-3">
                            <div className="bg-red-100 group-hover:bg-red-200 transition-colors duration-200 p-2 rounded-md">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                  stroke="#F00"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors duration-200">
                                ATS Checker
                              </h3>
                            </div>
                          </div>
                          <button className="text-green-600 bg-white font-semibold rounded-lg text-sm hover:bg-green-50 transition-all duration-300">
                            Coming Soon
                          </button>
                          <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                            Ensure your resume passes through Applicant Tracking
                            Systems with our ATS optimization tool
                          </p>
                        </div>
                        {/* AI Interview Question Option */}
                        <div className="group cursor-pointer">
                          <div className="flex items-center mb-3">
                            <div className="bg-red-100 group-hover:bg-red-200 transition-colors duration-200 p-2 rounded-md">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  stroke="#F00"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors duration-200">
                                AI Interview Question
                              </h3>
                            </div>
                          </div>
                          <button className="text-green-600 bg-white font-semibold rounded-lg text-sm hover:bg-green-50 transition-all duration-300">
                            Coming Soon
                          </button>
                          <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                            Practice with AI-generated interview questions
                            tailored to your resume and the job you're applying
                            for
                          </p>
                        </div>
                      </div>
                    )}

                    {item === "coverLetter" && (
                      <div className="flex flex-col md:flex-row w-full md:w-[800px]">
                        {/* First column */}
                        <div className="w-full md:w-1/3 p-5 border-b md:border-b-0 md:border-r border-gray-100 space-y-6">
                          {/* Builder */}
                          <div className="group cursor-pointer">
                            <div className="flex items-center mb-3">
                              <div className="bg-red-100 group-hover:bg-red-200 transition-colors duration-200 p-2 rounded-md">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14 2V8H20"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16 13H8"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16 17H8"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 9H9H8"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>

                              <Link href="/CoverLetter">
                                <div className="ml-3 cursor-pointer">
                                  <h3 className="text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors duration-200">
                                    Cover Letter Builder
                                  </h3>
                                </div>
                              </Link>
                            </div>

                            <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                              Write professional cover letters easily.
                            </p>
                          </div>

                          {/* Templates */}
                          <div className="group cursor-pointer">
                            <div className="flex items-center mb-3">
                              <div className="bg-red-100 group-hover:bg-red-200 transition-colors duration-200 p-2 rounded-md">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8 10H16"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8 14H16"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8 18H12"
                                    stroke="#F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <Link href="/CoverLetter">
                                <div className="ml-3 cursor-pointer">
                                  <h3 className="text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors duration-200">
                                    Templates
                                  </h3>
                                </div>
                              </Link>
                            </div>
                            <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                              Professionally designed templates
                            </p>
                          </div>
                        </div>

                        {/* Second column */}
                        <div className="hidden md:block w-1/3 p-5 border-r border-gray-100 text-gray-800">
                          <h3 className="font-medium mb-4 hover:text-red-600 transition-colors duration-200 cursor-pointer">
                            Writing Guide
                          </h3>
                          <p className="text-xs text-gray-600 mb-4 hover:text-gray-700 transition-colors duration-200">
                            The most comprehensive guide online
                          </p>
                          <h4 className="font-medium mb-2 hover:text-red-600 transition-colors duration-200 cursor-pointer">
                            Formats
                          </h4>
                          <p className="text-xs text-gray-600 mb-4 hover:text-gray-700 transition-colors duration-200">
                            Understand which format to use
                          </p>
                          <h4 className="font-medium mb-2 hover:text-red-600 transition-colors duration-200 cursor-pointer">
                            Ending a Cover Letter
                          </h4>
                          <p className="text-xs text-gray-600 hover:text-gray-700 transition-colors duration-200">
                            Best ways to close your letter
                          </p>
                        </div>

                        {/* Third column */}
                        <div className="hidden md:block w-1/3 p-5 text-gray-700">
                          <h3 className="font-medium mb-4 hover:text-red-600 transition-colors duration-200 cursor-pointer">
                            Examples
                          </h3>
                          <ul className="space-y-2 text-sm">
                            {[
                              "QA Engineer",
                              "Cashier",
                              "UX Designer",
                              "Lecturer",
                            ].map((title) => (
                              <li
                                key={title}
                                className="hover:text-red-600 transition-colors duration-200 cursor-pointer"
                              >
                                • {title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Direct Blog Link */}
            <Link
              href="/Blog"
              className={`transition-colors px-2 py-1 rounded-md ${
                hoveredItem === "blog"
                  ? "text-red-500"
                  : "text-gray-700 hover:text-red-500"
              }`}
              onMouseEnter={() => handleLinkHover("blog")}
              onMouseLeave={handleLinkLeave}
            >
              Blog
            </Link>

            <Link
              href="/Price"
              className={`transition-colors px-2 py-1 rounded-md ${
                hoveredItem === "pricing"
                  ? "text-red-500"
                  : "text-gray-700 hover:text-red-500"
              }`}
              onMouseEnter={() => handleLinkHover("pricing")}
              onMouseLeave={handleLinkLeave}
            >
              Pricing
            </Link>

            {/* Action buttons - responsive spacings */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 ml-2 xl:ml-4">
              <button className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Sign Up
              </button>
              <Link href="/builder">
                <button className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-600 transition-colors duration-200">
                  Get Started
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - Improved with animation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          {/* Mobile Dropdown Items */}
          {["resume", "coverLetter"].map((item) => (
            <div key={item} className="py-2">
              <button
                onClick={() => toggleMobileDropdown(item)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
              >
                <span>
                  {item === "resume" && "Resume"}
                  {item === "coverLetter" && "Cover Letter"}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeDropdown === item ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Dropdown Content - with animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === item
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-2 bg-gray-50 rounded-md mt-1">
                  {item === "resume" && (
                    <div className="space-y-4 py-2">
                      <Link href="/builder" className="block cursor-pointer">
                        <h3 className="text-sm font-medium text-red-500">
                          Resume Builder
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Create your professional resume
                        </p>
                      </Link>
                      <div className="cursor-pointer">
                        <h3 className="text-sm font-medium text-red-500">
                          ATS Checker
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Optimize your resume for ATS
                        </p>
                      </div>
                      <div className="cursor-pointer">
                        <h3 className="text-sm font-medium text-red-500">
                          AI Interview Question
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Practice with AI interview questions
                        </p>
                      </div>
                    </div>
                  )}

                  {item === "coverLetter" && (
                    <div className="space-y-4 py-2">
                      <Link
                        href="/CoverLetter"
                        className="block cursor-pointer"
                      >
                        <h3 className="text-sm font-medium text-red-500">
                          Cover Letter Builder
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Write professional cover letters
                        </p>
                      </Link>
                      <Link
                        href="/CoverLetter"
                        className="block cursor-pointer"
                      >
                        <h3 className="text-sm font-medium text-red-500">
                          Templates
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Professionally designed templates
                        </p>
                      </Link>
                      <div className="cursor-pointer">
                        <h3 className="text-sm font-medium text-red-500">
                          Writing Guide
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Comprehensive guide to writing
                        </p>
                      </div>
                      <div className="cursor-pointer">
                        <h3 className="text-sm font-medium text-red-500">
                          Examples
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          View sample cover letters
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Direct Links */}
          <Link
            href="/Blog"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
          >
            Blog
          </Link>

          <Link
            href="/Price"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
          >
            Pricing
          </Link>

          {/* Mobile Action Buttons */}
          <div className="pt-4 pb-2 space-y-2">
            <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Sign Up
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}