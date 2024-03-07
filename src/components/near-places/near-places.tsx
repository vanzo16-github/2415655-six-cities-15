import PlaceCard from '../place-card/place-card';
import { TCard } from '../../mocks/types';
import { useEffect, useState } from 'react';
import { Nullable } from 'vitest';

type NearPlacesProps = {
  cards: TCard[];
}

function NearPlaces({ cards }: NearPlacesProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TCard>>(null);
  const handleHover = (offer?: TCard) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('component did update');
  }, [cards]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.warn(activeOffer);

    return () => {
      // eslint-disable-next-line no-console
      console.log('component will unmount');
    };
  }, []);
  return (
    <div className="near-places__list places__list">
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

export default NearPlaces;
