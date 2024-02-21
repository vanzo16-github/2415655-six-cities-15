export const Apartments = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: false,
    previewImage: 'img/room.jpg'
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg'
  }
];

export const nearPlace = Apartments.splice(1);
