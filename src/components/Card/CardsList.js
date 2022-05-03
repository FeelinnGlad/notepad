import Card from './Card';
import dataSet from '../../dataSet';

const CardsList = () => (
  <ul className="cards">
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
