import { TReview } from '../../mocks/types';
import MemoReviewsItem from '../reviews-item/reviews-item';

export type ReviewsListProps = {
  reviews: TReview[];
}

const compareDates = (reviewA: TReview, reviewB: TReview) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime();

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const sortedReviews = [...reviews].sort(compareDates);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => <MemoReviewsItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;
