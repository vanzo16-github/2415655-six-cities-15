type OfferFeatureProps = {
  title: string;
  type: string;
}

function OfferFeatureItem({ title, type }: OfferFeatureProps): JSX.Element {
  return (
    <li className={type}>
      {title}
    </li>
  );
}

export default OfferFeatureItem;
