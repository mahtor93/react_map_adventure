import 'leaflet/dist/leaflet.css';
import React,{ useState, Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import obtenerGPS from './utilities/getCoords';



const RenderMap = ({markers, props}) =>{
    const [position, setPosition]= useState({ lat: -36.76506926258808, lng: -73.17547131071257 });
    const [numAvatar, setNumAvatar] = useState(0);
    const [mapLayer, setMapLayer] = useState('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
    const [mapAttribution, setMapAtrribution] = useState('Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community')
    const [nameButton, setNameButton] = useState('Ver Cotas');
    const listAvatar = ['adventurer','adventurer_f','alchemy','assasin','barbarian','bow','crossbow','dragon','druid','gunnery','knight','magician','martial','monk','ninja','priest','samurai','swordsman','wizard'];
    

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

    const renderMarkers = () => {
        if (markers) {
            return Object.keys(markers).map((key) => {
                const { lat, lng, label, icon } = markers[key];
                const customIcon = new Icon({
                    iconUrl: icon.iconUrl,
                    iconSize: icon.iconSize,
                });
                return (
                   
                        <Marker key={key} position={[lat, lng]} icon={customIcon}>
                            <Popup>
                                {label}
                            </Popup>
                        </Marker>
                );
            });
        }
        return null;
    }

    return(
        <div>
            <MapContainer center={[position.lat, position.lng]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution={mapAttribution}
                    url={mapLayer}
                />
                <Marker position={[position.lat,position.lng]} icon={getPlayerIcon()}>
                    <Popup>
                        Tu estás aquí
                    </Popup>
                </Marker>
                {renderMarkers()}
            </MapContainer>
            <button onClick={changeAvatar} className="btn btn-aventura">Cambiar Avatar</button>
            <button onClick={changeMapLayer} className='btn btn-aventura'>{nameButton}</button>
        </div>
    )
}

export default RenderMap;