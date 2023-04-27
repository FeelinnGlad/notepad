import { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Header from './Header';
import CardsList from './Card/CardsList';
import ViewOnly from './ViewOnly';
import AppContext from '../context';
import DeleteButton from './DeleteButton';
import NewCardButton from './NewCardButton';

const Task = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [selectedIDList, setSelectedIDList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newDataSet, setNewDataSet] = useState([]);

  const fetchCards = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
      const receivedData = response.data.slice(0, 1).map((card) => ({
        id: uuid(),
        caption: card.Name,
        text: card.About,
      }));
      setNewDataSet(receivedData);
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        setError(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message());
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await fetchCards();
    })();
  }, [fetchCards]);

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

  let content = <h4 style={{ color: 'var(--secondaryText)' }}>No cards</h4>;
  if (newDataSet.length > 0) content = <CardsList />;
  if (error) {
    content = (
      <h4 style={{ color: '#d42c41' }}>{error}</h4>
    );
  }
  if (isLoading) content = <h4 style={{ color: 'var(--secondaryText)' }}>Loading...</h4>;

  return (
    <AppContext.Provider value={{
      isEditable, setIsEditable, newDataSet, newCardHandler, deleteHandler, insertSelectedID,
    }}
    >
      <Header />
      <ViewOnly />
      <NewCardButton />
      <DeleteButton />
      <div style={{ textAlign: 'center' }}>
        {content}
      </div>
    </AppContext.Provider>
  );
};

export default Task;
