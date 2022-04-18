import { useState } from 'react';
import './Card.css';
import { AiFillEdit, AiFillSave, AiOutlineCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';

const Card = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const [caption, setCaption] = useState('Caption');
  const [description, setDescription] = useState(text);
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

  return (
    <div className={classNames('taskHolder', { selected: isSelected, editing: isEditing })}>
      <textarea className="captionField" onChange={onCaptionChangeHandler} disabled={!isEditing} maxLength={20} value={caption}>{caption}</textarea>
      <div className="icons">
        <div className="defaultIcons">
          <input
            type="checkbox"
            onChange={onChangeHandler}
          />
          <AiFillEdit className="editIcon" onClick={onClickEditIconHandler} />
        </div>
        <div className="editingIcons">
          <AiFillSave className="saveIcon" onClick={onClickSaveIconHandler} />
          <AiOutlineCloseSquare className="discardIcon" onClick={onClickDiscardIconHandler} />
        </div>
      </div>
      <hr />
      <textarea rows={10} disabled={!isEditing} onChange={onDescriptionChangeHandler} className="textField" value={description}>{description}</textarea>
    </div>
  );
};

export default Card;
