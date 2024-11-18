import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const WorkExperience = () => {
  const { t } = useTranslation(); // Khởi tạo hook t để lấy dữ liệu từ file locale

  const work_experience = t('work_experience', { returnObjects: true }); // Lấy dữ liệu từ file locale

  return (
    <section className="mb-4">
      <hr />
      <h2 className="mt-4 text-primary text-capitalize">{work_experience[0]?.title}</h2> {/* Hiển thị tiêu đề từ JSON */}
      {work_experience.slice(1).map((experience, index) => (  // Bỏ phần tử đầu tiên vì đó là title
        <div className="mb-3" key={index}>
          <h3 className='text-capitalize'>
            {experience.company} | ({experience.period})
          </h3>
          <p className='text-capitalize'>
            <i> {experience.position}</i> {/* Hiển thị thông tin vị trí */}
          </p>
          <ol>
            {experience.responsibilities.map((task, idx) => (
              <li key={idx}>
                <p>{task}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
