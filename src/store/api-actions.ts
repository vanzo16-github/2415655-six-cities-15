import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {getCards, redirectToRoute, setLoading, switchAutorizationStatus} from './action';
import { APIRoutes, AppRoute, AuthorizationStatus} from '../const';
import { TAuthorization, TCard, TUserLogIn } from '../mocks/types.js';
import { dropToken, saveToken } from '../services/token.js';


export const fetchCards = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cards/fetchCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<TCard[]>(APIRoutes.Cards);
    dispatch(setLoading(false));
    dispatch(getCards({cards: data}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(switchAutorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(switchAutorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);
export const loginAction = createAsyncThunk<void, TAuthorization, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<TUserLogIn>(APIRoutes.Login, {email, password});
    saveToken(token);
    dispatch(switchAutorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);
// export const loginAction = createAsyncThunk<void, TAuthorization, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/login',
//   async ({email, password}, {dispatch, extra: api}) => {
//     const {data} = await api.post<TUserLogIn>(APIRoutes.Login, {email, password});
//     saveToken(data.token);
//     dispatch(switchAutorizationStatus(AuthorizationStatus.Auth));
//     dispatch(redirectToRoute(AppRoute.Root));
//   },
// );

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(switchAutorizationStatus(AuthorizationStatus.NoAuth));
  },
);


