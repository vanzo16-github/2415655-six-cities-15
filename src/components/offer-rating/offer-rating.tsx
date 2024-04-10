import { TCard } from '../../mocks/types';

export type OfferRatingProps = {
  card: TCard;
}

function OfferRating({ card }: OfferRatingProps): JSX.Element {
  const {rating} = card;
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{width: `${Math.round(rating) * 20}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferRating;
