import React from 'react';
import data from '../data/user';

const WorkExperience = () => {
  const { work_experience } = data; // Lấy dữ liệu từ JSON

  return (
    <section className="mb-4">
      <hr />
      <h2 className="mt-4 text-primary">Work Experience</h2>
      {work_experience.map((experience, index) => (
        <div className="mb-3" key={index}>
          <h3>
            {experience.company} | ({experience.period})
          </h3>
          <p>
            <i>Position: {experience.position}</i>
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
