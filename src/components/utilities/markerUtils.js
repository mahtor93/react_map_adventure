import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon, latLng } from 'leaflet';
const rutaBaseIconos = '/map_utilities/markers/land/';

/*Esta utilidad permite cargar un listado de marcadores a partir de un objeto traido desde la base de datos */
const renderMarkers = (markers) =>{
    
    if(markers){
        const arrayMarkers = [];
        const markerFlat = Array.isArray(markers) ? markers.flat() : [];
        
        markerFlat.map((item)=>{
            const {lat,lng,label,name_mark} = item;
            const locate = latLng(lat,lng);
            const customIcon = new Icon({
                iconUrl: `${rutaBaseIconos}${name_mark}.png`,
                iconSize:[50,50]
            });
            arrayMarkers.push(
                <Marker key={label} position={locate} icon={customIcon}>
                    <Popup>
                        {label}
                    </Popup>
                </Marker>
            )
            return null;
        });
        return (arrayMarkers);
    }

}

export default renderMarkers;