import PlaceCard from '../place-card/place-card';
import { nearPlaces } from '../../mock';

function NearPlaces(): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {nearPlaces.map((card) =>(
        <PlaceCard
          key={card.id}
          image={card.previewImage}
          title={card.title}
          type={card.type}
          price={card.price}
          isPremium={card.isPremium}
        />
      ))}
    </div>
  );
}

export default NearPlaces;
