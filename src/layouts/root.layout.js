import { Outlet } from 'react-router-dom';
import { memo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from '../components/Header';
import CardContext from '../context';
import styles from '../pages/pages.module.css';

const MemoizedHeader = memo(Header, () => true);

function RootLayout() {
  console.log('>> Root layout');
  const [isEditable, setIsEditable] = useState(true);
  const [newDataSet, setNewDataSet] = useState([]);
  const [selectedIDList, setSelectedIDList] = useState([]);

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
    <CardContext.Provider value={{
      isEditable, setIsEditable, newDataSet, setNewDataSet, newCardHandler, deleteHandler, insertSelectedID,
    }}
    >
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </CardContext.Provider>
  );
}

export default RootLayout;
