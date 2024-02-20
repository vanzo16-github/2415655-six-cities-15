import City from '../city/city';

function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <City/>
        <City/>
        <City/>
        <City/>
        <City/>
      </ul>
    </section>
  );
}

export default Locations;
