import css from './Button.module.css';

const Button = ({ isButton, loadMore }) => {
  return (
    <>
      {isButton ? (
        <button className={css.button} onClick={loadMore}>
          Load more
        </button>
      ) : null}
    </>
  );
};

export default Button;
