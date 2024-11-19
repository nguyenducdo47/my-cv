import React from 'react';
import { useTranslation } from 'react-i18next'; 

const English = () => {
  const { t } = useTranslation();

  const english = t('english', { returnObjects: true });

  return (
    <div className='text-capitalize'>
      <h4 className="mt-4 text-primary">{english.title}</h4>
      <ul>
        <li>{english.certification}</li>
        <li>{english.skills}</li>
      </ul>
    </div>
  );
};

export default English;
