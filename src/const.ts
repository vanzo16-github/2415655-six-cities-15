export const CITIES = [{
  name: 'Paris'
},
{
  name: 'Cologne'
},
{
  name: 'Brussels'
},
{
  name: 'Amsterdam'
},
{
  name: 'Hamburg'
},
{
  name: 'Dusseldorf'
}
] as const;

export type CityName = (typeof CITIES)[number]['name'];

export const Setting = {
  placeCount: 312
} as const;

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Root = '/',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITY_DEFAULT = {
  name: 'Amsterdam',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
