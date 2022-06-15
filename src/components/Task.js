import { useState } from 'react';
import Header from './Header';
import CardsList from './Card/CardsList';
import dataSet from '../dataSet';
import ViewOnly from './ViewOnly';
import IsEditableContext from '../context';
import DeleteButton from './DeleteButton';

const Task = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [selectedIDList, setSelectedIDList] = useState([]);
  const [newDataSet, setNewDataSet] = useState(dataSet);
  const deleteHandler = () => {
    setNewDataSet(dataSet.filter((el) => !selectedIDList.includes(el.id)));
  };
  const insertSelectedID = (isSelected, selectedID) => {
    if (!isSelected) {
      setSelectedIDList([...selectedIDList, selectedID]);
    } else {
      setSelectedIDList(selectedIDList.filter((id) => id !== selectedID));
    }
  };
  return (
    <>
      <Header />
      <IsEditableContext.Provider value={{ isEditable, setIsEditable }}>
        <ViewOnly />
        <DeleteButton deleteHandler={deleteHandler} />
        <CardsList items={newDataSet} insertSelectedID={insertSelectedID} />
      </IsEditableContext.Provider>
    </>
  );
};

export default Task;
