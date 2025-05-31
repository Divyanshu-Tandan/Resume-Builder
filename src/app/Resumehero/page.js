"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/Navbar";
import FAQSection from "@/component/Fyq";
import Footer from "@/component/Footer";
import ResumeBuilderSteps from "@/component/Working";
import ReviewSection from "@/component/Review";
import ResumeHero from "@/component/hero";
import ScrollReveal from "@/component/ScrollReveal";

export default function HomePage() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showAllTemplates, setShowAllTemplates] = useState(false);

  const templates = [
    {
      id: "professional",
      name: "Professional",
      description: "Traditional format ideal for corporate roles",
      image: "/templates-previews/professional.png",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design for creative industries",
      image: "/templates-previews/creative.png",
    },
    {
      id: "elegant",
      name: "Elegant",
      description: "Sophisticated design with serif fonts for executive roles",
      image: "/templates-previews/elegant.png",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Timeless design with a traditional layout",
      image: "/templates-previews/classic.png",
    },
    {
      id: "twocolumn",
      name: "TwoColumn",
      description: "Best design for all industries",
      image: "/templates-previews/Two Column.png",
    },
    {
      id: "best",
      name: "Best",
      description: "Best design for all industries",
      image: "/templates-previews/Best.png",
    },
    {
      id: "traditional",
      name: "Traditional",
      description: "Best design for all industries",
      image: "/templates-previews/Traditional.png",
    },
    {
      id: "formal",
      name: "Formal",
      description: "Best design for all industries",
      image: "/templates-previews/Formal.png",
    },
    {
      id: "toronto",
      name: "Toronto",
      description: "Best design for all industries",
      image: "/templates-previews/Toronto.png",
    },
    {
      id: "functional",
      name: "Functional",
      description: "Best design for all industries",
      image: "/templates-previews/Executive.png",
    },
    {
      id: "simple",
      name: "Simple",
      description: "Best design for all industries",
      image: "/templates-previews/Simple.png",
    },
    {
      id: "stylish",
      name: "Stylish",
      description: "Best design for all industries",
      image: "/templates-previews/stylish.png",
    },
    {
      id: "iconic",
      name: "Iconic",
      description: "Best design for all industries",
      image: "/templates-previews/Iconic.png",
    },
    {
      id: "revelent",
      name: "Revelent",
      description: "Best design for all industries",
      image: "/templates-previews/revelent.png",
    },
    {
      id: "composit",
      name: "Composit",
      description: "Best design for all industries",
      image: "/templates-previews/Composit.png",
    },
    {
      id: "chronological",
      name: "Chronological",
      description: "Best design for all industries",
      image: "/templates-previews/Chronological.png",
    },
    {
      id: "federal",
      name: "Federal",
      description: "Best design for all industries",
      image: "/templates-previews/federal.png",
    },
    {
      id: "pheonix",
      name: "Pheonix",
      description: "Best design for all industries",
      image: "/templates-previews/pheonix.png",
    },
    {
      id: "cool",
      name: "Cool",
      description: "Best design for all industries",
      image: "/templates-previews/cool.png",
    },
    {
      id: "gullible",
      name: "Gullible",
      description: "Best design for all industries",
      image: "/templates-previews/Gullible.png",
    },
    {
      id: "deligant",
      name: "Deligant",
      description: "Best design for all industries",
      image: "/templates-previews/Deligant.png",
    },
    {
      id: "executive",
      name: "Executive",
      description: "Best design for all industries",
      image: "/templates-previews/Executive.png",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Best design for all industries",
      image: "/templates-previews/premium.png",
    },
    {
      id: "everest",
      name: "Everest",
      description: "Best design for all industries",
      image: "/templates-previews/everest.png",
    },
    {
      id: "chronic",
      name: "Chronic",
      description: "Best design for all industries",
      image: "/templates-previews/chronic.png",
    },
    {
      id: "chronicles",
      name: "Chronicles",
      description: "Best design for all industries",
      image: "/templates-previews/Chronicles.png",
    },
    {
      id: "tokyo",
      name: "Tokyo",
      description: "Best design for all industries",
      image: "/templates-previews/tokyo.png",
    },
    {
      id: "stockholm",
      name: "Stockholm",
      description: "Best design for all industries",
      image: "/templates-previews/stockholm.png",
    },
    {
      id: "milano",
      name: "Milano",
      description: "Best design for all industries",
      image: "/templates-previews/milano.png",
    },
    {
      id: "vienna",
      name: "Vienna",
      description: "Best design for all industries",
      image: "/templates-previews/vienna.png",
    },
    {
      id: "kyoto",
      name: "Kyoto",
      description: "Best design for all industries",
      image: "/templates-previews/kyoto.png",
    },
    {
      id: "berlin",
      name: "Berlin",
      description: "Best design for all industries",
      image: "/templates-previews/berlin.png",
    },
    {
      id: "fancy",
      name: "Fancy",
      description: "Best design for all industries",
      image: "/templates-previews/Fancy.png",
    },
    {
      id: "mountfuji",
      name: "Mount Fuji",
      description: "Best design for all industries",
      image: "/templates-previews/mountfuji.png",
    },
    {
      id: "asthetic",
      name: "Asthetic",
      description: "Best design for all industries",
      image: "/templates-previews/asthetic.png",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Best design for all industries",
      image: "/templates-previews/minimal.png",
    },
    {
      id: "phoen",
      name: "Phoen",
      description: "Best design for all industries",
      image: "/templates-previews/phoen.png",
    },
    {
      id: "philips",
      name: "Philips",
      description: "Best design for all industries",
      image: "/templates-previews/philips.png",
    },
    {
      id: "crisp",
      name: "Crisp",
      description: "Best design for all industries",
      image: "/templates-previews/crisp.png",
    },
    {
      id: "clean",
      name: "Clean",
      description: "Best design for all industries",
      image: "/templates-previews/clean.png",
    },
    {
      id: "parallel",
      name: "Parallel",
      description: "Best design for all industries",
      image: "/templates-previews/parallel.png",
    },
    {
      id: "zinc",
      name: "Zinc",
      description: "Best design for all industries",
      image: "/templates-previews/zinc.png",
    },
    {
      id: "nexus",
      name: "Nexus",
      description: "Best design for all industries",
      image: "/templates-previews/nexus.png",
    },
    {
      id: "star",
      name: "Star",
      description: "Best design for all industries",
      image: "/templates-previews/star.png",
    },
    {
      id: "nova",
      name: "Nova",
      description: "Best design for all industries",
      image: "/templates-previews/nova.png",
    },
    {
      id: "santino",
      name: "Santino",
      description: "Best design for all industries",
      image: "/templates-previews/santino.png",
    },

    {
      id: "tempo",
      name: "Tempo",
      description: "Best design for all industries",
      image: "/templates-previews/tempo.png",
    },
    {
      id: "sample",
      name: "Sample",
      description: "Best design for all industries",
      image: "/templates-previews/sample.png",
    },
  ];

  // Display only first 20 templates initially
  const displayedTemplates = showAllTemplates
    ? templates
    : templates.slice(0, 20);

  const startBuilding = () => {
    if (selectedTemplate) {
      router.push(`/builder?template=${selectedTemplate}`);
    } else {
      alert("Please select a template to get started");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 overflow-x-hidden">
      <Navbar />

        <ResumeHero />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <ScrollReveal animation="fadeSlideUp" duration={1000} delay={300}>
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
            Create a professional resume in minutes
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeIn" duration={800} delay={600}>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-700">
            Choose from our professionally designed templates and get
            personalized AI suggestions to make your resume stand out.
          </p>
        </ScrollReveal>
      </section>

      {/* Template Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ScrollReveal animation="slightLeft" duration={600} delay={200}>
          <h2 className="text-2xl font-bold text-black mb-8">
            Choose a Template
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTemplates.map((template, index) => (
            <ScrollReveal
              key={template.id}
              animation={index % 2 === 0 ? "fadeSlideLeft" : "fadeSlideRight"}
              duration={600}
              delay={100}
              stagger={80}
              index={index}
              easing="spring"
              disableBelow="sm"
            >
              <div
                onClick={() => setSelectedTemplate(template.id)}
                className={`
                  border rounded-lg overflow-hidden cursor-pointer transition-all duration-200
                  ${
                    selectedTemplate === template.id
                      ? "ring-4 ring-red-500 border-transparent transform scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }
                `}
              >
                <div className="relative h-96 bg-gray-100 ">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="p-4 text-black">
                  <h3 className="font-medium text-lg">{template.name}</h3>
                  <p className="text-black text-sm mt-1">
                    {template.description}
                  </p>

                  {selectedTemplate === template.id && (
                    <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Selected
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fadeSlideUp" duration={800} delay={400}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            {/* Show All Templates Button */}
            {!showAllTemplates && templates.length > 20 && (
              <button
                onClick={() => setShowAllTemplates(true)}
                className="inline-flex items-center px-6 py-3 border text-base font-medium rounded-md shadow-sm text-red-600 bg-white hover:bg-gray-200 border-red-600 transition-all duration-200 hover:scale-105"
              >
                Show All Templates
              </button>
            )}

            <button
              onClick={startBuilding}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-all duration-200 hover:scale-105"
            >
              Continue with Selected Template
            </button>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal animation="slideUp" duration={800} delay={200}>
        <ResumeBuilderSteps />
      </ScrollReveal>

      <ScrollReveal animation="fadeSlideLeft" duration={800} delay={300}>
        <ReviewSection />
      </ScrollReveal>

      <ScrollReveal animation="fadeSlideRight" duration={800} delay={200}>
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal animation="fadeIn" duration={600} delay={100}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
