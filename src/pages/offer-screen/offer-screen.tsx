import Header from '../../components/header/header';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';

function OfferScreen(): JSX.Element {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery/>
          <OfferContainer/>
          <Map/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
