import { TCard } from './types';

export const cards: TCard[] = [
  {
    id: '1',
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
      name: 'Amsterdam',
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
    title: 'Offer-4',
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
  {
    id: '5',
    title: 'Offer-5',
    type: 'house',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    price: 100,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 8
      }
    },
    location: {
      latitude: 53.574341000000004,
      longitude: 10.022654000000001,
      zoom: 16
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
    id: '6',
    title: 'Offer-6',
    type: 'house',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    price: 100,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
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
    id: '7',
    title: 'Offer-7',
    type: 'house',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    price: 100,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 8
      }
    },
    location: {
      latitude: 50.945361,
      longitude: 6.935974,
      zoom: 16
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
    id: '8',
    title: 'Offer-8',
    type: 'house',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    price: 100,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 8
      }
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
      zoom: 16
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
    id: '9',
    title: 'Offer-9',
    type: 'house',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    price: 100,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 8
      }
    },
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16
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
    id: '10',
    title: 'Offer-10',
    type: 'house',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    price: 100,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 8
      }
    },
    location: {
      latitude: 53.574341000000004,
      longitude: 10.022654000000001,
      zoom: 16
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
  }
];

