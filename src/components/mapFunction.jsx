import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export default function RenderMap(){
    return(
        <MapContainer center={[-36.81249855225117,-73.06801516900808]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[-36.81249855225117,-73.06801516900808]}>

            </Marker>
        </MapContainer>
    )
}
