import './App.css';
import 'react-bootstrap';
import 'bootstrap';
import React, { useState } from 'react';
import getMapData from './services/map.service.js';
import RenderMap from './components/mapFunction.jsx';

/*
let customIconSize = [50,50];
let baseLandURL = '/map_utilities/markers/land/'
*/




function App() {
  const[marcas,setMarcas] = useState(null);
  const fetchMapData = async () =>{
    try{
      const mapData = await getMapData();
      setMarcas(mapData.marks);
    }catch(error){
      console.error('Error fetching map data: ',error);
    }
  };

  return (
    <>
      <RenderMap markers={marcas}/>
      <div className="d-flex justify-content-center">
        <button onClick={fetchMapData} className='btn btn-warning'>Mostrar Marcadores</button>
      </div>

    </>
  );
}

export default App;


/*
<Prueba title="Wena TEST" names={['alfa', 'beta', 'gamma', 'delta', 'epsyle']} />
*/
