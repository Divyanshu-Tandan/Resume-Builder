import React, { Suspense } from 'react';
import Builder from '@/component/Builder';
import ResumeBuilderSkeleton from '@/component/ResumeBuilderSkeleton';

export default function Page() {
  return (
    <Suspense fallback={<ResumeBuilderSkeleton/>}>
      <Builder />
    </Suspense>
  );
}