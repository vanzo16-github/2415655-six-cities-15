import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchOfferComments, fetchNearbyCards, fetchOfferId } from '../../store/api-actions';
import OfferTitle from '../../components/offer-title/offer-title';
import OfferRating from '../../components/offer-rating/offer-rating';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferPrice from '../../components/offer-price/offer-price';
import OfferInside from '../../components/offer-insides/offer-insides';
import PlaceCard from '../../components/place-card/place-card';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferReview from '../../components/offer-review/offer-review';
import { TOpenCard } from '../../mocks/types';
//import { AuthorizationStatus } from '../../const';

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferId(id));
      dispatch(fetchNearbyCards(id));
      dispatch(fetchOfferComments(id));
    }
  }, [id, dispatch]);

  const [, setSelectedCard] = useState<TOpenCard | null>();

  const handleSelectActiveCard = (card?: TOpenCard) => {
    setSelectedCard(card);
  };


  const offerInfo = useAppSelector((state) => state.offer.offerInfo);
  const nearbyCards = useAppSelector((state) => state.offer.nearbyCards);
  const nearOffersThree = nearbyCards.slice(0, 3);
  const offerComments = useAppSelector((state) => state.offer.comments);
  const offerCommentsSliced = offerComments.slice(0, 10);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);


  if (!offerInfo) {
    return <NotFoundScreen />;
  }

  const {images, isPremium, maxAdults, type, bedrooms, goods, price, description} = offerInfo;
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <OfferTitle card={offerInfo}/>
              <OfferRating card={offerInfo}/>
              <OfferFeatures maxAdults={maxAdults} type={type} bedrooms={bedrooms}/>
              <OfferPrice price={price}/>
              <OfferInside features={goods}/>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offerInfo.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offerInfo.host.name}
                  </span>
                  {offerInfo.host.isPro && (<span className="offer__user-status">Pro</span>)}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <OfferReview reviews={offerCommentsSliced} isAuth={authorizationStatus}/>
              </section>
            </div>
          </div>
          <Map cards={[offerInfo, ...nearOffersThree]} selectedCard={offerInfo} city={offerInfo.city} classMap='offer__map'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearOffersThree.map((card) =>(
                <PlaceCard
                  key={card.id}
                  card={card} handleHover={handleSelectActiveCard}
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
