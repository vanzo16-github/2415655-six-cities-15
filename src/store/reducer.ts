import { TCard } from '../mocks/types';
import { cards } from '../mocks/mocks';
import { CITIES, CityName } from '../const';
import { ActionType, choiceCity } from './action';

type initialStateType = {
  city: CityName;
  cards: TCard[];
};

const initialState: initialStateType = {
  city: CITIES[0].name,
  cards,
};

function reducer(state: initialStateType = initialState, action: {payload: unknown; type: ActionType}) :
initialStateType {
  switch (action.type) {
    case ActionType.ChoiceCity:
      return {
        ...state,
        city: action.payload as CityName,
      };
    default:
      return state;
  }
}

export {reducer, choiceCity};
