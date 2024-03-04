type CityProps = {
  city: string;
}

function City({city}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <span>{city}</span>
    </li>
  );
}

export default City;
