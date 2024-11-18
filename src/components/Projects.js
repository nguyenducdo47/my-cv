import React, { useState } from 'react';
import Modal from './Modal';
import '../App.css';
import data from '../data/user';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [modalText, setModalText] = useState('');
  
  const toggleModal = (src,text) => {
    setVideoSrc(src);
    setModalText(text);
    setIsModalOpen(!isModalOpen);
  };

  const renderProjects = data.projects.map((project, index) => (
    <div className="mb-3" key={index}>
      <h3>
        {project.name} using {project.framework} | ({project.period})
      </h3>
      <p><i>{project.description}</i></p>
      <ol>
        <li>
          Link Github:&nbsp;
          <a
            href={project.details.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.details.github_link.split('/').pop()}
          </a>
        </li>
        <li
          onClick={() => toggleModal(project.details.demo_link, `Demo video about ${project.name}.`)}
          style={{ cursor: 'pointer' }}
        >
          Demo: click here
        </li>
        <li>
          Team size: {project.details.team_size}
        </li>
        <li>
          Technical stack:
          <ul className='bullet-list'>
            <li>Framework: {project.details.technical_stack.framework}</li>
            <li>Frontend: {project.details.technical_stack.frontend.join(', ')}</li>
            <li>Database: {project.details.technical_stack.database}</li>
          </ul>
        </li>
        <li>
          Features:
          <ul style={{ listStyleType: 'lower-alpha' }}>
            {project.details.features.map((feature, idx) => (
              <li key={idx}>
                {feature}
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  ));

  return (
    <section className="mb-4">
      <hr />
      <h2 className="mt-4 text-primary">Projects</h2>
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
