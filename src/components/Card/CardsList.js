import { memo, useContext } from 'react';
import withLoadingDelay from './withLoadingDelay';
import Card from './Card';
import AppContext from '../../context';

const DelayedCard = withLoadingDelay(Card);
const MemoizedDelayedCard = memo(DelayedCard, (prevProps, nextProps) => prevProps.caption === nextProps.caption && prevProps.text === nextProps.text);

function CardsList() {
  console.log('>> CARDS LIST');

  const { newDataSet } = useContext(AppContext);

  return (
    <ul className="cards" style={{ textAlign: 'center', paddingLeft: '1%' }}>
      {newDataSet.map((card) => (
        <MemoizedDelayedCard key={card.id} id={card.id} caption={card.caption} text={card.text} />
      ))}
    </ul>
  );
}

export default CardsList;
