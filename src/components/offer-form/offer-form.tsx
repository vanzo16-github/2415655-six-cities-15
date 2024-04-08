import { FormEvent, ReactEventHandler, useState } from 'react';
import { FormInfo } from '../../mocks/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postComment } from '../../store/api-actions';

type InputItemProps = {
  value: string;
  title: string;
  checkedValue: string;
  onInputChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}


function InputItem({value, title, checkedValue, onInputChange}: InputItemProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onInputChange} checked={checkedValue === value} />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

// const rating = [
//   {value: 5, label: 'perfect'},
//   {value: 4, label: 'good'},
//   {value: 3, label: 'not bad'},
//   {value: 2, label: 'badly'},
//   {value: 1, label: 'terribly'},
// ];

export const RatingNames: {[index: string]: string} = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

function OfferForm(): JSX.Element{
  const offerId = useAppSelector((state) => state.offer.offerInfo?.id);
  const dispatch = useAppDispatch();

  // const [formData, setFormData] = useState<FormDataType>({
  //   rating: '0',
  //   review: ''
  // });

  // const handleFormChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
  //   const {value, name} = evt.currentTarget;
  //   setFormData({...formData, [name]: value});
  // };
  const [review, setReview] = useState<FormInfo>({rating: '0', review: ''});

  const handleChange: TChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    setReview({...review, [name]: value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId) {
      dispatch(postComment({
        id: offerId,
        comment: review
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            setReview({
              rating: '0',
              review: ''
            });
          }
        });
    }
  };
  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingNames).map(([rate, title]) => <InputItem value={rate} title={title} key={title} onInputChange={handleChange} checkedValue={review.rating}/>).reverse()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        defaultValue={''}
        value={review.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < 50 || review.review.length > 300}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferForm;
