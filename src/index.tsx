import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Setting} from './const';
import { cards } from './mocks/mocks.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App placeCount={Setting.placeCount} cards={cards}/>
  </React.StrictMode>
);

