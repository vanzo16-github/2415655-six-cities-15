import { apartments } from '../../mock';
import FavoriteCard from '../favorite-card/favorite-card';

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Paris</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">

          {apartments.map((card) =>(
            <FavoriteCard
              key={card.id}
              image={card.previewImage}
              title={card.title}
              type={card.type}
              price={card.price}
            />
          ))}
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Brussels</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {apartments.map((card) =>(
            <FavoriteCard
              key={card.id}
              image={card.previewImage}
              title={card.title}
              type={card.type}
              price={card.price}
            />
          ))}
        </div>
      </li>
    </ul>
  );
}

export default FavoritesList;
