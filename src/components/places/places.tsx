import PlaceCard from '../place-card/place-card';


function Places(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      <PlaceCard/>
      <PlaceCard/>
      <PlaceCard/>
    </div>
  );
}

export default Places;
