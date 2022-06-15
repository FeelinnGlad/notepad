import styles from './Card.module.css';

const CardBody = (props) => {
  const onDescriptionChangeHandler = (event) => {
    props.setDescription(event.target.value);
  };

  return (
    <textarea rows={10} disabled={!props.isEditing} onChange={onDescriptionChangeHandler} className={styles.textField} value={props.description}>
      {props.description}
    </textarea>
  );
};

export default CardBody;
