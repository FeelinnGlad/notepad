import styles from './Card.module.css';

const CardHeader = (props) => {
  const onCaptionChangeHandler = (event) => {
    props.setCaption(event.target.value);
  };

  return (
    <textarea
      onChange={onCaptionChangeHandler}
      className={styles.captionField}
      disabled={!props.isEditing}
      maxLength={20}
      value={props.caption}
    >
      {props.caption}
    </textarea>
  );
};

export default CardHeader;
