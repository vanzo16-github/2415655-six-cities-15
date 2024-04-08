import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TOpenCard } from '../../mocks/types';
import Places from '../places/places';
import { useState } from 'react';

type FavoriteCardProps = {
  city: string;
  cards: TOpenCard[];
}

function FavoriteCard({ city, cards }: FavoriteCardProps): JSX.Element {
  const [, setSelectedCard] = useState<TOpenCard | null>();

  const handleSelectActiveCard = (card?: TOpenCard) => {
    setSelectedCard(card);
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Favorites}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <Places
        cards={cards} handleHover={handleSelectActiveCard}
      />
    </li>
  );
}

export default FavoriteCard;
