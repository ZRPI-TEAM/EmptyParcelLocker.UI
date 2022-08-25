import React from 'react';
import './Map.css';


// Importing all Leaflet stuff

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const position = [51.505, -0.09]

    return ( 
        <div className="map">
            <MapContainer id='mapContainer' center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    To jest paczkomat
                    <br /> Ma nazwę id i wogle 
                </Popup>
            </Marker>
            </MapContainer>
        </div>
     );
}
 
export default Map;