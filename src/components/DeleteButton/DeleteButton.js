import { useContext } from 'react';
import styles from './DeleteButton.module.css';
import AppContext from '../../context';

const DeleteButton = () => {
  const { deleteHandler } = useContext(AppContext);

  return (
    <button type="button" className={styles.deleteButton} onClick={deleteHandler}>
      Delete selected
    </button>
  );
};
export default DeleteButton;
