import React from 'react';
import { useTranslation } from 'react-i18next';

const WorkExperience = () => {
  const { t } = useTranslation(); 

  const work_experience = t('work_experience', { returnObjects: true }); 

  return (
    <section className="mb-4">
      <hr />
      <h2 className="mt-4 text-primary text-capitalize">{work_experience[0]?.title}</h2>
      {work_experience.slice(1).map((experience, index) => (  
        <div className="mb-3" key={index}>
          <h3 className='text-capitalize'>
            {experience.company} | ({experience.period})
          </h3>
          <p className='text-capitalize'>
            <i> {experience.position}</i>
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
