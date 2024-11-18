import React from 'react';
import { useTranslation } from 'react-i18next';

const Tools = () => {
  const { t } = useTranslation(); // Lấy dữ liệu từ i18n

  const tools = t('tools', { returnObjects: true }); // Lấy dữ liệu 'tools' từ locale

  return (
    <div>
      <h4 className="mt-4 text-primary">{tools.title}</h4> {/* Hiển thị tiêu đề */}
      <ul>
        {Object.entries(tools).map(([category, toolsArray], index) => (
          category !== 'title' && (
            <li key={index} className="mt-2">
              <strong>
                {category
                  .replace(/_/g, ' ') // Thay dấu gạch dưới bằng khoảng trắng
                  .replace(/\b\w/g, char => char.toUpperCase())} {/* Capitalize category */}
              </strong>
              <ul>
                {toolsArray.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Tools;
