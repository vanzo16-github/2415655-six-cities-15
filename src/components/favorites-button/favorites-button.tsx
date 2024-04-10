import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatus } from '../../store/api-actions';

type FavoritesButtonProps = {
  cardId: string;
  className?: string;
  isFavorite: boolean;
}

function FavoritesButton({isFavorite, cardId, className = 'place-card'}: FavoritesButtonProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(changeFavoriteStatus({
      offerId: cardId,
      status: Number(!isFavorite),
    }));

  };
  return (
    <button
      className={`${className}__bookmark-button button ${isFavorite && `${className}__bookmark-button--active`}`}
      type="button"
      onClick={handleBtnClick}
    >
      <svg className={`${className}__bookmark-icon`} width={className === 'offer' ? 31 : 18} height={className === 'offer' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoritesButton;
