import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-rout';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import { checkAuthAction, fetchCards } from '../../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history-api';
import OfferScreen from '../../pages/offer-screen/offer-screen';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.offers.isLoading);

  useEffect(() => {
    dispatch(fetchCards());
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen/>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginScreen/>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferScreen/>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />

        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
