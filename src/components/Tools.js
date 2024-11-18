import React from 'react';
import data from '../data/user';

const Tools = () => {
  const tools = data.tools; // Lấy danh sách tools từ file JSON

  return (
    <div>
      <h4 className="mt-4 text-primary">Tools</h4>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
