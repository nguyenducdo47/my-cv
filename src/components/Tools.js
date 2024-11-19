import React from 'react';
import { useTranslation } from 'react-i18next';

const Tools = () => {
  const { t } = useTranslation();

  const tools = t('tools', { returnObjects: true });

  return (
    <div className='text-capitalize'>
      <h4 className="mt-4 text-primary">{tools.title}</h4>
      {Object.entries(tools).map(([category, toolsArray], index) => (
        category !== 'title' && (
          <ul key={index} className="mt-2">
            {toolsArray.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        )
      ))}
    </div>
  );
};

export default Tools;
