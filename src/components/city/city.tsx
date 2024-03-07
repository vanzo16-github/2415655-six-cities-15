type CityProps = {
  city: string;
}

function City({city}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <div className="locations__item-link tabs__item">
        <span>{city}</span>
      </div>
    </li>
  );
}

export default City;
