import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import Header from './components/Header';
import DarkModeToggle from './components/DarkModeToggle';
import Loading from './components/Loading';
import Seo from './components/Seo';  // Import Loading Component
import './App.css'; 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          <DarkModeToggle />
          <Header />
          <Resume />
        </>
      )}
    </div>
  );
};

export default App;
