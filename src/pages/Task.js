import {
  memo,
  useCallback, useContext, useEffect, useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import CardsList from '../components/Card/CardsList';
import ViewOnly from '../components/ViewOnly';
import DeleteButton from '../components/DeleteButton';
import NewCardButton from '../components/NewCardButton';
import CardContext from '../context';

const MemoizedViewOnly = memo(ViewOnly, () => true);
const MemoizedNewCardButton = memo(NewCardButton, () => true);

function Task() {
  console.log('>>> TASK');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { newDataSet, setNewDataSet } = useContext(CardContext);

  const fetchCards = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
      const receivedData = response.data.slice(0, 15).map((card) => ({
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
        setError(err.message);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await fetchCards();
    })();
  }, [fetchCards]);

  // const MemoizedCardList = memo(CardsList);

  let content = <h4 style={{ color: 'var(--secondaryText)' }}>No cards</h4>;
  if (newDataSet.length > 0) content = <CardsList />;
  if (error) {
    content = (
      <h4 style={{ color: '#d42c41' }}>{error}</h4>
    );
  }
  if (isLoading) content = <h4 style={{ color: 'var(--secondaryText)' }}>Loading...</h4>;

  return (
    <>
      {/* <Header /> */}
      <MemoizedViewOnly />
      <MemoizedNewCardButton />
      <DeleteButton />
      <div style={{ textAlign: 'center' }}>
        {content}
      </div>
    </>
  );
}

export default Task;
