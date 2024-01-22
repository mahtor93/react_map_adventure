import './App.css';
import 'react-bootstrap';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import { getMapData } from './services/map.service.js';
import RenderMap from './components/mapMain.jsx';
import DropdownZones from './components/utilities/zoneDropdown.js';

function App() {
  const[marcas,setMarcas] = useState(null);
  const[zoneCoords, setZoneCoords] = useState(null);

  const fetchMapData = async () =>{
    /*Obtención de las coordenadas de marcadores*/
    try{
      const mapData = await getMapData(zoneCoords.id_group_mark);
      setMarcas(mapData.marks);
    }catch(error){
      console.error('Error fetching map data: ',error);
    }
  };

  const handleZonesData = (zoneData) =>{
    setZoneCoords(zoneData);
  };

  useEffect(()=>{
    if(zoneCoords){
      console.log("Coordenadas paneo: ",zoneCoords.zone_lat,zoneCoords.zone_lng)
    }else{
      console.log('try again');
    }
  },[zoneCoords]);




  return (
    <>
      <RenderMap markers={marcas}/>
      <div className="d-flex justify-content-center">
        <button onClick={fetchMapData} className='btn btn-warning'>Mostrar Marcadores</button>
        <DropdownZones sendZoneData={handleZonesData} /> {/*Componente Hijo que trae los datos de la zona */}
      </div>

    </>
  );
}

export default App;
