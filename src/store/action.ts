import { CityName } from '../const';

export const enum ActionType {
  ChoiceCity = 'offers/choiceCity'
}

export const choiceCity = (city: CityName) => ({
  payload: city,
  type: ActionType.ChoiceCity
});
