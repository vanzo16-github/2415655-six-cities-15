import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TCard } from '../../mocks/types';
import Places from '../places/places';

type FavoriteCardProps = {
  city: string;
  cards: TCard[];
}

function FavoriteCard({ city, cards }: FavoriteCardProps): JSX.Element {
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
        cards={cards} handleHover={function (): void {
          throw new Error('Function not implemented.');
        } }
      />
    </li>
  );
}

export default FavoriteCard;
