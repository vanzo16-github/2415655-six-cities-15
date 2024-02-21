import { CITIES } from '../../const';
import FavoriteCard from '../favorite-card/favorite-card';

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{CITIES[1]}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <FavoriteCard/>

          <FavoriteCard/>
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{CITIES[2]}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <FavoriteCard/>
        </div>
      </li>
    </ul>
  );
}

export default FavoritesList;
