import React from 'react';
import { MapContainer as LeafletMap } from "react-leaflet/MapContainer";
import { TileLayer } from 'react-leaflet/TileLayer'
import './Map.css';
import { showDataOnMap } from './util';

function Map({ countries, casesType, center, zoom }) {
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {showDataOnMap(countries, casesType)}
            </LeafletMap>

        </div>
    )
}

export default Map;