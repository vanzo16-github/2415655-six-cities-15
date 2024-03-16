import { cards } from '../../mocks/mocks';
import { TCard } from '../../mocks/types';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (card: TCard): TCard[] => {
  const nearOffers: TCard[] = [];

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id !== card.id && cards[i].city.name === card.city.name) {
      nearOffers.push(cards[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }
  return nearOffers;
};


