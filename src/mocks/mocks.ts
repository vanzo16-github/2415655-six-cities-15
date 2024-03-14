import { TCard } from './types';

export const cards: TCard[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Offer-1',
    type: 'apartment',
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'
    ],
    maxAdults: 4,
    comments: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Oliver Conner',
          avatarUrl: 'https://url-to-image/image.png',
          isPro: false
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 2
      },
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b6',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Oliver Conner',
          avatarUrl: 'https://url-to-image/image.png',
          isPro: false
        },
        comment: 'Comment 1',
        rating: 2
      },
    ]
  },
  {
    id: '2',
    title: 'Offer-2',
    type: 'apartment',
    previewImage: 'img/apartment-02.jpg',
    price: 140,
    city: {
      name: 'Tokio',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 55.35514938496378,
      longitude: 7.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'
    ],
    maxAdults: 4,
    comments: [],
  },
  {
    id: '3',
    title: 'Offer-3',
    type: 'apartment',
    previewImage: 'img/apartment-01.jpg',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 54.35514938496378,
      longitude: 1.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'
    ],
    maxAdults: 4,
    comments: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Oliver Conner',
          avatarUrl: 'https://url-to-image/image.png',
          isPro: false
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Offer-3',
    type: 'apartment',
    previewImage: 'img/apartment-01.jpg',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 54.35514938496378,
      longitude: 1.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'
    ],
    maxAdults: 4,
    comments: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Oliver Conner',
          avatarUrl: 'https://url-to-image/image.png',
          isPro: false
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 2
      },
    ]
  },
];
