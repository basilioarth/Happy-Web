import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
// O leaflet utiliza uma estilização própria que já vem quando instalamos o seu próprio pacote.

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Teresina</strong>
                    <span>Piauí</span>
                </footer>
            </aside>

            <Map 
                center={[-5.1454118,-42.7955089]}
                /* define a latitude e longitude da aparência inicial do mapa */
                zoom={15}
                /* define o zoom da aparência inicial do mapa */
                style={{ width: '100%', height: '100%' }}
            >   
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
                {/*
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                 Componente utilizado para renderizar as imagens do mapa em tela.
                 Especificamos na url qual o "estilo" de mapa que iremos utilizar. 
                */}

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;