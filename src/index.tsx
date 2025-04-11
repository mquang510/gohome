import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './app/App';
import { AppStoreProvider } from './app/store';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  );
}

