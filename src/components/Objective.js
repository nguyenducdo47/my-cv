import React from 'react';
import { useTranslation } from 'react-i18next'; 

const Objective = () => {
  const { t } = useTranslation(); 

  return (
    <section className="mb-4">
      <hr />
      <h2 className="text-primary">{t('objective.title')}</h2>
      <ol>
        <li>
          <p>{t('objective.short_term')}</p>
        </li>
        <li>
          <p>{t('objective.long_term')}</p>
        </li>
      </ol>
    </section>
  );
};

export default Objective;
