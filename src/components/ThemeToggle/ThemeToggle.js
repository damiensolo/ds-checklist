
import React, { useState, useEffect } from "react";
import { useTheme } from "../../utilities/themeContext";
import s from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Always render the same structure, but conditionally show icons
  const showSunIcon = isMounted && isDarkMode;
  const showMoonIcon = isMounted && !isDarkMode;

  return (
    <button
      className={s.toggleButton}
      onClick={toggleTheme}
      aria-label={`Switch to ${isMounted ? (isDarkMode ? 'light' : 'dark') : 'light'} mode`}
      title={`Switch to ${isMounted ? (isDarkMode ? 'light' : 'dark') : 'light'} mode`}
    >
      {/* Sun icon - shown in dark mode */}
      {showSunIcon && (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )}
      
      {/* Moon icon - shown in light mode */}
      {showMoonIcon && (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
