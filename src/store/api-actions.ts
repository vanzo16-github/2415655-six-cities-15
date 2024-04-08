import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {favoriteRefresh, getCards, redirectToRoute, setComments, setLoading, setNearOffers, setOffer, setUserInfo, switchAutorizationStatus, switchFavorite} from './action';
import { APIRoutes, AppRoute, AuthorizationStatus} from '../const';
import { CommentInfo,TAuthorization, TCard, TOpenCard, TReview, TUserLogIn } from '../mocks/types.js';
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

export const fetchFav = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cards/fetchFav',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<TCard[]>(APIRoutes.FavoriteCards);
    dispatch(setLoading(false));
    dispatch(getCards({cards: data}));
  },
);
// export const fetchCards = createAsyncThunk<TOpenCard[], undefined, {
//   dispatch: typeof store.dispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'cards/fetchCards',
//   async (_arg, {extra: api}) => {
//     const {data} = await api.get<TOpenCard[]>(APIRoutes.Cards);
//     return data;
//   }
// );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TUserLogIn>(APIRoutes.Login);
      dispatch(switchAutorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserInfo(data));

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
    dispatch(setUserInfo(data));
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
    dispatch(setUserInfo(null));
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

// export const fetchComments = createAsyncThunk<TReview[], string, {
//   dispatch: typeof store.dispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'offer/fetchOfferComments',
//   async (id, {extra: api}) => {
//     const {data} = await api.get<TReview[]>(`${APIRoutes.Comments}/${id}`);
//     return data;
//   }
// );

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

// export const fetchFavoriteCards = createAsyncThunk<void, undefined, {
//   dispatch: typeof store.dispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'favorite/fetchFavoriteCards',
//   async (_arg, {dispatch, extra: api}) => {
//     dispatch(setLoading(true));
//     const {data} = await api.get<TCard[]>(APIRoutes.FavoriteCards);
//     dispatch(setLoading(false));
//     dispatch(getCards({cards: data}));
//   }
// );

export const changeFavoriteStatus = createAsyncThunk<void, {offerId: string; status: number; isFavorite: boolean}, {
  dispatch: typeof store.dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/changeStatus',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<TOpenCard[]>(`${APIRoutes.FavoriteCards}/${offerId}/${status}`);
    // dispatch(setOffer(data));
    dispatch(switchFavorite({cards: data}));
    dispatch(favoriteRefresh(true));
  }
);
