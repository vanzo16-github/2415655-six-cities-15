type OfferFeaturesProps = {
  maxAdults: number;
  type: string;
  bedrooms: number;
}

function OfferFeatures({ maxAdults, type, bedrooms }: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{type}</li>
      <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
      <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
    </ul>
  );
}

export default OfferFeatures;
