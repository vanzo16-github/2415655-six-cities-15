
import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, CityName, TSortOptions } from '../const';
import { TCard, TOpenCard, TReview, TUserLogIn } from '../mocks/types';

export const chooseCity = createAction<CityName>('cards/chooseCity');

export const changeSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');

export const getCards = createAction<{cards: TOpenCard[]}>('cards/getCards');

export const setLoading = createAction<boolean>('cards/setLoading');

export const favoriteRefresh = createAction<boolean>('cards/setRefresh');

export const switchBoolean = createAction<boolean>('cards/setLoading');

export const switchAutorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');

export const switchFavorite = createAction<{cards: TOpenCard[]}>('user/switchFavorite');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const setOffer = createAction<TCard>('offer/setOffer');

export const setNearOffers = createAction<TOpenCard[]>('offer/setNearOffer');

export const setComments = createAction<TReview[]>('offer/setOfferComments');

export const setUserInfo = createAction<TUserLogIn | null>('user/setLoggedUserInfo');

export const getFavoriteCards = createAction<{cards: TOpenCard[]}>('favorites/getCards');

export const updateOffer = createAction<TCard>('offers/updateOffer');
