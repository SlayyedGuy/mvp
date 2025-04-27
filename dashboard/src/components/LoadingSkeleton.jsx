import React from 'react'

function LoadingSkeleton({ count = 5 }) {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, idx) => (
        <div key={idx} className="h-6 bg-gray-700 rounded animate-pulse"></div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
