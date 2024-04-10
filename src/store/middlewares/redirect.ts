import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import { reducer } from '../reducer.1';
import browserHistory from '../../browser-history-api';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'user/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
