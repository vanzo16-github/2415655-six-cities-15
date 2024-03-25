import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="container-spinner">
      <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
      </div>
    </div>
  );
}

export default Spinner;

