import { useContext, useEffect, useState } from 'react';
import { AiFillEdit, AiFillSave, AiOutlineCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';
import styles from './Card.module.css';
import IsEditableContext from '../../context';

const Card = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const initialText = props.text;
  const initialCaption = props.caption;

  const [caption, setCaption] = useState(initialCaption);
  const [description, setDescription] = useState(initialText);
  const [captionBuffer, setCaptionBuffer] = useState(caption);
  const [descriptionBuffer, setDescriptionBuffer] = useState(description);

  const onChangeHandler = () => {
    setIsSelected((prevState) => !prevState);
    setIsEditing(false);
  };

  const onClickEditIconHandler = () => {
    setIsEditing(true);
    setIsSelected(false);
  };

  const onClickSaveIconHandler = () => {
    setCaptionBuffer(caption);
    setDescriptionBuffer(description);
    setIsEditing(false);
  };

  const onClickDiscardIconHandler = () => {
    setCaption(captionBuffer);
    setDescription(descriptionBuffer);
    setIsEditing(false);
  };
  const onCaptionChangeHandler = (event) => {
    setCaption(event.target.value);
  };
  const onDescriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const { isEditable } = useContext(IsEditableContext);

  useEffect(() => {
    onClickDiscardIconHandler();
  }, [isEditable]);

  return (
    <div className={classNames(styles.taskHolder, { [styles.selected]: isSelected, [styles.editing]: isEditing })}>
      <textarea className={styles.captionField} onChange={onCaptionChangeHandler} disabled={!isEditing} maxLength={20} value={caption}>
        {caption}
      </textarea>
      <div className={styles.icons}>
        <div className={styles.defaultIcons}>
          <input type="checkbox" onChange={onChangeHandler} />
          {!isEditable && <AiFillEdit className={styles.editIcon} onClick={onClickEditIconHandler} />}
        </div>
        {isEditing && (
        <div className={styles.editingIcons}>
          <AiFillSave className={styles.saveIcon} onClick={onClickSaveIconHandler} />
          <AiOutlineCloseSquare className={styles.discardIcon} onClick={onClickDiscardIconHandler} />
        </div>
        )}
      </div>
      <hr />
      <textarea rows={10} disabled={!isEditing} onChange={onDescriptionChangeHandler} className={styles.textField} value={description}>
        {description}
      </textarea>
    </div>
  );
};

export default Card;
