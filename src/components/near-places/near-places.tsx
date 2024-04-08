import PlaceCard from '../place-card/place-card';
import { TCard, TOpenCard } from '../../mocks/types';
import { useState } from 'react';

type NearPlacesProps = {
  cards: TCard[];
}

function NearPlaces({ cards }: NearPlacesProps): JSX.Element {
  const [, setSelectedCard] = useState<TOpenCard | null>();

  const handleSelectActiveCard = (card?: TOpenCard) => {
    setSelectedCard(card);
  };
  return (
    <div className="near-places__list places__list">
      {cards.map((card) =>(
        <PlaceCard
          key={card.id}
          card={card} handleHover={handleSelectActiveCard}
        />
      ))}
    </div>
  );
}

export default NearPlaces;
