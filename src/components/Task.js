import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import CardsList from './Card/CardsList';
import dataSet from '../dataSet';
import ViewOnly from './ViewOnly';
import AppContext from '../context';
import DeleteButton from './DeleteButton';
import NewCardButton from './NewCardButton';

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
    <AppContext.Provider value={{
      isEditable, setIsEditable, newDataSet, newCardHandler, deleteHandler, insertSelectedID,
    }}
    >
      <Header />
      <ViewOnly />
      <NewCardButton />
      <DeleteButton />
      <CardsList />
    </AppContext.Provider>
  );
};

export default Task;
