import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {getCards, redirectToRoute, setComments, setLoading, setNearOffers, setOffer, switchAutorizationStatus} from './action';
import { APIRoutes, AppRoute, AuthorizationStatus} from '../const';
import { CommentInfo,TAuthorization, TCard, TReview, TUserLogIn } from '../mocks/types.js';
import { dropToken, saveToken } from '../services/token.js';
import { store } from './index.js';


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
    const {data} = await api.post<TUserLogIn>(APIRoutes.Login, {email, password});
    saveToken(data.token);
    dispatch(switchAutorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dispatch(switchAutorizationStatus(AuthorizationStatus.NoAuth));
    dropToken();
  },
);

export const fetchOfferId = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/getOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TCard>(`${APIRoutes.Cards}/${id}`);
    dispatch(setOffer(data));
  },
);

export const fetchNearbyCards = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/getNearbyCards',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TCard[]>(`${APIRoutes.Cards}/${id}/nearby`);
    dispatch(setNearOffers(data));
  }
);

export const fetchOfferComments = createAsyncThunk<void, string, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoutes.Comments}/${id}`);
    dispatch(setComments(data));
  }
);

export const postComment = createAsyncThunk<void, CommentInfo, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async ({id, comment}, {getState, dispatch, extra: api}) => {
    const {data} = await api.post<TReview>(`${APIRoutes.Comments}/${id}`, {comment: comment.review, rating: +comment.rating});
    const state = getState();
    dispatch(setComments([...state.offer.comments, data]));
  }
);
