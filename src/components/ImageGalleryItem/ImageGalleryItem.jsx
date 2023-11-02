import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ onClickImageZoom, photo }) => {
  const onClickImage = () => {
    onClickImageZoom(photo.largeImageURL);
  };

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          src={photo.webformatURL}
          alt={photo.tags}
          className={css.imageGalleryItemImage}
          onClick={onClickImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
