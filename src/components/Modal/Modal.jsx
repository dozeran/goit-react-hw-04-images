import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ isModal, src, onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeDown);
    return () => {
      window.removeEventListener('keydown', handleEscapeDown);
    };
  });

  const handleEscapeDown = e => {
    if (e.key === 'Escape') {
      onCloseModal();
    }
  };

  const closeModal = () => {
    onCloseModal();
  };

  return (
    <>
      {isModal ? (
        <div className={css.overlay} onClick={closeModal}>
          <div className={css.modal}>
            <img src={src} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
