import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import vi from '../locales/vi.json';

i18n
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ từ trình duyệt
  .use(initReactI18next) // Tích hợp với React
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: 'en', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false, // React đã xử lý an toàn XSS
    },
  });

export default i18n;
