import { TReview } from '../../mocks/types';
import OfferForm from '../offer-form/offer-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewProps = {
  isAuth: boolean;
  reviews: TReview[];
}

function OfferReview({isAuth, reviews}: OfferReviewProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {isAuth && <OfferForm/>}
      {!isAuth && <p>Нужна авторизация</p>}
    </section>
  );
}

export default OfferReview;
