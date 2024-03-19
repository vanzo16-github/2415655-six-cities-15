
import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';

export const choiceCity = createAction<CityName>('offers/choiceCity');
