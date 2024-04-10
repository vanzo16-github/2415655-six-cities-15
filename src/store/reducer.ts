import { TCard, TOpenCard, TReview, TUserLogIn } from '../mocks/types';
import { AuthorizationStatus, CITIES, CityName, SortOptions, TSortOptions } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeSort, chooseCity, getCards, getFavoriteCards, setComments, setLoading, setNearOffers, setOffer, setUserInfo, switchAutorizationStatus, switchFavorite } from './action';
import { changeFavoriteStatus, fetchFavoriteCards } from './api-actions';

type initialStateType = {
  city: CityName;
  offers: {
    cards: TOpenCard[];
    isLoading: boolean;
  };
  favorite: {
    cards: TOpenCard[];
    isFavorite: boolean;
    isLoadingChangeStatus: boolean;
  };
  sortOption: TSortOptions;
  authorizationStatus: AuthorizationStatus;
  userInfo: TUserLogIn | null;
  offer: {
    offerInfo: TCard | null;
    card: TCard[];
    nearbyCards: TOpenCard[];
    comments: TReview[];
    isFavorite: boolean;
  };
};

const initialState: initialStateType = {
  sortOption: SortOptions.Popular,
  city: CITIES[0],
  offers: {
    cards: [],
    isLoading: false
  },
  favorite: {
    cards: [],
    isFavorite: false,
    isLoadingChangeStatus: false,
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  offer: {
    offerInfo: null,
    nearbyCards: [],
    comments: [],
    isFavorite: false,
    card: []
  },
};

const reducer = createReducer(initialState, (builder)=> {
  builder.addCase(chooseCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(getCards, (state, action) => {
    state.offers.cards = action.payload.cards;
  });
  builder.addCase(changeSort, (state, action) => {
    state.sortOption = action.payload.option;
  });
  builder.addCase(setLoading, (state, action) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    state.offers.isLoading = action.payload;
  });
  builder.addCase(switchAutorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setOffer, (state, action) => {
    state.offer.offerInfo = action.payload;
  });
  builder.addCase(setNearOffers, (state, action) => {
    state.offer.nearbyCards = action.payload;
  });
  builder.addCase(setComments, (state, action) => {
    state.offer.comments = action.payload;
  });
  builder.addCase(setUserInfo, (state, action) => {
    state.userInfo = action.payload;
  });
  builder.addCase(switchFavorite, (state, action) => {
    state.favorite.cards = action.payload.cards;
  });
  builder.addCase(getFavoriteCards , (state, action) => {
    state.favorite.cards = action.payload.cards;
  });
  builder.addCase(fetchFavoriteCards.fulfilled, (state, action) => {
    state.favorite.cards = action.payload;
  });
  builder.addCase(changeFavoriteStatus.fulfilled, (state, action) => {
    const index = state.offers.cards.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      state.offers.cards[index].isFavorite = action.payload.isFavorite;
    }
    if (state.offer.offerInfo && state.offer.offerInfo.id === action.payload.id) {
      state.offer.offerInfo.isFavorite = action.payload.isFavorite;
    }
  });
});

export {reducer, chooseCity};
