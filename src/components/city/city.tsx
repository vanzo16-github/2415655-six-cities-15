type CityProps = {
  city: string;
}

function City({city}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
