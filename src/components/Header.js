import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook để sử dụng i18n
import Avatar from './Avatar';

const Header = () => {
  const { t } = useTranslation(); // Khởi tạo hook t để lấy dữ liệu từ file locale

  const { name, description } = t('profile', { returnObjects: true }); // Lấy dữ liệu profile từ file locale

  return (
    <header className="mt-4 mb-4 text-center">
      <Avatar />
      <h1 className="fw-bold">{name}</h1>
      <p className="text-muted">{description}</p>
    </header>
  );
};

export default Header;
