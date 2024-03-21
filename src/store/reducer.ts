import { TCard } from '../mocks/types';
import { cards } from '../mocks/mocks';
import { CITIES, CityName, SortOptions, TSortOptions } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeSort, choiceCity } from './action';

type initialStateType = {
  city: CityName;
  cards: TCard[];
  sortOption: TSortOptions;
};

const initialState: initialStateType = {
  sortOption: SortOptions.Popular,
  city: CITIES[0].name,
  cards,
};

const reducer = createReducer(initialState, (builder)=> {
  builder.addCase(choiceCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(changeSort, (state, action) => {
    state.sortOption = action.payload.option;
  });
});

export {reducer, choiceCity};
