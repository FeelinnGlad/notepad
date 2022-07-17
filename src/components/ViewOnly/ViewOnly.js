import classNames from 'classnames';
import { useContext } from 'react';
import styles from './ViewOnly.module.css';
import IsEditableContext from '../../context';

const ViewOnly = () => {
  const { isEditable, setIsEditable } = useContext(IsEditableContext);

  const onViewChangeHandler = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    <div className={classNames(styles.viewOnly, { [styles.isEditable]: isEditable })}>
      <input type="checkbox" onChange={onViewChangeHandler} />
      <h3>View only</h3>
    </div>
  );
};

export default ViewOnly;
