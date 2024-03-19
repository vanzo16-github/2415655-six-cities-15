import {useRef, useEffect} from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { TCard } from '../../mocks/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  cards: TCard[];
  selectedCard ?: TCard | null;
  classMap: string;
  city?: TCard | null;
};

function Map({cards, selectedCard, classMap, city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

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
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
      cards.forEach((card) => {
        leaflet
          .marker({
            lat: card.city.location.latitude,
            lng: card.city.location.longitude
          },{
            icon: selectedCard && selectedCard.id === card.id ? currentCustomIcon : defaultCustomIcon
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, cards, selectedCard, defaultCustomIcon, currentCustomIcon, city]);


  return <section className={`map ${classMap}`} ref={mapRef}/>;
}

export default Map;

