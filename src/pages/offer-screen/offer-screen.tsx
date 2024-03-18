import Header from '../../components/header/header';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
//import NearPlaces from '../../components/near-places/near-places';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import { useAppSelector } from '../../hooks';


function OfferScreen(): JSX.Element {
  const { id } = useParams();

  const offers = useAppSelector((state) => state.cards);
  // const currentCity = useAppSelector((state) => state.city);

  const offerParams = offers.find((item) => item.id === id);
  const nearOffers = offers.filter((item) => item.id !== id);
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
          <Map cards={[offerParams, ...nearOffersThree]} selectedCard={offerParams} classMap='offer__map'/>

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
