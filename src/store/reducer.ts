import { TCard } from '../mocks/types';
import { CITIES, CityName, SortOptions, TSortOptions } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeSort, chooseCity, getCards, setLoading } from './action';

type initialStateType = {
  city: CityName;
  offers: {
    cards: TCard[];
    isLoading: boolean;
  };
  sortOption: TSortOptions;
};

const initialState: initialStateType = {
  sortOption: SortOptions.Popular,
  city: CITIES[0],
  offers: {
    cards: [],
    isLoading: false
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
    state.offers.isLoading = action.payload;
  });
});

export {reducer, chooseCity};
