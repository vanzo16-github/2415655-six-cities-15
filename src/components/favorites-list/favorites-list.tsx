import { TOpenCard } from '../../mocks/types';
import FavoriteCard from '../favorite-card/favorite-card';

type CityGroupType = {
  [key: string]: TOpenCard[];
}

function groupOffersByCity(items: TOpenCard[]): CityGroupType {

  const groupedItems = items.reduce((accumulator: CityGroupType, item) => {
    const cityName = item.city.name;

    if (!accumulator[cityName]) {
      accumulator[cityName] = [];
    }

    accumulator[cityName].push(item);

    return accumulator;
  }, {});

  return groupedItems;
}

type FavoritesListProps = {
  cards: TOpenCard[];
}

function FavoritesList({cards}: FavoritesListProps): JSX.Element {
  const offersGroupedByCity = groupOffersByCity(cards);
  return (
    <ul className="favorites__list">
      {Object.keys(offersGroupedByCity).map((city) => <FavoriteCard key={city} city={city} cards={offersGroupedByCity[city]}/>)}
    </ul>
  );
}

export default FavoritesList;
