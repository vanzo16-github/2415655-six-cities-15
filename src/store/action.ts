
import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, CityName, TSortOptions } from '../const';
import { TCard, TOpenCard, TReview } from '../mocks/types';

export const chooseCity = createAction<CityName>('offers/chooseCity');

export const changeSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');

export const getCards = createAction<{cards: TOpenCard[]}>('cards/getCards');

export const setLoading = createAction<boolean>('cards/setLoading');

export const switchAutorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const setOffer = createAction<TCard>('offer/setOffer');

export const setNearOffers = createAction<TOpenCard[]>('offer/setNearOffer');

export const setComments = createAction<TReview[]>('offer/setOfferComments');
