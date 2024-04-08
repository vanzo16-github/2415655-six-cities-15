import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Places from '../../components/places/places';
import Sort from '../../components/sort/sort';
import { Helmet } from 'react-helmet-async';
import { TOpenCard } from '../../mocks/types';
import { useState } from 'react';
import { CITIES, SortOptions } from '../../const';
import City from '../../components/city/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { chooseCity } from '../../store/reducer';

const sortedCard = {
  [SortOptions.Popular]: (cards: TOpenCard[]) => cards,
  [SortOptions.Low]: (cards: TOpenCard[]) => cards.sort((firstCard, secondCard) => firstCard.price - secondCard.price),
  [SortOptions.High]: (cards: TOpenCard[]) => cards.sort((firstCard, secondCard) => secondCard.price - firstCard.price),
  [SortOptions.Top]: (cards: TOpenCard[]) => cards.sort((firstCard, secondCard) => secondCard.rating - firstCard.rating),
};

function MainScreen(): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<TOpenCard | null>();

  const handleSelectActiveCard = (card?: TOpenCard) => {
    setSelectedCard(card);
  };
  const activeSort = useAppSelector((state) => state.sortOption);
  const offers = useAppSelector((state) => state.offers.cards);
  // eslint-disable-next-line no-console
  console.log(offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const dispatch = useAppDispatch();

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
              {CITIES.map((city) => (<City city={city} selectedCity={currentCity} key={city.name} onClick={(evt) => {
                evt.preventDefault();
                dispatch(chooseCity(city));
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
              <b className="places__found">{currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in {currentCity.name}</b>
              <Sort/>
              <Places cards={sortedCard[activeSort]([...currentOffers])} handleHover={handleSelectActiveCard}/>
            </section>
            <div className="cities__right-section">
              <Map cards={currentOffers} selectedCard={selectedCard} classMap='cities__map' city={currentCity}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
