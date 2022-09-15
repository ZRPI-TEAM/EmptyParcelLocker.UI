import React from 'react';
import './Map.css';


// Importing all Leaflet stuff

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (props) => {

    return ( 
        <div className="map">
            <MapContainer id='mapContainer' center={[49.75750794284093, 18.62290616610615]} 
            zoom={13} 
            scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Mapping arrLockers and creating multiple markers on map */}
            
            {props.arrLockers.map(mappedObject => (
                <Marker 
                position={[mappedObject.latitude, mappedObject.longitude]} 

                // Here put actual locker name once acquired

                eventHandlers={{click: () => {
                    props.handleLockerChoice(mappedObject.address.street, mappedObject.address.buildingNumber, mappedObject.id)
                }}}
                >
                    <Popup>
                        {mappedObject.address.street} {mappedObject.address.buildingNumber}
                    </Popup>
                </Marker>
            ))}

            </MapContainer>
        </div>
     );
}
 
export default Map;