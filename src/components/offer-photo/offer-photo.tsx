type OfferPhotoProps = {
  image: string;
}

function OfferPhoto({ image }: OfferPhotoProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  );
}

export default OfferPhoto;
