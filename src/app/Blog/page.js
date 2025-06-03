import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import ScrollReveal from '@/component/ScrollReveal';
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <div className='h-auto w-full p-5'>
        {/* Hero Section with Staggered Animation */}
        <ScrollReveal 
            animation="fadeSlideUp" 
            duration={1000} 
            easing="spring"
            className="group flex flex-col md:flex-row-reverse items-center justify-between bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-7xl mx-auto mt-10 hover:scale-[1.01] transition-scale duration-200 relative overflow-hidden"
        >
            {/* Image with slide from right */}
            <ScrollReveal 
                animation="slideLeft" 
                duration={800} 
                delay={300}
                easing="gentle"
                className="w-full md:w-1/2"
            >
                <img src="/BlogResume.png" alt="Writing Resume Illustration" className="rounded-lg w-full h-auto" />
            </ScrollReveal>

            <div className='absolute w-0 h-1 bg-red-500 top-0 left-0 rounded-b-2xl group-hover:w-1/2 transition-width duration-500'/>
            <div className='absolute w-0 h-1 bg-red-500 bottom-0 right-0 rounded-t-2xl group-hover:w-1/2 transition-width duration-500'/>

            {/* Text content with slide from left */}
            <ScrollReveal 
                animation="slideRight" 
                duration={800} 
                delay={500}
                easing="gentle"
                className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10"
            >
                <ScrollReveal animation="slightUp" delay={700} duration={600}>
                    <p className="text-sm text-red-600/60 font-semibold mb-2">FEATURED GUIDE</p>
                </ScrollReveal>
                
                <ScrollReveal animation="slightUp" delay={800} duration={600}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                        Master Your Resume: <br className="hidden md:block"/> Tips to Stand Out in 2025
                    </h2>
                </ScrollReveal>
                
                <ScrollReveal animation="fadeIn" delay={900} duration={600}>
                    <p className="text-gray-700 text-base mt-4">
                        Discover modern resume strategies that highlight your achievements and
                        impress recruiters in today's competitive job market. Learn how to tailor your resume for every opportunity.
                    </p>
                </ScrollReveal>
                
                <ScrollReveal animation="slightLeft" delay={1000} duration={500}>
                    <a href="#" className="text-red-700 font-semibold mt-4 inline-block hover:underline">
                        Explore the Guide →
                    </a>
                </ScrollReveal>
            </ScrollReveal>
        </ScrollReveal>

        <div className="bg-white py-12 sm:px-6 max-w-7xl mx-auto">
            {/* Section Title */}
            <ScrollReveal 
                animation="fadeSlideDown" 
                duration={800} 
                easing="bouncy"
            >
                <h2 className="text-3xl font-bold text-black mb-10 text-center">Latest Articles</h2>
            </ScrollReveal>
            
            {/* Articles Grid with Staggered Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* First Row - Slide from different directions */}
                <ScrollReveal 
                    animation="slideBottomLeft" 
                    duration={700} 
                    delay={200}
                    easing="spring"
                    className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                >
                    <p className="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">How AI Can Improve Your Resume</h3>
                    <p className="text-sm text-gray-700 mb-3">Published: 4/23/2025 • Updated: 5/8/2025</p>
                    <p className="text-sm text-gray-600">7 min read</p>
                </ScrollReveal>

                <ScrollReveal 
                    animation="fadeSlideUp" 
                    duration={700} 
                    delay={300}
                    easing="spring"
                    className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                >
                    <p className="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">Using ChatGPT for Resume Writing</h3>
                    <p className="text-sm text-gray-700 mb-3">Published: 4/18/2025 • Updated: 5/8/2025</p>
                    <p className="text-sm text-gray-600">6 min read</p>
                </ScrollReveal>

                <ScrollReveal 
                    animation="slideBottomRight" 
                    duration={700} 
                    delay={400}
                    easing="spring"
                    className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                >
                    <p className="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">Top AI Tools for Job Seekers</h3>
                    <p className="text-sm text-gray-700 mb-3">Published: 3/24/2025 • Updated: 5/13/2025</p>
                    <p className="text-sm text-gray-600">8 min read</p>
                </ScrollReveal>

                {/* Second Row - Spin animations */}
                <ScrollReveal 
                    animation="spinFromLeft" 
                    duration={800} 
                    delay={100}
                    easing="gentle"
                    className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                >
                    <p className="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">How AI Can Improve Your Resume</h3>
                    <p className="text-sm text-gray-700 mb-3">Published: 4/23/2025 • Updated: 5/8/2025</p>
                    <p className="text-sm text-gray-600">7 min read</p>
                </ScrollReveal>

                <ScrollReveal 
                    animation="scaleUp" 
                    duration={800} 
                    delay={200}
                    easing="bouncy"
                    className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                >
                    <p className="text-xs text-red-600/60 font-semibold mb-2">RESUME HELP</p>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">Using ChatGPT for Resume Writing</h3>
                    <p className="text-sm text-gray-700 mb-3">Published: 4/18/2025 • Updated: 5/8/2025</p>
                    <p className="text-sm text-gray-600">6 min read</p>
                </ScrollReveal>

                <ScrollReveal 
                    animation="spinFromRight" 
                    duration={800} 
                    delay={300}
                    easing="gentle"
                    className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                >
                    <p className="text-xs text-red-600 font-semibold mb-2">RESUME ADVICE</p>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">6 Strategies to Make Your Resume AI-Friendly</h3>
                    <p className="text-sm text-gray-700 mb-3">Published: 3/15/2025 • Updated: 5/5/2025</p>
                    <p className="text-sm text-gray-600">9 min read</p>
                </ScrollReveal>

                {/* Remaining cards with staggered simple animations */}
                {[
                    { title: "What Recruiters Look For in an AI-Scanned Resume", category: "RESUME ADVICE", published: "3/5/2025", updated: "4/20/2025", readTime: "10 min read" },
                    { title: "Best Resume Formats for AI Parsing", category: "RESUME ADVICE", published: "2/28/2025", updated: "4/12/2025", readTime: "5 min read" },
                    { title: "Avoid These Mistakes When Using AI to Write Resumes", category: "RESUME ADVICE", published: "2/10/2025", updated: "3/25/2025", readTime: "6 min read" },
                    { title: "Can AI Really Replace a Resume Writer?", category: "RESUME ADVICE", published: "1/20/2025", updated: "3/5/2025", readTime: "7 min read" },
                    { title: "AI vs Human: Who Writes the Better Resume?", category: "RESUME ADVICE", published: "1/5/2025", updated: "2/10/2025", readTime: "8 min read" },
                    { title: "How to Write a Cover Letter That Gets Noticed", category: "COVER LETTER HELP", published: "4/10/2025", updated: "5/12/2025", readTime: "6 min read" },
                    { title: "ChatGPT Cover Letter Tips for Tech Jobs", category: "COVER LETTER HELP", published: "3/28/2025", updated: "5/1/2025", readTime: "7 min read" },
                    { title: "Mistakes to Avoid in Your AI-Written Cover Letter", category: "COVER LETTER HELP", published: "3/10/2025", updated: "4/22/2025", readTime: "8 min read" },
                    { title: "Cover Letter vs Resume: Key Differences", category: "COVER LETTER HELP", published: "2/20/2025", updated: "4/2/2025", readTime: "5 min read" }
                ].map((article, index) => (
                    <ScrollReveal 
                        key={index}
                        animation={index % 3 === 0 ? "slightLeft" : index % 3 === 1 ? "fadeIn" : "slightRight"}
                        duration={600} 
                        delay={100 + (index * 50)}
                        stagger={50}
                        index={index}
                        disableBelow="sm"
                        className="group border-t-4 border-red-600 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition hover:scale-[1.01] cursor-pointer"
                    >
                        <p className="text-xs text-red-600 font-semibold mb-2">{article.category}</p>
                        <h3 className="text-lg font-bold text-black group-hover:text-red-700 mb-2">{article.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">Published: {article.published} • Updated: {article.updated}</p>
                        <p className="text-sm text-gray-600">{article.readTime}</p>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>

    <Footer/>
</div>
  )
}

export default page;