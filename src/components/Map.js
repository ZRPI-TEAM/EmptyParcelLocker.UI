import React from 'react';
import './Map.css';


// Importing all Leaflet stuff

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const arrLockers = [
        {
            coordinates: [51.505, -0.09],
            address: 0
        } ,

        {
            coordinates: [51.500, -0.09],
            address: 1
        } ,
        
        {
            coordinates: [51.510, -0.09],
            address: 2
        } ,

        {
            coordinates: [51.505, -0.10],
            address: 3
        } ,

        {
            coordinates: [51.505, -0.07],
            address: 4
        } 
    ]

    return ( 
        <div className="map">
            <MapContainer id='mapContainer' center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Mapping arrLockers and creating multiple markers on map */}
            
            {arrLockers.map(mappedObject => (
                <Marker position={mappedObject.coordinates}>
                    <Popup>
                        {mappedObject.address}
                    </Popup>
                </Marker>
            ))}

            </MapContainer>
        </div>
     );
}
 
export default Map;