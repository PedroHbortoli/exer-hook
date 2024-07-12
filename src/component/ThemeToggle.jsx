import React, { useContext } from 'react';
import { ThemeContext } from '../component/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px'
    }}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
