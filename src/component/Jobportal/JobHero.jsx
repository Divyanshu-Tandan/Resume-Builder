// pages/index.js
"use client";
import Head from "next/head";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { MagnifyingGlassIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default function JobHero() {
  const companies1 = [
    {
      id: 1,
      name: "Airbnb",
      src: "/job/Airbnb-Logo.wine.svg",
    },
    {
      id: 2,
      name: "Amazon",
      src: "/job/Amazon_(company)-Logo.wine.svg",
    },
    {
      id: 3,
      name: "Capgemini",
      src: "/job/Capgemini-Logo.wine.svg",
    },
    {
      id: 4,
      name: "Cognizant",
      src: "/job/Cognizant-Logo.wine.svg",
    },
    {
      id: 5,
      name: "Coinbase",
      src: "/job/Coinbase-Logo.wine.svg",
    },
    {
      id: 6,
      name: "Dropbox",
      src: "/job/Dropbox_(service)-Logo.wine.svg",
    },
    {
      id: 7,
      name: "Flipkart",
      src: "/job/Flipkart-Logo.wine.svg",
    },
    {
      id: 8,
      name: "GitLab",
      src: "/job/GitLab-Logo.wine.svg",
    },
    {
      id: 9,
      name: "Google",
      src: "/job/Google-Logo.wine.svg",
    },
    {
      id: 10,
      name: "HCL",
      src: "/job/HCL_Technologies-Logo.wine.svg",
    },
    {
      id: 11,
      name: "Reddit",
      src: "/job/Reddit-Logo.wine.svg",
    },
    {
      id: 12,
      name: "Bosch",
      src: "/job/Robert_Bosch_GmbH-Logo.wine.svg",
    },
    {
      id: 13,
      name: "Salesforce",
      src: "/job/Salesforce.com-Logo.wine.svg",
    },
  ];
  const companies2 = [
    {
      id: 1,
      name: "IBM",
      src: "/job/IBM-Logo.wine.svg",
    },
    {
      id: 2,
      name: "Intel",
      src: "/job/Intel-Logo.wine.svg",
    },
    {
      id: 3,
      name: "Meta",
      src: "/job/Meta_Platforms-Logo.wine.svg",
    },
    {
      id: 4,
      name: "Microsoft",
      src: "/job/Microsoft-Logo.wine.svg",
    },
    {
      id: 5,
      name: "Nvidia",
      src: "/job/Nvidia-Logo.wine.svg",
    },
    {
      id: 6,
      name: "OLA",
      src: "/job/Ola_Cabs-Logo.wine.svg",
    },
    {
      id: 7,
      name: "OpenAI",
      src: "/job/OpenAI-Logo.wine.svg",
    },
    {
      id: 8,
      name: "Oracle",
      src: "/job/Oracle_Corporation-Logo.wine.svg",
    },
    {
      id: 9,
      name: "Paytm",
      src: "/job/Paytm-Logo.wine.svg",
    },
    {
      id: 10,
      name: "Perplexity",
      src: "/job/Perplexity_AI-Logo.wine.svg",
    },
    {
      id: 11,
      name: "Samsung",
      src: "/job/Samsung_Electronics-Logo.wine.svg",
    },
    {
      id: 12,
      name: "Slack",
      src: "/job/Slack_Technologies-Logo.wine.svg",
    },
    {
      id: 13,
      name: "Tech Mahindra",
      src: "/job/Tech_Mahindra-Logo.wine.svg",
    },
  ];

  return (
    <div className="h-auto bg-white">
      <Head>
        <title>Careertronic- Jobs Platform</title>
        <meta
          name="description"
          content="Connect with global freelance opportunities"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx>{`
        @keyframes rotateWords {
          0% {
            content: "Freelance";
          }
          33% {
            content: "Freelance";
          }
          34% {
            content: "Job";
          }
          66% {
            content: "Job";
          }
          67% {
            content: "Career";
          }
          100% {
            content: "Career";
          }
        }
        .rotating-word::after {
          content: "Freelance";
          animation: rotateWords 9s infinite;
          display: inline-block;
          color: #dc2626; /* red-600 */
          font-weight: bold;
        }
      `}</style>

      <main className="container mx-auto px-4 md:px-10 py-8 md:py-16">
        {/* Changed flex-row-reverse to flex-row to swap sides */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Content (now first in DOM order) */}
          <div className="w-full md:w-1/2">
            <ScrollReveal 
              animation="fadeSlideRight" 
              duration={1000} 
              delay={200}
              easing="spring"
              disableBelow="sm"
              >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Your Next{" "}
                <ScrollReveal 
                  animation="scaleUp" 
                  duration={800} 
                  delay={800}
                  easing="bouncy"
                  disableBelow="sm"
                >
                  <span className="relative text-red-600 inline-block">
                    <span className="rotating-word"></span>
                  </span>
                </ScrollReveal>{" "}
                Opportunity
              </h1>
              </ScrollReveal>

              <ScrollReveal 
              animation="fadeSlideUp" 
              duration={900} 
              delay={500}
              easing="smooth"
              disableBelow="sm"
              >
              <p className="text-gray-600 mb-8 text-lg max-w-lg">
                Join thousands of professionals finding meaningful work through
                Careertronic. Our platform connects top talent with companies
                looking for specialized skills.
              </p>
              </ScrollReveal>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <ScrollReveal 
              animation="slightUp" 
              duration={800} 
              delay={600}
              easing="gentle"
              disableBelow="sm"
            >
              <div className="relative flex-grow">
                <div className="absolute left-0 top-3 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search jobs or skills..."
                  className="w-full bg-gray-100 text-gray-800 py-3 px-4 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:bg-white"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal 
              animation="slightLeft" 
              duration={800} 
              delay={750}
              easing="bouncy"
              disableBelow="sm"
            >
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition duration-300 shadow-md">
                <span>Get Started</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </ScrollReveal>
          </div>
          </div>

          {/* Right side - Images (now second in DOM order) */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 max-w-7xl mx-auto py-10">
  {/* Left side: Large portrait image */}
  <div className="w-[300px] h-[400px] rounded-[100px] overflow-hidden shadow-xl relative">
    <Image
      src="/job/JH1.jpg"
      alt="Job consultant"
      fill
      className="object-cover"
    />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center text-sm py-2">
      Job consultant
    </div>
  </div>

  {/* Right side: Two circular images + stat box */}
  <div className="flex flex-col items-center lg:items-start gap-6">
    {/* Circular images row (stacked horizontally or vertically) */}
    <div className="flex gap-4 lg:flex-row">
      <div className="w-28 h-48 rounded-full overflow-hidden relative shadow-md">
        <Image
          src="/job/JH3.jpg"
          alt="image1"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-28 h-48 rounded-full overflow-hidden relative shadow-md">
        <Image
          src="/job/JH2.jpg"
          alt="image2"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Stats box */}
    <div className="bg-zinc-800 text-white rounded-2xl p-6 w-[300px] sm:w-[340px] grid grid-cols-2 gap-4 text-center shadow-lg">
      {[
        { label: "Freelance available", value: "14K+" },
        { label: "client satisfaction", value: "4.9" },
        { label: "big companies", value: "98%" },
        { label: "jobs applied", value: "2.6K" },
      ].map((stat, index) => (
        <div key={index}>
          <p className="text-lg font-bold">{stat.value}</p>
          <p className="text-sm text-gray-300 capitalize">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </main>

      {/* Companies Section (unchanged) */}
      <div className="mb-12 px-4 md:px-10">
        <ScrollReveal animation="slideUp" duration={800} delay={100}>
          <p className="text-lg font-semibold text-black mb-6">
            <strong>Partnered with Fortune 500 companies across the globe</strong>
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeSlideUp" duration={1000} delay={200}>
          <div className="bg-red-50 py-4 px-4 rounded-lg">
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-marquee1">
                {companies1.map((company, index) => (
                  <div
                    key={`company1-${company.id}-${index}`}
                    className="mx-4 inline-flex items-center flex-shrink-0"
                  >
                    <div className="bg-white p-3 rounded shadow-sm border border-gray-100 h-12 flex items-center">
                      <Image
                        src={company.src}
                        alt={`${company.name} logo`}
                        height={40}
                        width={100}
                        className="max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeSlideUp" duration={1000} delay={300}>
        <div className="bg-blue-50 py-4 px-4 rounded-lg mt-4">
          <div className="overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee3">
              {companies2.map((company, index) => (
                <div
                  key={`company2-${company.id}-${index}`}
                  className="mx-4 inline-flex items-center flex-shrink-0"
                >
                  <div className="bg-white p-3 rounded shadow-sm border border-gray-100 h-12 flex items-center">
                    <Image
                      src={company.src}
                      alt={`${company.name} logo`}
                      height={40}
                      width={100}
                      className="max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>


        <ScrollReveal animation="slideDown" duration={900} delay={150}>
          <div className="bg-red-600 p-3 rounded-lg text-white font-medium mt-4 overflow-hidden">
            <div className="relative">
              <div className="whitespace-nowrap animate-marquee2">
                {Array(3)
                  .fill(
                    "🔥 Over 25,000 new jobs added this week! | 💼 Remote opportunities increased by 40% | 🚀 Tech sector hiring surge across all levels | ⚡ Sign up for premium access to exclusive listings"
                  )
                  .map((text, index) => (
                    <span
                      key={`announcement-${index}`}
                      className="mx-4 inline-block"
                    >
                      {text}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx global>{`
        @keyframes marquee1 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33%);
          }
        }
        @keyframes marquee3 {
          0% {
            transform: translateX(-33%);
          }
          100% {
            transform: translateX(0);
          }
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
        .animate-marquee3:hover,
        .animate-marquee2:hover,
        .animate-marquee1:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          @keyframes marquee1 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-300%);
            }
          }
          @keyframes marquee2 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-300%);
            }
          }
          @keyframes marquee3 {
            0% {
              transform: translateX(-300%);
            }
            100% {
              transform: translateX(0);
            }
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
          .animate-marquee3:hover,
          .animate-marquee2:hover,
          .animate-marquee1:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}