import React from 'react';
import { MapContainer as LeafletMap } from "react-leaflet/MapContainer";
import { TileLayer } from 'react-leaflet/TileLayer';
import './Map.css';
import { showDataOnMap } from './util';
import { useMap } from 'react-leaflet/hooks'

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function Map({ countries, casesType, center, zoom }) {
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom} >
                <ChangeView center={center} zoom={zoom} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {showDataOnMap(countries, casesType)}
            </LeafletMap>

        </div>
    )
}

export default Map;