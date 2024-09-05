import styles from './LoadingCard.module.css';
import { ReactComponent as Loading } from './loading.svg';

function LoadingCard() {
  return (
    <div className={styles.loadingSpace}>
      <Loading />
    </div>
  );
}

export default LoadingCard;
