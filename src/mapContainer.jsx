import './App.css';
import 'react-bootstrap';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import { getMapData } from './services/map.service.js';
import RenderMap from './components/mapMain.jsx';
import DropdownZones from './components/utilities/zoneDropdown.js';

function Map() {
  const[marcas,setMarcas] = useState(null);
  const[zoneCoords, setZoneCoords] = useState(null);
  const[zonePan, setZonePan] = useState(null);
  const fetchMapData = async () =>{
    /*Obtención de las coordenadas de marcadores*/
    try{
      if(zoneCoords){
      const mapData = await getMapData(zoneCoords.id_group_mark);
      setMarcas(mapData.marks);
      }else{
        console.log('select a zone first')
      }
    }catch(error){
      console.error('Error fetching map data: ',error);
    }
  };

  const handleZonesData = (zoneData) =>{
    setZoneCoords(zoneData);
  };

  useEffect(()=>{
    /*Estos parámetros son para configurar el paneo del mapa hacia una zona en particular */
    if(zoneCoords){
      setZonePan({
        lat: zoneCoords.zone_lat,
        lng: zoneCoords.zone_lng
      });
      console.log("Coordenadas paneo: ",zoneCoords)
    }else{
      console.log('try again');
    }
  },[zoneCoords]);




  return (
    <>
      <RenderMap markers={marcas} zonePan={zonePan}/>
      <div className="d-flex justify-content-center">
        <button onClick={fetchMapData} className='btn btn-warning'>Mostrar Marcadores</button>
        <DropdownZones sendZoneData={handleZonesData} /> {/*Componente Hijo que trae los datos de la zona */}
      </div>

    </>
  );
}

export default Map;
