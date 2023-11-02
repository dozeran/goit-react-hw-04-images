import { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onQueryChange }) => {
  const [request, setRequest] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    onQueryChange(request);
  };

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleFormSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => setRequest(e.target.value)}
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
