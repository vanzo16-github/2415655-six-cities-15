import PlaceCard from '../place-card/place-card';
import { TOpenCard } from '../../mocks/types';

export type PlacesProps = {
  cards: TOpenCard[];
  handleHover: (card?:TOpenCard)=>void;
}

function Places({cards, handleHover}: PlacesProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) =>(
        <PlaceCard
          key={card.id}
          card={card}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
}

export default Places;
