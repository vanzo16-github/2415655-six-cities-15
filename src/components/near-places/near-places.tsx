import PlaceCard from '../place-card/place-card';
import { TCard } from '../../mocks/types';

type NearPlacesProps = {
  cards: TCard[];
}

function NearPlaces({ cards }: NearPlacesProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {cards.map((card) =>(
        <PlaceCard
          key={card.id}
          card={card} handleHover={function (): void {
            throw new Error('Function not implemented.');
          } }
        />
      ))}
    </div>
  );
}

export default NearPlaces;
