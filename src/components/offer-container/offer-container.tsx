import { TReview } from '../../mocks/types';
import OfferFeatures from '../offer-features/offer-features';
import OfferHost from '../offer-host/offer-host';
import OfferInside from '../offer-insides/offer-insides';
import OfferPrice from '../offer-price/offer-price';
import OfferRating from '../offer-rating/offer-rating';
//import OfferReview from '../offer-review/offer-review';
import OfferTitle from '../offer-title/offer-title';

type OfferContainerProps = {
  title: string;
  name: string;
  isPremium: boolean;
  maxAdults: number;
  type: string;
  bedrooms: number;
 // goods: string[];
  price: number;
 // reviews: TReview[];
}

function OfferContainer({title, isPremium, maxAdults, type, bedrooms, price, name}: OfferContainerProps): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium && <div className="offer__mark"><span>Premium</span></div>}
        <OfferTitle title={title}/>
        <OfferRating/>
        <OfferFeatures maxAdults={maxAdults} type={type} bedrooms={bedrooms}/>
        <OfferPrice price={price}/>
        {/* <OfferInside features={goods}/> */}
        <OfferRating/>
        <OfferHost name={name}/>
        {/* <OfferReview isAuth reviews={reviews}/> */}
      </div>
    </div>
  );
}

export default OfferContainer;
