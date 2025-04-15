import { useEffect, useState } from 'react';

// Hook to toggle dark mode
export default function useDarkMode() {
  const getInitialTheme = () => {
    // If theme was saved in localStorage, use it
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }

    // Otherwise, check user's system preference
    // return window.matchMedia('(prefers-color-scheme: dark)').matches;
    return true; // Default to dark mode for demonstration purposes
  };

  // Initialize state with the saved theme
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Update the theme in localStorage and on the page
  // Runs whenever the state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
