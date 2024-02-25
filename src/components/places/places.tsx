import PlaceCard from '../place-card/place-card';
import { apartments } from '../../mock';


function Places(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {apartments.map((card) =>(
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

export default Places;
