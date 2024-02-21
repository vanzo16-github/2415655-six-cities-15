import OfferFeatures from '../offer-features/offer-features';
import OfferHost from '../offer-host/offer-host';
import OfferInside from '../offer-inside/offer-inside';
import OfferPrice from '../offer-price/offer-price';
import OfferRating from '../offer-rating/offer-rating';
import OfferReview from '../offer-review/offer-review';
import OfferTitle from '../offer-title/offer-title';

function OfferContainer(): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        <div className="offer__mark">
          <span>Premium</span>
        </div>
        <OfferTitle/>
        <OfferRating/>
        <OfferFeatures/>
        <OfferPrice/>
        <OfferInside/>
        <OfferHost/>
        <OfferReview/>
      </div>
    </div>
  );
}

export default OfferContainer;
