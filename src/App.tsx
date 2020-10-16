import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';
// O leaflet utiliza uma estilização própria que já vem quando instalamos o seu próprio pacote.

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;
