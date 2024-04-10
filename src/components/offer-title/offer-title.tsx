import { Helmet } from 'react-helmet-async';
import { TOpenCard } from '../../mocks/types';
import FavoritesButton from '../favorites-button/favorites-button';

export type OfferTitleProps = {
//  title: string;
  card: TOpenCard;
//  handleHover: (card?:TOpenCard)=>void;
}

function OfferTitle({ card}: OfferTitleProps): JSX.Element {
  const {title, id, isFavorite} = card;

  return (
    <div className="offer__name-wrapper">
      <Helmet>
        <title>
                  Beautiful &amp; luxurious studio at great location
        </title>
      </Helmet>
      <h1 className="offer__name">
        {title}
      </h1>
      <FavoritesButton className='offer' isFavorite={isFavorite} cardId={id} />

    </div>
  );
}

export default OfferTitle;
