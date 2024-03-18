import { MouseEventHandler } from 'react';
import { CityName } from '../../const';

type CityProps = {
  city: CityName;
  onClick: MouseEventHandler<HTMLElement>;

}

function City({city, onClick}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" onClick={onClick}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
