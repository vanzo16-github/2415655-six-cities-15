import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { TCard } from '../../mocks/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  cards: TCard[];
  selectedCard ?: TCard | null;
};

function Map({cards, selectedCard }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        leaflet
          .marker({
            lat: card.city.location.latitude,
            lng: card.city.location.longitude
          },{
            icon: selectedCard && selectedCard.id === card.id ? currentCustomIcon : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, cards, selectedCard, defaultCustomIcon, currentCustomIcon]);


  return <section className="cities__map map" ref={mapRef}/>;
}

export default Map;

