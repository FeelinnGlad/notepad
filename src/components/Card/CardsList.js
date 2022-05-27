import Card from './Card';
import dataSet from '../../dataSet';

const CardsList = () => (
  <ul className="cards" style={{ textAlign: 'center', paddingLeft: '1%' }}>
    {dataSet.map((card) => (
      <Card
        key={card.id}
        caption={card.caption}
        text={card.text}
      />
    ))}
  </ul>
);

export default CardsList;
