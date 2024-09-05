import { useContext } from 'react';
import styles from './NewCardButton.module.css';
import AppContext from '../../context';

function NewCardButton() {
  console.log('>> New Card');

  const { newCardHandler } = useContext(AppContext);

  return (
    <button type="button" className={styles.newCardButton} onClick={newCardHandler}>
      New card
    </button>
  );
}

export default NewCardButton;
