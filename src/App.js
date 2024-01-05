import './App.css';
import 'react-bootstrap';
import 'bootstrap';

import RenderMap from './components/mapFunction.jsx';

let customIconSize = [50,50];
let baseLandURL = '/map_utilities/markers/land/'

let marcas = { //esto debiese salir de una base de datos. 
  mark1: { 
    lat: -36.812863439022, 
    lng: -73.1736491910276, 
    label:"Cueva del Pirata",
    icon: { 
      iconUrl: `${baseLandURL}cave.png`, 
      iconSize: customIconSize
    } 
  }, //Player
  mark3: { 
    lat: -36.765003045678036, 
    lng: -73.1828943630428, 
    label:"Teta Norte",
    icon: { 
      iconUrl: `${baseLandURL}savannah.png`,
      iconSize: customIconSize
    } 
  }, //Cave
  mark2: { 
    lat: -36.797523132216675, 
    lng: -73.17816721673245,
    label:"Playa Rocoto",
    icon: { 
      iconUrl: `${baseLandURL}beach.png`,
      iconSize: customIconSize
    } 
  }, //
  mark4: { 
    lat: -36.78358071599951, 
    lng: -73.21373377407333,
    label:"Punta Chome",
    icon: { 
      iconUrl: `${baseLandURL}grassland.png`, 
      iconSize: customIconSize 
    } 
  }, //
  mark5: { 
    lat: -36.76875857064171, 
    lng: -73.20465052631701,
    label:"Entre Chome y Perone",
    icon: { 
      iconUrl: `${baseLandURL}sea.png`, 
      iconSize: customIconSize 
    } 
  } //
}

function App() {
  return (
    <>
      <RenderMap markers={marcas}/>
      <button onClick={async ()=>{
        const res = await fetch('http://localhost:3001/users')
        const data = await res.json()
        console.log(data);
      }} className='btn btn-warning'>WAT!</button>
    </>
  );
}

export default App;


/*
<Prueba title="Wena TEST" names={['alfa', 'beta', 'gamma', 'delta', 'epsyle']} />
*/
