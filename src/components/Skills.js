import React from 'react';
import data from '../data/user';

const Skills = () => {
  const { skills } = data;

  return (
    <div>
      <h4 className="mt-4 text-primary">Skills</h4>
      <ul>
        {Object.entries(skills).map(([category, skillsArray], index) => (
          <li key={index} className="mt-2">
            <strong>{category.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</strong>
            <ul>
              {skillsArray.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
