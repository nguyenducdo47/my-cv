import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

const Certificate = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const data = {
    certificate: t('certificate', { returnObjects: true }),
  };

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const title = data.certificate[0]?.title || '';

  const certificates = data.certificate.slice(1);

  return (
    <div>
      <h4 className="mt-4 text-primary">{title}</h4>
      {certificates.length > 0 ? ( 
        <ul>
          {certificates.map((cert, index) => (
            <li key={index}>
              <p
                style={{
                  cursor: 'pointer',
                  color: '#6262ea',
                }}
                onClick={() => openModal(cert)}
              >
                {cert.name}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No certificates available.</p>
      )}
      {selectedCertificate && (
        <Modal
          isOpen={!!selectedCertificate}
          toggleModal={closeModal}
          imgSrc={selectedCertificate.imgSrc}
          imgAlt={selectedCertificate.imgAlt}
        >
          <p>{selectedCertificate.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default Certificate;
