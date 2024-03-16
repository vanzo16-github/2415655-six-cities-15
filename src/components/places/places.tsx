import PlaceCard from '../place-card/place-card';
import { TCard } from '../../mocks/types';
// import { useEffect, useState } from 'react';
// import { Nullable } from 'vitest';

export type PlacesProps = {
  cards: TCard[];
  handleHover: (card?:TCard)=>void;
}

function Places({cards, handleHover}: PlacesProps): JSX.Element {
  // const [activeOffer, setActiveOffer] = useState<Nullable<TCard>>(null);
  // const handleHover = (offer?: TCard) => {
  //   setActiveOffer(offer || null);
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log('component did update');
  // }, [cards]);

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.warn(activeOffer);

  //   return () => {
  //     // eslint-disable-next-line no-console
  //     console.log('component will unmount');
  //   };
  // }, []);
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
