import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { TCard } from '../../mocks/types';

type MapProps = {
  cards: TCard[];
};

function Map({cards}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        leaflet
          .marker({
            lat: card.city.location.latitude,
            lng: card.city.location.longitude
          })
          .addTo(map);
      });
    }
  }, [map, cards]);


  return <section className="cities__map map" ref={mapRef}/>;
}

export default Map;

