import React, { useState, useEffect } from 'react';
import '../App.css'; // Đảm bảo rằng bạn có các lớp CSS cho dark mode

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load chế độ hiện tại từ localStorage (nếu có)
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  // Thay đổi chế độ sáng/tối
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Lưu trạng thái vào localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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
