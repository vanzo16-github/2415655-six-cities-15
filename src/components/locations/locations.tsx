import City from '../city/city';
import { CITIES } from '../../const';

function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => <City city={city} key={city}/>)}
      </ul>
    </section>
  );
}

export default Locations;
