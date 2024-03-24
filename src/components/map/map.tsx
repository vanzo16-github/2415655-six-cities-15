import {useRef, useEffect} from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { TCity, TOpenCard } from '../../mocks/types';
//import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  cards: TOpenCard[];
  selectedCard ?: TOpenCard | null;
  classMap: string;
  city: TCity;
};

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const currentIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

function Map({cards, selectedCard, classMap, city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude
        });
        marker
          .setIcon(
            selectedCard && selectedCard.id === card.id ? currentIcon : defaultIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }

  }, [map, cards, selectedCard, city]);


  return <section className={`map ${classMap}`} ref={mapRef}/>;
}

export default Map;

