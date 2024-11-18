import React from 'react';

const Modal = ({ isOpen, toggleModal, imgSrc, imgAlt, videoSrc, videoType, children }) => {
  if (!isOpen) return null; // Không hiển thị nếu isOpen = false

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      toggleModal(); // Đóng modal khi click ngoài modal-content
    }
  };

  return (
    <div 
      id="modal" 
      className="modal" 
      style={styles.modal}
      onClick={handleOutsideClick} // Đóng modal khi click ngoài modal-content
    >
      <div className="modal-content" style={styles.modalContent}>
        <span
          className="close-btn"
          onClick={toggleModal}
          style={styles.closeBtn}
        >
          &times;
        </span>
        {/* Hiển thị nội dung text */}
        {children && <div style={styles.modalBody}>{children}</div>}
        
        {/* Hiển thị hình ảnh nếu có */}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt || 'Image'}
            style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
        )}

        {/* Hiển thị video nếu có */}
        {videoSrc && (
          <video controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
            <source src={videoSrc} type={videoType} />
            Your browser does not support the video tag.
          </video>
        )}

        
      </div>
    </div>
  );
};

// Style cho Modal
const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    width:'90%',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    textAlign: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '20px',
    cursor: 'pointer',
  },
  modalBody: {
    marginTop: '20px',
  },
};

export default Modal;
