import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'fernGreen' | 'magnolia' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get the theme from localStorage or default to 'fernGreen'
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme ?? 'fernGreen';
  });

  // Update document class and localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to change the theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Provide the theme and setTheme function to the context
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};