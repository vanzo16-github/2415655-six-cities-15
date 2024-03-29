import Header from '../../components/header/header';
import OfferContainer from '../../components/offer-container/offer-container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TCard } from '../../mocks/types';
import { useEffect, useState } from 'react';
import { getOfferInfoByID } from '../../store/api-actions';

// function ImageItem({image}: {image: string}): JSX.Element {
//   return (
//     <div className="offer__image-wrapper">
//       <img className="offer__image" src={image} alt="Photo studio" />
//     </div>
//   );
// }

// function ImagesList({images}: {images: string[]}): JSX.Element {
//   return (
//     <div className="offer__gallery-container container">
//       <div className="offer__gallery">
//         {images.map((image) => <ImageItem image={image} key={image} />)}
//       </div>
//     </div>
//   );
// }

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOfferInfoByID(id));
    }
  }, [id, dispatch]);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getOfferInfoByID(id));
  //   }
  // }, [id, dispatch]);

  // const [selectedCard, setSelectedCard] = useState<TCard | null>();

  // const handleSelectActiveCard = (card?: TCard) => {
  //   setSelectedCard(card);
  // };
  // const activeSort = useAppSelector((state) => state.sortOption);

   //const offers = useAppSelector((state) => state.offer);
  // const currentCity = useAppSelector((state) => state.city);
 // console.log(offers);
 // const offerParams = offers.find((item) => item.id === id);
  // const offers = useAppSelector((state) => state.cards);
  // const currentCity = useAppSelector((state) => state.city);
  //const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  //const currentCityLocation = offers.find((item) => item.city.name === currentCity);
  // console.log(currentCity)
  // const offerParams = offers.find((item) => item.id === id);
 // const nearOffers = offers.filter((item) => item.id !== id);
  //const nearOffersThree = nearOffers.slice(0, 3);
  // const [selectedCard, setSelectedCard] = useState<TCard | null>();

  // const handleSelectActiveCard = (card?: TCard) => {
  //   setSelectedCard(card);
  // };

  const offer = useAppSelector((state) => state.offer.offerInfo);
  const currentCity = useAppSelector((state) => state.city);
  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  //const currentOffers = offer.filter((offer) => offer.city.name === currentCity.name);
   const currentCityLocation = offer.find((item) => item);

  console.log(offer)


  //  const nearOffers = offers.filter((item) => item.id !== id);
  // const nearOffersThree = nearOffers.slice(0, 3);


  if (typeof offer === 'undefined') {
    return <NotFoundScreen />;
  }

  //const {images, title, isPremium, maxAdults, type, bedrooms, goods, price, comments} = offer;
  return (
    <div className="page">
      <Header/>
      <p>{offer.title}</p>
      <main className="page__main page__main--offer">
        <section className="offer">
          {/* <ImagesList images={images}/> */}
          {/* <OfferGallery images={images}/> */}
          {/* <OfferContainer title={title} isPremium={isPremium} maxAdults={maxAdults} type={type} bedrooms={bedrooms} features={goods} price={price} reviews={comments}/> */}
          {/* <Map cards={[offerParams, ...nearOffersThree]} selectedCard={offerParams} city={currentCity} classMap='offer__map'/> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {/* {nearOffersThree.map((card) =>(
                <PlaceCard
                  key={card.id}
                  card={card} handleHover={function (): void {
                    throw new Error('Function not implemented.');
                  } }
                />
              ))} */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
