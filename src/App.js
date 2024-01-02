import './App.css';
import Prueba from './components/pruebaClase';
import Map from './components/map.jsx';
import RenderMap from './components/mapFunction.jsx';

let customIconSize = [50,50];
let baseLandURL = '/map_utilities/markers/land/'

let marcas = { //esto debiese salir de una base de datos. 
  mark1: { 
    lat: -36.812863439022, 
    lng: -73.1736491910276, 
    label:"",
    icon: { 
      iconUrl: `${baseLandURL}cave.png`, 
      iconSize: customIconSize
    } 
  }, //Player
  mark3: { 
    lat: -36.765003045678036, 
    lng: -73.1828943630428, 
    label:"",
    icon: { 
      iconUrl: `${baseLandURL}savannah.png`,
      iconSize: customIconSize
    } 
  }, //Cave
  mark2: { 
    lat: -36.797523132216675, 
    lng: -73.17816721673245,
    label:"",
    icon: { 
      iconUrl: `${baseLandURL}beach.png`,
      iconSize: customIconSize
    } 
  }, //
  mark4: { 
    lat: -36.78358071599951, 
    lng: -73.21373377407333,
    labrl:"",
    icon: { 
      iconUrl: `${baseLandURL}grassland.png`, 
      iconSize: customIconSize 
    } 
  }, //
  mark5: { 
    lat: -36.76875857064171, 
    lng: -73.20465052631701,
    label:"",
    icon: { 
      iconUrl: `${baseLandURL}sea.png`, 
      iconSize: customIconSize 
    } 
  } //
}

function App() {
  return (
    <>
      <h1>Mapa clase:</h1>
      <Map markers={marcas} />
      <h1>Mapa funcion:</h1>
      <RenderMap />
      <p>Lorem ipsum</p>

      <Prueba title="Wena TEST" names={['alfa', 'beta', 'gamma', 'delta', 'epsyle']} />
    </>
  );
}

export default App;


/*

*/
