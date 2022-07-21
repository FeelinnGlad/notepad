import withLoadingDelay from './withLoadingDelay';
import Card from './Card';

const DelayedCard = withLoadingDelay(Card);

const CardsList = (props) => (
  <ul className="cards" style={{ textAlign: 'center', paddingLeft: '1%' }}>
    {props.items.map((card) => (
      <DelayedCard insertSelectedID={props.insertSelectedID} key={card.id} id={card.id} caption={card.caption} text={card.text} />
    )) || 'No cards'}
  </ul>
);

export default CardsList;
