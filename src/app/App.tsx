import '../scss/app.scss';
import '../scss/animation.scss';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes.tsx';

function App() {
  return (
  <div className="App finding-routes">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </div>)
}

export default App;
