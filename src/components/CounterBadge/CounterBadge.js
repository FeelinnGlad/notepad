import { useContext } from 'react';
import styles from './CounterBadge.module.css';
import CardContext from '../../context';

function CounterBadge() {
  console.log('>> counter');

  const { newDataSet } = useContext(CardContext);

  return (
    <div className={styles.counterBadge}>
      <h3>
        Cards
      </h3>
      <span>{newDataSet?.length || 0}</span>
    </div>
  );
}

export default CounterBadge;
