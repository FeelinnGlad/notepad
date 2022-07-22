import styles from './LoadingCard.module.css';
import { ReactComponent as Loading } from './loading.svg';

const LoadingCard = () => (
  <div className={styles.loadingSpace}>
    <Loading />
  </div>
);

export default LoadingCard;
