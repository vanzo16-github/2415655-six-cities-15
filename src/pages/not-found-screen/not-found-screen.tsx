import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <Helmet>
              <title>Page not found</title>
            </Helmet>
            <h1 className="login__title">Page not found</h1>
            <img src="img/404.png" alt="404" className="error" />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
