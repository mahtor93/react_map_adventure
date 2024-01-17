import './App.css';
import 'react-bootstrap';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import { getMapData } from './services/map.service.js';
import RenderMap from './components/mapFunction.jsx';
import DropdownZones from './components/utilities/zoneDropdown.js';

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
        <DropdownZones/>
      </div>

    </>
  );
}

export default App;
