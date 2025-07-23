import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Always start with dark mode for SSR consistency

  useEffect(() => {
    // On first mount, check localStorage and update state if needed
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const shouldBeDark = savedTheme === 'dark';
      if (shouldBeDark !== isDarkMode) {
        setIsDarkMode(shouldBeDark);
        return; // Exit early, the next useEffect will handle the DOM update
      }
    }
    
    // Apply theme to document and save to localStorage
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
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