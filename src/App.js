import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Resume from './components/Resume';
import Header from './components/Header';
import Loading from './components/Loading';
import Seo from './components/Seo'; 
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css'; 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Giả lập tải dữ liệu hoặc delay
    setTimeout(() => {
      setIsLoading(false); // Sau khi tải xong, ẩn loading
    }, 1000); // 3 giây
  }, []);

  return (
    <div className="container mt-5 full-width">
      <Seo/>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <LanguageSwitcher />
          <Header />
          <Resume />
        </>
      )}
    </div>
  );
};

export default App;
