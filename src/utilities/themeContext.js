import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Always start with dark mode for SSR consistency
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side and check localStorage
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const shouldBeDark = savedTheme === 'dark';
      setIsDarkMode(shouldBeDark);
    }
  }, []);

  useEffect(() => {
    // Only apply theme changes when on client side
    if (isClient) {
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode, isClient]);

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