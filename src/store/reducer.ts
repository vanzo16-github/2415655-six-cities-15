import {createReducer} from '@reduxjs/toolkit';
import {choiceCity} from './action';
import { TCard } from '../mocks/types';
import { cards } from '../mocks/mocks';

type initialStateType = {
  city: string;
  cards: TCard[];
};

const initialState: initialStateType = {
  city: 'Paris',
  cards: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choiceCity, (state) => {
      state.cards = cards;
    });
});

export {reducer};
