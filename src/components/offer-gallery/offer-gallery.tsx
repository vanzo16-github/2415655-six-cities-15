import OfferPhoto from '../offer-photo/offer-photo';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">

      <div className="offer__gallery">
        {images.map((image) => <OfferPhoto image={image} key={image} />)}
      </div>
    </div>
  );
}

export default OfferGallery;
