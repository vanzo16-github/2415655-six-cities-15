import Header from '../../components/header/header';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
//import NearPlaces from '../../components/near-places/near-places';
import { TCard } from '../../mocks/types';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';

type OfferScreenProps = {
  cards: TCard[];
}

function OfferScreen({cards}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const offerParams = cards.find((item) => item.id === id);
  const nearOffers = cards.filter((item) => item.id !== id);
  const nearOffersThree = nearOffers.slice(0, 3);

  if (typeof offerParams === 'undefined') {
    return <NotFoundScreen />;
  }

  const {images, title, isPremium, maxAdults, type, bedrooms, goods, price, comments} = offerParams;
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images}/>
          <OfferContainer title={title} isPremium={isPremium} maxAdults={maxAdults} type={type} bedrooms={bedrooms} features={goods} price={price} reviews={comments}/>
          <Map cards={nearOffersThree} classMap='offer__map'/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearOffersThree.map((card) =>(
                <PlaceCard
                  key={card.id}
                  card={card} handleHover={function (): void {
                    throw new Error('Function not implemented.');
                  } }
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
