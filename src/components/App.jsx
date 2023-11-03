import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { fetchPhotos } from 'service/search-api';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isButton, setIsButton] = useState(false);

  const fetchPhotosFromApi = async (newQuery, currentPage) => {
    setIsLoading(true);
    try {
      const response = await fetchPhotos(newQuery, currentPage);
      if (response.total === 0) {
        setPhotos([]);
        setIsButton(false);
        return;
      }

      setPhotos(photos => [...photos, ...response.hits]);
      setQuery(newQuery);
      setIsButton(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuery = query => {
    setPage(1);
    setPhotos([]);
    setQuery(query);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchPhotosFromApi(query, page);
  }, [query, page]);

  return (
    <>
      <Searchbar onQueryChange={updateQuery} />
      <ImageGallery photos={photos} />
      <Loader isLoading={isLoading} />
      <Button isButton={isButton} loadMore={loadMore} />
    </>
  );
};

export default App;
