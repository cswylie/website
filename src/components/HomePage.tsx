import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ThemeButton from './ThemeButton'; // Import the ThemeButton component

const HomePage: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className= "min-h-screen flex justify-center items-center bg-[var(--bg-main)]">
      <div className="text-center">
        {/* Name container with hover group */}
        <div className="inline-block group relative text-5xl font-[var(--font-main)] text-[var(--text-main)] p-3">
          christian wylie

          {/* Show button on hover */}
          {!showLinks && (
            <button
              onClick={() => setShowLinks(true)}
              className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--accent-main)] text-[var(--text-secondary)] text-sm px-4 py-2 rounded shadow absolute left-1/2 -translate-x-1/2 top-full"
            >
            View Links
            </button>
          )}
        </div>
        {/* Show links when button is clicked */}
        {showLinks && (
          <div className="space-y-2 mt-5">
            {/* Fading in line */}
            <div className="h-px w-48 bg-[var(--accent-main)] mx-auto opacity-0 animate-fade-in"></div>

            {/* Fading in links with staggered delays */}
            <Link
              to="/resume"
              className="block text-2xl text-[var(--text-main)] hover:underline opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Resume
            </Link>
            <Link 
            to='/photography-artwork'
            className='block text-2xl text-[var(--text-main)] hover:underline opacity-0 animate-fade-in'
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              Photography & Artwork
            </Link>
            <a
              href="https://github.com/cswylie"
              target="_blank"
              className="block text-2xl text-[var(--text-main)] hover:underline opacity-0 animate-fade-in"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              GitHub
            </a>
          </div>
        )}
      </div>

      {/* Theme selector button */}
      <ThemeButton />
    </div>
  )
}

export default HomePage