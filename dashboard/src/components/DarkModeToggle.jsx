import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button 
      className="px-4 py-2 bg-gray-800 text-white rounded-xl dark:bg-gray-300 dark:text-black transition"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '☀️ Light Mode' : '🌑 Dark Mode'}
    </button>
  );
}
