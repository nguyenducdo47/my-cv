import React from 'react';
import data from '../data/user';

const Objective = () => (
  <section className="mb-4">
    <hr />
    <h2 className="text-primary">Objective</h2>
    <ol>
      <li>
        <p>{data.objective.short_term}</p>
      </li>
      <li>
        <p>{data.objective.long_term}</p>
      </li>
    </ol>
  </section>
);

export default Objective;
