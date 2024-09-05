import {
  memo,
  useContext, useEffect, useState,
} from 'react';
import { AiFillEdit, AiFillSave, AiOutlineCloseSquare } from 'react-icons/ai';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Card.module.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import AppContext from '../../context';

const MemoizedCardHeader = memo(CardHeader, (prevProps, nextProps) => prevProps.caption === nextProps.caption && prevProps.isEditing === nextProps.isEditing);
const MemoizedCardBody = memo(CardBody, (prevProps, nextProps) => prevProps.description === nextProps.description && prevProps.isEditing === nextProps.isEditing);

function Card(props) {
  console.log('>> CARD');

  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [caption, setCaption] = useState(props.caption);
  const [captionBuffer, setCaptionBuffer] = useState(caption);

  const [description, setDescription] = useState(props.caption);
  const [descriptionBuffer, setDescriptionBuffer] = useState(props.text);

  const { insertSelectedID } = useContext(AppContext);

  const onChangeHandler = () => {
    setIsSelected((prevState) => !prevState);
    setIsEditing(false);
    insertSelectedID(isSelected, props.id);
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

  const { isEditable } = useContext(AppContext);

  useEffect(() => {
    onClickDiscardIconHandler();
  }, [isEditable]);

  return (
    <div id={props.id} className={classNames(styles.taskHolder, { [styles.selected]: isSelected, [styles.editing]: isEditing })}>
      <MemoizedCardHeader caption={caption} setCaption={setCaption} isEditing={isEditing} />
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
      <MemoizedCardBody description={description} setDescription={setDescription} isEditing={isEditing} />
    </div>
  );
}

Card.propTypes = {
  insertSelectedID: PropTypes.elementType,
  key: PropTypes.number,
  id: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
