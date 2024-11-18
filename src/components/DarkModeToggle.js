import React, { useState, useEffect } from 'react';
import '../App.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]); 
  
  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <label className="ui-switch">
      <input
        type="checkbox"
        id="toggleDarkMode"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
