type CountPlacesProps = {
  placeCount: number;
}

function CountPlaces({placeCount}: CountPlacesProps): JSX.Element{
  return (
    <b className="places__found">{placeCount} places to stay in Amsterdam</b>
  );
}

export default CountPlaces;
