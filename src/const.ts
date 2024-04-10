export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
] as const;

export type CityName = (typeof CITIES)[number];

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

type ValueOf<T> = T[keyof T];
export type TSortOptions = ValueOf<typeof SortOptions>;


export const SortOptions = {
  Popular: 'Popular',
  Low: 'Price: low to high',
  High: 'Price: high to low',
  Top: 'Top rated first',
} as const;

export enum APIRoutes {
  Cards = '/offers',
  FavoriteCards = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  City = 'CITY',
  User = 'USER',
  Cards = 'CARDS',
  Offer = 'OFFER'
}

export const RatingNames: {[index: string]: string} = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

export enum FavoritesStatus {
  Added = 1,
  Removed = 0
}
