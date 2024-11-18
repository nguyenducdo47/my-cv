import React from 'react';
import Avatar from './Avatar';
import data from '../data/user';

const Header = () => {
  const { name, title } = data.profile; // Lấy dữ liệu từ JSON

  return (
    <header className="mb-4 text-center">
      <Avatar />
      <h1 className="fw-bold">{name}</h1>
      <p className="text-muted">{title}</p>
    </header>
  );
};

export default Header;
