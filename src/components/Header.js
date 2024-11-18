import React from 'react';
import { useTranslation } from 'react-i18next'; 
import Avatar from './Avatar';

const Header = () => {
  const { t } = useTranslation(); 

  const { name, description } = t('profile', { returnObjects: true });

  return (
    <header className="mt-4 mb-4 text-center">
      <Avatar />
      <h1 className="fw-bold">{name}</h1>
      <p className="text-muted">{description}</p>
    </header>
  );
};

export default Header;
