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
          <a
            href={project.details.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.details.github_link}
          </a>
        </li>

        {project.details.demo_link.includes("https://www.youtube.com/embed/") ? (
          <li
            onClick={() => toggleModal(project.details.demo_link, project.name)}
          >
            <h6 style={{ cursor: 'pointer'}}>Demo: {project.details.demo_link}</h6>
          </li>
        ) : (
          <li>
            <a
              href={project.details.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <h6>Demo: {project.details.demo_link}</h6>
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

          {(() => {
            const hasCustomerPage = project.details.features.customer_page.length > 0;
            const hasAdminPage = project.details.features.admin_page.length > 0;

            if (hasCustomerPage && hasAdminPage) {
              return (
                <ul style={{ listStyleType: 'lower-alpha' }}>
                  {hasCustomerPage && (
                    <>
                      <li>{t('Customer page features')}:</li>
                      <ul style={{ listStyleType: 'disc' }}>
                        {project.details.features.customer_page.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {hasAdminPage && (
                    <>
                      <li>{t('Admin page features')}:</li>
                      <ul style={{ listStyleType: 'disc' }}>
                        {project.details.features.admin_page.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </ul>
              );
            } else if (hasCustomerPage || hasAdminPage) {
              return (
                <ul style={{ listStyleType: 'disc' }}>
                  {hasCustomerPage &&
                    project.details.features.customer_page.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  {hasAdminPage &&
                    project.details.features.admin_page.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                </ul>
              );
            } else {
              return null;
            }
          })()}
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
