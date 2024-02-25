export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const Setting = {
  placeCount: 312
} as const;

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Root = '/',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
