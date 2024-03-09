import OfferFeatures from '../offer-features/offer-features';
import OfferHost from '../offer-host/offer-host';
import OfferInside from '../offer-insides/offer-insides';
import OfferPrice from '../offer-price/offer-price';
import OfferRating from '../offer-rating/offer-rating';
import OfferReview from '../offer-review/offer-review';
import OfferTitle from '../offer-title/offer-title';

type OfferContainerProps = {
  title: string;
  isPremium: boolean;
  maxAdults: number;
  type: string;
  bedrooms: number;
  features: string[];
}

function OfferContainer({title, isPremium, maxAdults, type, bedrooms, features}: OfferContainerProps): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium && <div className="offer__mark"><span>Premium</span></div>}
        <OfferTitle title={title}/>
        <OfferRating/>
        <OfferFeatures maxAdults={maxAdults} type={type} bedrooms={bedrooms}/>
        <OfferPrice/>
        <OfferInside features={features}/>
        <OfferHost/>
        <OfferReview isAuth/>
      </div>
    </div>
  );
}

export default OfferContainer;
