import { TReview } from '../../mocks/types';
import ReviewsItem from '../reviews-item/reviews-item';

export type ReviewsListProps = {
  reviews: TReview[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;
