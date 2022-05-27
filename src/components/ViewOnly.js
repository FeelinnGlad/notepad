import classNames from 'classnames';
import { useContext } from 'react';
import styled from 'styled-components';
import styles from './ViewOnly.module.css';
import IsEditableContext from '../context';

// const ViewOnly = styled.div`
//   display: inline-block;
//   margin-left: 4.5rem;
//
//   & h3 {
//     display:inline-block;
//     color: #53ad55;
//     letter-spacing: 4px;
//     font-size: 15px;
//     margin-left: 20px;
//   }
//
//   & input[type=checkbox] {
//     display: inline-block;
//     vertical-align: middle;
//     margin: 0;
//     transition: 100ms ease-in-out;
//   }
//
//   & input[type=checkbox]::before {
//     opacity: 0;
//   }
//
//   &.isEditable input[type=checkbox]::before {
//     background-color: rgba(160, 232, 120, 0.65);
//     opacity: 1;
//   }
//
//   & input[type=checkbox]:active {
//     transform: scale(0.8);
//   }
// `;

const ViewOnly = () => {
  const { isEditable, setIsEditable } = useContext(IsEditableContext);

  const onViewChangeHandler = () => {
    setIsEditable((prevState) => !prevState);
  };

  const ViewOnlyCheckbox = styled.input`
    .viewOnly &[type=checkbox] {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
      transition: 100ms ease-in-out;
    }

    .viewOnly &::before {
      opacity: 0;
    }

    .viewOnly.isEditable &[type=checkbox]::before {
      background-color: rgba(160, 232, 120, 0.65);
      opacity: 1;
    }

    .viewOnly &[type=checkbox]:active {
      transform: scale(0.8);
    }
  `;

  return (
    <div className={classNames(styles.viewOnly, { [styles.isEditable]: isEditable })}>
      <ViewOnlyCheckbox type="checkbox" onChange={onViewChangeHandler} />
      <h3>View only</h3>
    </div>
  );
};

export default ViewOnly;
