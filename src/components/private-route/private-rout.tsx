import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === (AuthorizationStatus.NoAuth || AuthorizationStatus.Auth)
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}

export default PrivateRoute;
