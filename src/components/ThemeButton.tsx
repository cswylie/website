import React, { useState, useEffect } from 'react';

import { useTheme } from '../ThemeContext'; // Adjust the import path as necessary
import type {Theme} from '../ThemeContext'; // Import the Theme type


const HomePage: React.FC = () => {
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  // Pulls themes from the ThemeContext exported in ThemeContext.tsx
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {/* Theme selector button */}
      <div className="fixed bottom-4 left-4 bg-[var(--accent-main)] bg-opacity-90 text-[var(--text-secondary)] p-3 rounded shadow-lg z-50">
        <button
          onClick={() => setShowThemeSelector(!showThemeSelector)}
          className="text-sm font-Zain"
        >
          Theme
        </button>
        {showThemeSelector && (
          <div className="mt-2">
            <select
              value={theme}
              onChange={
                (e) => {setTheme(e.target.value as Theme);
                setShowThemeSelector(false); 
              }}
              className="text-sm text-[var(--text-secondary)] bg-inherit p-1 rounded border"
            >
              <option value="fernGreen">Fern Green</option>
              <option value="magnolia">Magnolia</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage