import {
  useContext, useEffect, useState,
} from 'react';
import { AiFillEdit, AiFillSave, AiOutlineCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';
import styles from './Card.module.css';
import IsEditableContext from '../../context';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [caption, setCaption] = useState(props.caption);
  const [captionBuffer, setCaptionBuffer] = useState(caption);

  const [description, setDescription] = useState(props.caption);
  const [descriptionBuffer, setDescriptionBuffer] = useState(props.text);

  const onChangeHandler = () => {
    setIsSelected((prevState) => !prevState);
    setIsEditing(false);
    props.insertSelectedID(isSelected, props.id);
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

  const { isEditable } = useContext(IsEditableContext);

  useEffect(() => {
    onClickDiscardIconHandler();
  }, [isEditable]);

  return (
    <div id={props.id} className={classNames(styles.taskHolder, { [styles.selected]: isSelected, [styles.editing]: isEditing })}>
      <CardHeader caption={caption} setCaption={setCaption} isEditing={isEditing} />
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
      <CardBody description={description} setDescription={setDescription} isEditing={isEditing} />
    </div>
  );
};

export default Card;
