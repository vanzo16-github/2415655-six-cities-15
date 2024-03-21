
import { createAction } from '@reduxjs/toolkit';
import { CityName, TSortOptions } from '../const';

export const choiceCity = createAction<CityName>('offers/choiceCity');

export const changeSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');
