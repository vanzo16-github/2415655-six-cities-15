import { Helmet } from 'react-helmet-async';

function OfferTitle(): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <Helmet>
        <title>
                  Beautiful &amp; luxurious studio at great location
        </title>
      </Helmet>
      <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
      </h1>
      <button className="offer__bookmark-button button" type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default OfferTitle;
