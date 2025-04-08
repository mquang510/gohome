import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { AppStoreProvider } from './app/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppStoreProvider>
    <App />
  </AppStoreProvider>
);