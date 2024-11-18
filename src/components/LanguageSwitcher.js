import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DarkModeToggle from './DarkModeToggle';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Lấy ngôn ngữ từ localStorage hoặc mặc định là tiếng Anh
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    // Lưu ngôn ngữ vào localStorage
    localStorage.setItem('language', selectedLanguage);
    // Cập nhật ngôn ngữ trên trang
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="container2">
      <div className="tabs">
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

        <div className="dark-mode-toggle">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
