import HeroScreen from '../../pages/hero-screen/hero-screen';

type AppScreenProps = {
  placeCount: number;
}

function App({placeCount}: AppScreenProps): JSX.Element {
  return (
    <HeroScreen placeCount={placeCount} />
  );
}

export default App;
