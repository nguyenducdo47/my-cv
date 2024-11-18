import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import '../App.css';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [modalText, setModalText] = useState('');

  const toggleModal = (src, text) => {
    setVideoSrc(src);
    setModalText(text);
    setIsModalOpen(!isModalOpen);
  };

  const renderProjects = projects.slice(1).map((project, index) => (
    <div className="mb-3" key={index}>
      <h3 className='text-capitalize'>
        {project.name} | {project.period}
      </h3>
      <p className='text-capitalize'><i>{project.description}</i></p>
      <ol>
        <li>
          {t('Github link')}:&nbsp;
          {project.github_link}
          <a
            href={project.details.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.details.github_link.split('/').pop()}
          </a>
        </li>

        {project.details.demo_link.includes("https://www.youtube.com/embed/") ? (
          <li
            onClick={() => toggleModal(project.details.demo_link, project.name)}
          >
            <h6 style={{ cursor: 'pointer', color: '#6262ea' }}>Demo</h6>
          </li>
        ) : (
          <li>
            <a
              href={project.details.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6262ea', textDecoration: 'none' }}
            >
              <h6>Demo</h6>
            </a>
          </li>
        )}


        <li>
          {project.details.team_size}
        </li>

        <li>
          {project.details.technical_stack.title}:
          <ul className="bullet-list">
            <li>{t('Framework')}: {project.details.technical_stack.framework}</li>
            <li>{t('Frontend')}: {project.details.technical_stack.frontend.join(', ')}</li>
            <li>{t('Database')}: {project.details.technical_stack.database}</li>
          </ul>
        </li>

        <li>
          {project.details.features?.title}:
          <ul style={{ listStyleType: 'lower-alpha' }}>
            {(Array.isArray(project.details.features?.feature) ? project.details.features.feature : []).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </li>

      </ol>
    </div>
  ));

  return (
    <section className="mb-4">
      <hr />
      <h2 className="mt-4 text-primary text-capitalize">{projects[0]?.title}</h2>
      {renderProjects}

      <Modal
        isOpen={isModalOpen}
        toggleModal={() => toggleModal('', '')}
        videoSrc={videoSrc}
        videoType="video/mp4"
      >
        <p>{modalText}</p>
      </Modal>
    </section>
  );
};

export default Projects;
