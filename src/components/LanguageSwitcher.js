import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DarkModeToggle from './DarkModeToggle';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en'); 

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage); 
  }, [i18n]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    localStorage.setItem('language', selectedLanguage);
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="container2 sidebar">
      <div className="tabs">
        <div className="language-selector">
          <input
            type="radio"
            id="radio-en"
            name="language"
            value="en"
            onChange={handleLanguageChange}
            checked={language === 'en'} 
          />
          <label className="tab" htmlFor="radio-en">{t('Eng')}</label>

          <input
            type="radio"
            id="radio-vi"
            name="language"
            value="vi"
            onChange={handleLanguageChange}
            checked={language === 'vi'}
          />
          <label className="tab" htmlFor="radio-vi">{t('VN')}</label>
        </div>

        <div className="dark-mode-toggle">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
