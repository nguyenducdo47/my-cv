import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skills = t('skills', { returnObjects: true });

  const renderSkills = (skillsObj) => {
    if (Array.isArray(skillsObj)) {
      return (
        <ul>
          {skillsObj.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      );
    }

    if (typeof skillsObj === 'object') {
      return (
        <ul>
          {Object.entries(skillsObj).map(([subcategory, subSkills], subIdx) => (
            <li key={subIdx}>
              <strong>
                {subcategory
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, char => char.toUpperCase())}
              </strong>
              {renderSkills(subSkills)}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <div className="text-capitalize">
      <h4 className="mt-4 text-primary">{skills.title}</h4>
      {Object.entries(skills).map(([category, skillsData], index) => (
        category !== 'title' && (
          <div key={index} className="mt-3">
            <strong>
            {category === 'other_programming_languages'
                  ? t('other_programming_languages')
                  : category
                      .replace(/_/g, ' ')
                      .replace(/\b\w/g, char => char.toUpperCase())}
            </strong>
            {renderSkills(skillsData)}
          </div>
        )
      ))}
    </div>
  );
};

export default Skills;
