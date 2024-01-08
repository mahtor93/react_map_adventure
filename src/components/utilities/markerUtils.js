import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon, latLng } from 'leaflet';
const rutaBaseIconos = '/map_utilities/markers/land/';

const renderMarkers = (markers) =>{

    const arrMarkers = [];
    if(markers){
        markers.forEach(marker=>{
            return marker.map((item)=>{
                const {lat,lng,label,name_mark} = item;
                const locate = latLng(lat,lng);
                const customIcon = new Icon({
                    iconUrl: `${rutaBaseIconos}placeholder.png`,
                    iconSize:[50,50]
                })
                arrMarkers.push(
                    <Marker key={name_mark} position={locate} icon={customIcon}>
                        <Popup>
                            {label}
                        </Popup>
                    </Marker>
                )
                
            });
        });
        return(arrMarkers);
    }
}

export default renderMarkers;