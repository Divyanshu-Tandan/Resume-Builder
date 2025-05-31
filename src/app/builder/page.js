import React from 'react'
import { Suspense } from 'react';
import Builder from '@/component/Builder';

const page = () => {
  return (
    <Suspense fallback={<div>Loading builder...</div>}>
      <Builder />
    </Suspense>
  )
}

export default page
