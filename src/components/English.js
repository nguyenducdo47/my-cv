import React from 'react';
import data from '../data/user';

const English = () => {
  const { certification, skills } = data.english; // Lấy dữ liệu từ JSON

  return (
    <div>
      <h4 className="mt-4 text-primary">English</h4>
      <ul>
        <li>Certification: {certification}</li>
        <li>{skills}</li>
      </ul>
    </div>
  );
};

export default English;
