import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-actions';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  return (
    <section className="login">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h1 className="login__title">Sign in</h1>
      <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$' required/>
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in
        </button>
      </form>
    </section>
  );
}

export default Login;
