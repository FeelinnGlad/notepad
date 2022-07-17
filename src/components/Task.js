import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import CardsList from './Card/CardsList';
import dataSet from '../dataSet';
import ViewOnly from './ViewOnly/ViewOnly';
import IsEditableContext from '../context';
import DeleteButton from './DeleteButton/DeleteButton';
import NewCardButton from './NewCardButton/NewCardButton';

const Task = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [selectedIDList, setSelectedIDList] = useState([]);
  const [newDataSet, setNewDataSet] = useState(dataSet);

  const deleteHandler = () => {
    setNewDataSet((prevState) => prevState.filter((el) => !selectedIDList.includes(el.id)));
  };
  const insertSelectedID = (isSelected, selectedID) => {
    if (!isSelected) {
      setSelectedIDList([...selectedIDList, selectedID]);
    } else {
      setSelectedIDList(selectedIDList.filter((id) => id !== selectedID));
    }
  };

  const newCardHandler = () => {
    setNewDataSet([...newDataSet, {
      id: uuid(),
      caption: '',
      text: '',
    }]);
  };

  return (
    <>
      <Header />
      <IsEditableContext.Provider value={{ isEditable, setIsEditable }}>
        <ViewOnly />
        <NewCardButton newCardHandler={newCardHandler} />
        <DeleteButton deleteHandler={deleteHandler} />
        <CardsList items={newDataSet} insertSelectedID={insertSelectedID} />
      </IsEditableContext.Provider>
    </>
  );
};

export default Task;
