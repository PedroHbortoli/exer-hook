import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>{`Current theme is ${theme}`}</h1>
      <ThemeToggle />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
