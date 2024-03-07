import Header from '../../components/header/header';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import NearPlaces from '../../components/near-places/near-places';
import OfferMap from '../../components/offer-map/offer-map';
import { TCard } from '../../mocks/types';

type OfferScreenProps = {
  cards: TCard[];
}

function OfferScreen({cards}: OfferScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery/>
          <OfferContainer/>
          <OfferMap/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces cards={cards}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
