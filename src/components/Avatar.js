import React from 'react';
import data from '../data/user';
const Avatar = () => (
  
  <img
    className="mb-3 rounded-circle border-circle"
    src={data.profile.avatar}
    width="150"
    height="150"
    alt={data.profile.name}
  />
);

export default Avatar;
