import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Setting} from './const';
import { cards } from './mocks/mocks.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App placeCount={Setting.placeCount} cards={cards}/>
    </React.StrictMode>
  </Provider>
);

