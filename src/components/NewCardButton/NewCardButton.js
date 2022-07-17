import styles from './NewCardButton.module.css';

const NewCardButton = (props) => (
  <button type="button" className={styles.newCardButton} onClick={props.newCardHandler}>
    New card
  </button>
);

export default NewCardButton;
