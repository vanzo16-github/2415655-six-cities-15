import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CountPlaces from '../../components/count-places/count-places';
import Locations from '../../components/locations/locations';
import Places from '../../components/places/places';
import Sort from '../../components/sort/sort';

type HeroScreenProps = {
  placeCount: number;
}

function HeroScreen({placeCount}: HeroScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
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
              <Places/>
            </section>
            <div className="cities__right-section">
              <Map/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroScreen;
