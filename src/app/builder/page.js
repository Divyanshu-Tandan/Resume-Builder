import React, { Suspense } from 'react';
import Builder from '@/component/Builder';

export default function Page() {
  return (
    <Suspense fallback={<h1>Loading builder...</h1>}>
      <Builder />
    </Suspense>
  );
}