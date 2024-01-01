import 'leaflet/dist/leaflet.css';
import '../App.css';
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';


class Map extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          lng:-73.06801516900808, 
          lat:-36.81249855225117
        }

        this.playerIcon = new Icon({
            iconUrl:'/map_utilities/markers/user/adventurer.png',
            iconSize:[50,50]
        });
    }

    //Función que trae los marcadores desde el padre:
    renderMarkers = () => {
        const { markers } = this.props;
        if (markers) {
            return Object.keys(markers).map((key) => {
                const { lat, lng, icon } = markers[key];
                const customIcon = new Icon({
                    iconUrl: icon.iconUrl,
                    iconSize: icon.iconSize,
                });
                
                return (
                    <Marker key={key} position={[lat, lng]} icon={customIcon}>
                        <Popup>
                            {key}
                        </Popup>
                    </Marker>
                );
            });
        }
        return null;
    }




    render(){




        return(
            <MapContainer center={[this.state.lat,this.state.lng]} zoom={15} scrollWheelZoom={false}>  
            <TileLayer 
               attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
               url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            />
            <Marker position={[this.state.lat,this.state.lng]} icon={this.playerIcon}>
                <Popup>
                    HOLA DESDE EL MAPA
                </Popup>
            </Marker>
            {this.renderMarkers()}
            </MapContainer>
        );
    }



}

export default Map;

