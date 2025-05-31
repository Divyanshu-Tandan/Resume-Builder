import React from 'react'
import JobNavBar from '@/component/Jobportal/JobNavbar'
import JobHero from '@/component/Jobportal/JobHero'
import DreamJob from '@/component/Jobportal/DreamJob'
import GoodCompany from '@/component/Jobportal/GoodCompany'
import Carousel from '@/component/Jobportal/Crousel'
import Footer from '@/component/Footer'
import JobPortalBottom from '@/component/Jobportal/JobPortalBottom'
import JobFAQSection from '@/component/Jobportal/JobFyq'

const page = () => {
  return (
    <div className='h-auto w-full overflow-x-hidden'>
    <div><JobNavBar/></div>
    <div><JobHero/></div>
    <div><DreamJob/></div>
    <div><GoodCompany/></div>
    <div><JobPortalBottom/></div>
    <div><Carousel/></div>
    <div><JobFAQSection/></div>
    <div><Footer/></div>
    </div>
  )
}

export default page
