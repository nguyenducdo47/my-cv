import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skills = t('skills', { returnObjects: true });

  return (
    <div>
      <h4 className="mt-4 text-primary">{skills.title}</h4>
      <ul>
        {Object.entries(skills).map(([category, skillsArray], index) => (
          category !== 'title' && (
            <li key={index} className="mt-2">
              <strong>
                {category === 'other_programming_languages'
                  ? t('other_programming_languages')
                  : category
                      .replace(/_/g, ' ')
                      .replace(/\b\w/g, char => char.toUpperCase())}
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
