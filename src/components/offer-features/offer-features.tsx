import { featuresOffer } from '../../mocks/mocks';
import OfferFeature from '../offer-feature-item/offer-feature-item';

function OfferFeatures(): JSX.Element {
  return (
    <ul className="offer__features">
      {featuresOffer.map((feature) =>(
        <OfferFeature
          key={feature.title}
          title={feature.title}
          type={feature.type}
        />
      ))}
    </ul>
  );
}

export default OfferFeatures;
