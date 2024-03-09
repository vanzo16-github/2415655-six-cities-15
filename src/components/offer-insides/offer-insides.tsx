import OfferInsideItem from '../offer-inside-item/offer-inside-item';

type OfferInsideProps = {
  features: string[];
}

function OfferInside({ features }: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {features.map((inside) =>(
          <OfferInsideItem
            key={inside}
            title={inside}
          />
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
