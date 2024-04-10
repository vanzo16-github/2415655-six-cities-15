import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function Header(): JSX.Element {
  const userInfo = useAppSelector((state) => state.userInfo);

  const offers = useAppSelector((state) => state.offers.cards);
  const favoriteOffers = offers.filter((card) => card.isFavorite);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {pathname} = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
  const isLoginPage = pathname === AppRoute.Login;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
  const isFavoritePage = pathname === AppRoute.Favorites;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleLogOut = () => {
    dispatch(logoutAction())
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          if (isFavoritePage) {
            navigate(AppRoute.Login);
          } else {
            navigate(AppRoute.Root);
          }
        }
      });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {isLoginPage ? null : (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userInfo && userInfo.email}</span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>
                )}
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    {authorizationStatus === AuthorizationStatus.Auth ? (<span className="header__signout" onClick={handleLogOut}>Sign out</span>) : (<><div className="header__avatar-wrapper user__avatar-wrapper"></div><span className="header__login">Sign in</span></>)}
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
