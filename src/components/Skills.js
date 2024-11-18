import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation(); // Lấy dữ liệu từ i18n

  const skills = t('skills', { returnObjects: true }); // Lấy dữ liệu 'skills' từ locale

  return (
    <div>
      <h4 className="mt-4 text-primary">{skills.title}</h4>
      <ul>
        {Object.entries(skills).map(([category, skillsArray], index) => (
          // Kiểm tra không phải 'title' để tránh hiển thị phần title
          category !== 'title' && (
            <li key={index} className="mt-2">
              <strong>
                {category
                  .replace(/_/g, ' ') // Thay dấu gạch dưới bằng khoảng trắng
                  .replace(/\b\w/g, char => char.toUpperCase())} {/* Capitalize category */}
              </strong>
              <ul>
                {skillsArray.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Skills;
