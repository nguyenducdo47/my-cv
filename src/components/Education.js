import React from 'react';
import data from '../data/user';
const Education = () => (
  <section className="mb-4">
    <hr />
    <h2 className="mt-4 text-primary">Education</h2>
    <p><strong>{data.education.university}</strong> ({data.education.years})</p>
    <p>{data.education.major}</p>
  </section>
);

export default Education;
