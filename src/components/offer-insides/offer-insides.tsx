import { insideOffer } from '../../mocks/mocks';
import OfferInsideItem from '../offer-inside-item/offer-inside-item';

function OfferInside(): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {insideOffer.map((inside) =>(
          <OfferInsideItem
            key={inside.title}
            title={inside.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
