import { useState } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';

const ImageGallery = ({ photos }) => {
  const [isModal, setIsModal] = useState(false);
  const [fullImage, setFullImage] = useState('');

  const onClickImage = fullImage => {
    setFullImage(fullImage);
    setIsModal(true);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <ul className={css.imageGallery}>
        {photos.map(photo => (
          <ImageGalleryItem
            key={photo.id}
            photo={photo}
            onClickImageZoom={onClickImage}
          />
        ))}
      </ul>
      <Modal isModal={isModal} src={fullImage} onCloseModal={onCloseModal} />
    </>
  );
};

export default ImageGallery;
