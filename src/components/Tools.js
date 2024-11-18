import React from 'react';
import { useTranslation } from 'react-i18next';

const Tools = () => {
  const { t } = useTranslation(); 

  const tools = t('tools', { returnObjects: true }); 

  return (
    <div>
      <h4 className="mt-4 text-primary">{tools.title}</h4> 
      <ul>
        {Object.entries(tools).map(([category, toolsArray], index) => (
          category !== 'title' && (
            <li key={index} className="mt-2">
              <strong>
                {category
                  .replace(/_/g, ' ') 
                  .replace(/\b\w/g, char => char.toUpperCase())} 
              </strong>
              <ul>
                {toolsArray.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Tools;
