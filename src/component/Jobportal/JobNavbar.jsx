"use client";
import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function JobNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSignupDropdown = () => {
    setSignupDropdownOpen(!signupDropdownOpen);
  };

  return (
    <header className="relative bg-white shadow-sm z-50">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/Clogo.png"
          alt="Careertronic Logo"
          className="w-36 h-auto sm:w-40 md:w-44 lg:w-48" // Responsive logo sizes
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
        {/* Main Menu Items */}
        {[
          { href: "/", label: "Home" },
          { href: "/Job/company", label: "Jobs" },
          { href: "/Resumehero", label: "Build Your Resume" },
          { href: "/Job/companyReview", label: "Companies" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-red-500 transition-colors text-sm md:text-xs lg:text-sm whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}

        {/* Search */}
        <div className="relative ml-2 lg:ml-4">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 bg-white">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search job"
              className="ml-2 outline-none text-sm w-24 md:w-28 lg:w-32"
            />
          </div>
        </div>

        {/* Sign Up Dropdown */}
        <div className="relative ml-2 lg:ml-4">
          <button
            onClick={toggleSignupDropdown}
            className="flex items-center px-3 py-1.5 md:px-2.5 md:py-1 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 whitespace-nowrap"
          >
            Sign Up
            <ChevronDown size={16} className="ml-1" />
          </button>

          {signupDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 md:w-52 bg-white rounded-md shadow-lg z-50">
              <div className="py-1">
                <Link
                  href="/signup/candidate"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                >
                  Sign up as Candidate
                </Link>
                <Link
                  href="/signup/employer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                >
                  Sign up as Employer
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden transition-all duration-300 ease-in-out ${
      mobileMenuOpen
        ? "max-h-screen opacity-100"
        : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
      {[
        { href: "/", label: "Home" },
        { href: "/jobs", label: "Jobs" },
        { href: "/resume-builder", label: "Build Your Resume" },
        { href: "/companies", label: "Companies" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
        >
          {item.label}
        </Link>
      ))}

      {/* Mobile Search */}
      <div className="px-3 py-2">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search job"
            className="ml-2 outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Mobile Sign Up Options */}
      <div className="pt-2 space-y-2 px-3">
        <p className="text-sm font-medium text-gray-700">Sign Up As:</p>
        <Link
          href="/signup/candidate"
          className="block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 text-center"
        >
          Candidate
        </Link>
        <Link
          href="/signup/employer"
          className="block px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
        >
          Employer
        </Link>
      </div>
    </div>
  </div>
</header>
  );
}
