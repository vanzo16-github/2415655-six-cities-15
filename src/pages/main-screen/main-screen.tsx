import Header from '../../components/header/header';
import Map from '../../components/map/map';
//import CountPlaces from '../../components/count-places/count-places';
//import Locations from '../../components/locations/locations';
import Places from '../../components/places/places';
import Sort from '../../components/sort/sort';
import { Helmet } from 'react-helmet-async';
import { TCard } from '../../mocks/types';
import { useState } from 'react';
import { CITIES, SortOptions } from '../../const';
import City from '../../components/city/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { choiceCity } from '../../store/reducer';

const sortedCard = {
  [SortOptions.Popular]: (cards: TCard[]) => cards,
  [SortOptions.Low]: (cards: TCard[]) => cards.sort((firstCard, secondCard) => firstCard.price - secondCard.price),
  [SortOptions.High]: (cards: TCard[]) => cards.sort((firstCard, secondCard) => secondCard.price - firstCard.price),
  [SortOptions.Top]: (cards: TCard[]) => cards.sort((firstCard, secondCard) => secondCard.rating - firstCard.rating),
};

function MainScreen(): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<TCard | null>();

  const handleSelectActiveCard = (card?: TCard) => {
    setSelectedCard(card);
  };
  const activeSort = useAppSelector((state) => state.sortOption);

  const offers = useAppSelector((state) => state.cards);
  const currentCity = useAppSelector((state) => state.city);

  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  const dispatch = useAppDispatch();


  const currentCityLocation = currentOffers.find((item) => item.city.name === currentCity);


  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <Helmet>
          <title>Cities</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (<City city={city.name} selectedCity={currentCity} key={city.name} onClick={(evt) => {
                evt.preventDefault();
                dispatch(choiceCity(city.name));
              }}
              // eslint-disable-next-line react/jsx-closing-bracket-location
              />))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <Sort/>
              <Places cards={sortedCard[activeSort]([...currentOffers])} handleHover={handleSelectActiveCard}/>
            </section>
            <div className="cities__right-section">
              <Map cards={currentOffers} selectedCard={selectedCard} classMap='cities__map' city={currentCityLocation}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
