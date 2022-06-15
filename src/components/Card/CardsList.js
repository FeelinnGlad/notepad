import Card from './Card';

const CardsList = (props) => (
  <ul className="cards" style={{ textAlign: 'center', paddingLeft: '1%' }}>
    {props.items.map((card) => (
      <Card insertSelectedID={props.insertSelectedID} key={card.id} id={card.id} caption={card.caption} text={card.text} />
    )) || 'No cards'}
  </ul>
);

export default CardsList;
