import 'leaflet/dist/leaflet.css';
import '../App.css';
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import obtenerGPS from './utilities/getCoords';

let listAvatar = ['adventurer','adventurer_f','alchemy','assasin','barbarian','bow','crossbow','dragon','druid','gunnery','knight','magician','martial','monk','ninja','priest','samurai','swordsman','wizard'];
let numAvatar = 0;
let nameButton = 'Ver Cotas';

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            
            lat:-36.76506926258808, 
            lng:-73.17547131071257,
            playerIcon: this.getPlayerIcon(),
            mapLayer:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution:'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
    }

    changeMapLayer = () =>{
        const newLayer=
        this.state.mapLayer === 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'?'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png':'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        this.setState({mapLayer: newLayer});

        if(nameButton==='Ver Cotas'){
            nameButton='Ver Terreno'
        }else{
            nameButton='Ver Cotas';
        }
    }

    getPlayerIcon = () => {
        return this.playerIcon = new Icon({
            iconUrl:`/map_utilities/markers/user/${listAvatar[numAvatar]}.png`,
            iconSize:[50,50]
        });
       
    }

    //Función que trae los marcadores desde el padre:
    renderMarkers = () => {
        const { markers } = this.props;
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

    render(){
        return(
            <div>
                <MapContainer center={[this.state.lat,this.state.lng]} zoom={17} scrollWheelZoom={false}>  
                    <TileLayer 
                    attribution={this.state.attribution}
                    url={this.state.mapLayer}
                    />
                        <Marker position={[this.state.lat,this.state.lng]} icon={this.playerIcon}>
                            <Popup>
                                Tu estás aquí 
                            </Popup>
                        </Marker>
                {this.renderMarkers()}
                </MapContainer>
                <button onClick={this.changeAvatar} className="btn btn-aventura">Cambiar Avatar</button>
                <button onClick={this.changeMapLayer} className="btn btn-aventura">{nameButton}</button>
                <button onClick={obtenerGPS} className="btn btn-aventura">Obtener Posición</button>
            </div>
        );
    }
}

export default Map;