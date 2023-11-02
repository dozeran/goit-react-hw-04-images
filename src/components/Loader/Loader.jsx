import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
    </div>
  );
};

export default Loader;
