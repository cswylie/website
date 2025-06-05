import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-center">
      {/* Name container with hover group */}
      <div className="inline-block group relative text-5xl font-Zain text-magnolia p-3">
        christian wylie

        {/* Show button on hover */}
        {!showLinks && (
          <button
            onClick={() => setShowLinks(true)}
            className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-magnolia text-black text-sm px-4 py-2 rounded shadow absolute left-1/2 -translate-x-1/2 top-full"
          >
          View Links
          </button>
        )}
      </div>
      {/* Show links when button is clicked */}
      {showLinks && (
        <div className="space-y-2 mt-5">
          {/* Fading in line */}
          <div className="h-px w-48 bg-magnolia mx-auto opacity-0 animate-fade-in"></div>

          {/* Fading in links with staggered delays */}
          <a
            href="/resume.pdf"
            className="block text-2xl text-magnolia hover:underline opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/christian-wylie-593249265/"
            target="_blank"
            className="block text-2xl text-magnolia hover:underline opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cswylie"
            target="_blank"
            className="block text-2xl text-magnolia hover:underline opacity-0 animate-fade-in"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  )
}

export default HomePage