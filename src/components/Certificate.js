import React, { useState } from 'react';
import Modal from './Modal';
import data from '../data/user';

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div>
      <h4 className="mt-4 text-primary">Certificate</h4>
      <ul>
        {data.certificate.map((cert, index) => (
          <li key={index}>
            <p
              style={{
                cursor: 'pointer',
                color: 'blue',
                textDecoration: 'underline',
              }}
              onClick={() => openModal(cert)}
            >
              {cert.name} (click here)
            </p>
          </li>
        ))}
      </ul>
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
