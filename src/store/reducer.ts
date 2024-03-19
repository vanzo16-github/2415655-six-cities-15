import { TCard } from '../mocks/types';
import { cards } from '../mocks/mocks';
import { CITIES, CityName } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { choiceCity } from './action';

type initialStateType = {
  city: CityName;
  cards: TCard[];
};

const initialState: initialStateType = {
  city: CITIES[0].name,
  cards,
};

const reducer = createReducer(initialState, (builder)=> {
  builder.addCase(choiceCity, (state, action) => {
    state.city = action.payload;
  });
});

export {reducer, choiceCity};
