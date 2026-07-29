import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const getInitialTheme = () => {
  const stored = localStorage.getItem('saagarika-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return 'light';
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('saagarika-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
