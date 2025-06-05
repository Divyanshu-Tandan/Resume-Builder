import ResumeBuilderHero from '@/component/Cover/Hero'
import CoverReviewsSection from '@/component/Cover/Review'
import CoverLetterBuilder from '@/component/Cover/steps'
import CoverLetterCarousel from '@/component/Cover/Templateexample'
import Footer from '@/component/Footer'
import React from 'react'

const page = () => {
  return (
    <div className='h-auto w-full overflow-x-hidden mt-16'>
      <div>
        <ResumeBuilderHero />
      </div>
      <div>
        <CoverLetterCarousel />
      </div>
      <div>
        <CoverLetterBuilder />
      </div>

      <div>
        <CoverReviewsSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;