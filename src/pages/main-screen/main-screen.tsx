import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CountPlaces from '../../components/count-places/count-places';
import Locations from '../../components/locations/locations';
import Places from '../../components/places/places';
import Sort from '../../components/sort/sort';
import { Helmet } from 'react-helmet-async';
import { TCard } from '../../mocks/types';

type MainScreenProps = {
  cards: TCard[];
  placeCount: number;
}

function MainScreen({ cards, placeCount }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <Helmet>
          <title>Cities</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <CountPlaces placeCount={placeCount}/>
              <Sort/>
              <Places cards={cards}/>
            </section>
            <div className="cities__right-section">
              <Map cards={cards}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
