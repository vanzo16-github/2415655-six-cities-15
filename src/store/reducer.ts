import { TCard } from '../mocks/types';
import { CITIES, CityName, SortOptions, TSortOptions } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeSort, chooseCity, getCards } from './action';

type initialStateType = {
  city: CityName;
  cards: TCard[];
  sortOption: TSortOptions;
};

const initialState: initialStateType = {
  sortOption: SortOptions.Popular,
  city: CITIES[0],
  cards: [],
};

const reducer = createReducer(initialState, (builder)=> {
  builder.addCase(chooseCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(getCards, (state, action) => {
    state.cards = action.payload.cards;
  });
  builder.addCase(changeSort, (state, action) => {
    state.sortOption = action.payload.option;
  });
});

export {reducer, chooseCity};
