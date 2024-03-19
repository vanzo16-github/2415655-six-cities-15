import { MouseEventHandler } from 'react';
import { CityName } from '../../const';

type CityProps = {
  city: CityName;
  selectedCity: string;
  onClick: MouseEventHandler<HTMLElement>;

}

function City({city, selectedCity, onClick}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${selectedCity === city && 'tabs__item--active'}`} onClick={onClick}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
