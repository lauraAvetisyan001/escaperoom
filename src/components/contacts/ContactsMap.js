import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'components/contacts/ContactsMap.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


const ContactsMap = () => {

    // const map = L.map('map').setView([51.505, -0.09], 13);

    const state = {
        lat: 49.8383,
        lng: 24.0232,
        zoom: 10
      };

   

    return (
            <div >
                <MapContainer zoom='19' center={[state.lat, state.lng]} className='map'>
                    <TileLayer
                    attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <TileLayer
          url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
                        <Marker position={[state.lat, state.lng]}>
            Popup for any custom information.
        </Marker>
                </MapContainer>
            </div>
    );
};
export default ContactsMap;



