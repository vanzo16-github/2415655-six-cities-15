import { imageOffer } from '../../mock';
import OfferPhoto from '../offer-photo/offer-photo';

function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imageOffer.map((photo) =>(
          <OfferPhoto
            key={photo.previewImage}
            image={photo.previewImage}
          />
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
