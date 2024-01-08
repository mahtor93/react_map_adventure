import 'leaflet/dist/leaflet.css';
import React,{ useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import obtenerGPS from './utilities/getCoords';
import renderMarkers from './utilities/markerUtils';



const RenderMap = ({markers}) =>{
    
    const [position, setPosition]= useState({ lat: -36.76506926258808, lng: -73.17547131071257 });
    const [centerMap , setCenterMap]= useState(position);
    const [numAvatar, setNumAvatar] = useState(0);
    const [mapLayer, setMapLayer] = useState('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
    const [mapAttribution, setMapAtrribution] = useState('Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community')
    const [nameButton, setNameButton] = useState('Ver Cotas');
    const listAvatar = ['adventurer','adventurer_f','alchemy','assasin','barbarian','bow','crossbow','dragon','druid','gunnery','knight','magician','martial','monk','ninja','priest','samurai','swordsman','wizard'];
    

    useEffect(()=>{
        obtenerGPS()
        .then(resultado =>{
            setPosition(resultado);
            setCenterMap(resultado);
        })
        .catch(error=>{
            console.error('Error al obtener el valor:', error);
        });
    },[]);

 

    const MapComponent = () => {
        const map = useMap();
        useEffect(()=>{
            map.panTo([position.lat,position.lng])
        })
        return null;
    }

    const changeAvatar = () =>{
        setNumAvatar((prevNumAvatar)=>(prevNumAvatar+1)%listAvatar.length);
    };

    const getPlayerIcon = () => {
        return new Icon({
            iconUrl:`/map_utilities/markers/user/${listAvatar[numAvatar]}.png`,
            iconSize:[50,50]
        });
    };

    const changeMapLayer = () =>{
        setMapLayer((prevMapLayer)=>prevMapLayer==='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'?'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png':'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
        setMapAtrribution((prevMapAttribution)=>prevMapAttribution==='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'?'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)':'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community')
        setNameButton((prevNameButton)=>prevNameButton==='Ver Cotas'?'Ver Terreno':'Ver Cotas');
    }

/*
    const renderMarkers = () =>{
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
  */
    return(
        <div>
            <MapContainer center={centerMap} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution={mapAttribution}
                    url={mapLayer}
                />
                <Marker position={[position.lat,position.lng]} icon={getPlayerIcon()}>
                    <Popup>
                        Tu estás aquí
                    </Popup>
                </Marker>
                {renderMarkers(markers)}
                <MapComponent/>
            </MapContainer>
            <div className="row mt-3">
                <div className="col-sm-3"/>
                <div className="col-sm-6 d-flex justify-content-center">
                    <button onClick={changeMapLayer} className='m-2 btn btn-sm btn-outline-success'>{nameButton}</button>
                    <button onClick={changeAvatar} className="m-2 btn btn-sm btn-outline-success">Cambiar Avatar</button>
                </div>
                <div className="col-sm-3"/>
            </div>
        </div>
    )
}

export default RenderMap;