import { useContext } from 'react';
import styles from './DeleteButton.module.css';
import AppContext from '../../context';

function DeleteButton() {
  console.log('>> Delete');

  const { deleteHandler } = useContext(AppContext);

  return (
    <button type="button" className={styles.deleteButton} onClick={deleteHandler}>
      Delete selected
    </button>
  );
}
export default DeleteButton;
