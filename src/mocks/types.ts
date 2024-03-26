
export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TCard = {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    city: TCity;
    location: TLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    images: string[];
    maxAdults: number;
    comments: TReview[];
  }

export type TLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
  }

export type TCity = {
    name: string;
    location: TLocation;
  }

export type TOpenCard = Omit<TCard, 'images' | 'description' | 'bedrooms' | 'goods' | 'maxAdults' | 'comments' | 'host'>

export type TAuthorization = {
  email: string;
  password: string;
}

export type TUserLogIn = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

//export type TUser = Omit<TUserLogIn, 'images' | 'description' | 'bedrooms' | 'goods' | 'maxAdults' | 'comments' | 'host'>
