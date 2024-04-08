import { Link } from 'react-router-dom';
import { TOpenCard } from '../../mocks/types';
import FavoritesButton from '../favorites-button/favorites-button';

export type PlaceCardProps = {
  card: TOpenCard;
  handleHover: (card?:TOpenCard)=>void;
}

function PlaceCard({ card, handleHover }: PlaceCardProps): JSX.Element {
  const {id, title, type, price, isPremium, isFavorite, previewImage, rating} = card;


  const handleMouseOn = () => {
    handleHover(card);
  };

  const handleMouseOff = () => {
    handleHover();
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton isFavorite={isFavorite} cardId={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
