import { useContext } from 'react';
import styles from './CounterBadge.module.css';
import AppContext from '../../context';

const CounterBadge = () => {
  const { newDataSet } = useContext(AppContext);

  return (
    <div className={styles.counterBadge}>
      <h3>
        Cards
      </h3>
      <span>{newDataSet.length}</span>
    </div>
  );
};

export default CounterBadge;
