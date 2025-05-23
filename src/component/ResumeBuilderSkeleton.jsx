import React from 'react';

export default function ResumeBuilderSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 animate-pulse">
      {/* Sidebar (Form) */}
      <div className="w-full md:w-1/2 space-y-4">
        {/* Tabs */}
        <div className="flex space-x-4">
          {Array(6).fill(0).map((_, idx) => (
            <div key={idx} className="h-6 w-20 bg-gray-300 rounded-md" />
          ))}
        </div>

        {/* Input skeletons */}
        {Array(8).fill(0).map((_, idx) => (
          <div key={idx} className="h-10 bg-gray-300 rounded-md" />
        ))}

        {/* Upload + Summary */}
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gray-300" />
          <div className="flex-1 h-10 bg-gray-300 rounded-md" />
        </div>
        <div className="h-24 bg-gray-300 rounded-md" />
      </div>

      {/* Preview */}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-md border p-4 shadow-md h-full">
          <div className="h-10 w-48 bg-gray-300 rounded-md mb-4" />
          <div className="h-6 w-32 bg-gray-200 rounded-md mb-2" />
          <div className="h-80 bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  );
}
