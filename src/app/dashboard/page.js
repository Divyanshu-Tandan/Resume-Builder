import JobPortalDashboard from '@/component/JobPortal/Dashboard/Admin'
import Jobdata from '@/component/JobPortal/Dashboard/Jobdata';
import JobForm from '@/component/JobPortal/Dashboard/Jobform';
import JobListings from '@/component/JobPortal/Dashboard/Joblisting';
import JobReviewPage from '@/component/JobPortal/Dashboard/Jobreview'
import Payment from '@/component/JobPortal/Dashboard/Payment';
import User from '@/component/JobPortal/Dashboard/User';
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <JobPortalDashboard />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <User />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <JobListings />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <JobReviewPage />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <JobForm />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div><Jobdata/></div>
<div><Payment/></div>
      </div>
  );
}

export default page