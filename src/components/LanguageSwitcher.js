import React from 'react';
import { useTranslation } from 'react-i18next';  // Import useTranslation để lấy dữ liệu ngôn ngữ
import '../App.css';
import DarkModeToggle from './DarkModeToggle';

const Tabs = () => {
  const { t, i18n } = useTranslation();

  // Hàm thay đổi ngôn ngữ
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    
    <div className="container2">
  <div className="tabs">
    {/* Phần ngôn ngữ (Input radio) */}
    <div className="language-selector">
      <input
        type="radio"
        id="radio-en"
        name="language"
        value="en"
        onChange={handleLanguageChange}
        defaultChecked
      />
      <label className="tab" htmlFor="radio-en">{t('Eng')}</label>

      <input
        type="radio"
        id="radio-vi"
        name="language"
        value="vi"
        onChange={handleLanguageChange}
      />
      <label className="tab" htmlFor="radio-vi">{t('VN')}</label>
    </div>

    {/* Phần DarkMode (Bên phải) */}
    <div className="dark-mode-toggle">
      <DarkModeToggle />
    </div>
  </div>
</div>


  );
};

export default Tabs;
