import React from 'react';
import { useTranslation } from 'react-i18next'; 

const Education = () => {
  const { t } = useTranslation();

  const education = t('education', { returnObjects: true });

  return (
    <section className="mb-4">
      <hr />
      <h2 className="mt-4 text-primary">{education.title}</h2>
      <p><strong>{education.university}</strong> ({education.years})</p>
      <p>{education.major}</p>
    </section>
  );
};

export default Education;
