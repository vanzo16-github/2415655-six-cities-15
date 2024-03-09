import Header from '../../components/header/header';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import NearPlaces from '../../components/near-places/near-places';
import OfferMap from '../../components/offer-map/offer-map';
import { TCard } from '../../mocks/types';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type OfferScreenProps = {
  cards: TCard[];
}

function OfferScreen({cards}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const offerParams = cards.find((item) => item.id === id);

  if (typeof offerParams === 'undefined') {
    return <NotFoundScreen />;
  }

  const {images, title, isPremium, maxAdults, type, bedrooms, goods} = offerParams;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images}/>
          <OfferContainer title={title} isPremium={isPremium} maxAdults={maxAdults} type={type} bedrooms={bedrooms} features={goods}/>
          <OfferMap/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <NearPlaces cards={cards}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
