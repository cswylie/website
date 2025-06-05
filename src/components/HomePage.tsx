import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-center">
      {/* Name container with hover group */}
      <div className="inline-block group relative text-5xl font-Zain text-magnolia p-3">
          christian wylie

          {/* Show button on hover */}
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-magnolia text-black text-sm px-4 py-2 rounded shadow absolute left-1/2 -translate-x-1/2 top-full"
          >
          View Links
          </button>
      </div>
      {/* Show links when button is clicked */}
      {showLinks && (
        <div className="mt-8 space-y-2">
          <a href="/resume.pdf" className="block text-lg text-magnolia hover:underline">
            Resume
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="block text-lg text-magnolia hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/your-username" target="_blank" className="block text-lg text-magnolia hover:underline">
            GitHub
          </a>
        </div>
      )}
    </div>
  )
}

export default HomePage