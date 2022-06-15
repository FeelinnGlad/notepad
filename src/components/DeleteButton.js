import styles from './DeleteButton.module.css';

const DeleteButton = (props) => (
  <button type="button" className={styles.deleteButton} onClick={props.deleteHandler}>
    Delete selected
  </button>
);
export default DeleteButton;
