import { useState, useEffect } from 'react';

const THEME_STORAGE_KEY = 'theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === THEME_DARK || storedTheme === THEME_LIGHT) {
      return storedTheme;
    }
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    return THEME_LIGHT;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === THEME_DARK) {
      root.classList.add(THEME_DARK);
      root.classList.remove(THEME_LIGHT);
    } else {
      root.classList.add(THEME_LIGHT);
      root.classList.remove(THEME_DARK);
    }
    
    // Persist to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  return { theme, toggleTheme, isDark: theme === THEME_DARK };
}

