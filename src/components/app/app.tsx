import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
//import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-rout';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import { checkAuthAction, fetchCards } from '../../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <PrivateRoute>
                <MainScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute>
                <LoginScreen/>
              </PrivateRoute>
            }
          />
          {/* <Route
            path={AppRoute.Offer}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <OfferScreen/>
              </PrivateRoute>
            }
          /> */}
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
