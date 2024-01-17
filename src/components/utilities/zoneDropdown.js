import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import 'bootstrap';
import { getZonesMap } from '../../services/map.service.js';

const DropdownZones=()=> {
    const[zonas,setZonas] = useState(null);
    const[zonasFetched,setZonasFetched] = useState(null);
    const fetchZoneData = async () => {
        try{
            const zoneData = await getZonesMap();
            setZonas(zoneData.zones);
            console.log('ZonasComponent: ', zoneData.zones);
        }catch(error){
            console.error('Error al obtener zonas', error);
        }finally{
            setZonasFetched(true);
        }
    }
    useEffect(()=>{
        if(!zonasFetched){
            fetchZoneData();
        }
    },[zonasFetched])

    return(
<div className='dropdown'>
     <button className='btn btn-warning dropdown-toggle' type='button' id='zonasDropdown' data-toggle='dropdown' aria-expanded='false'>
         Selecciona una Zona
     </button>
     <div className="dropdown-menu" aria-labelledby='zonasDropdown'>
         {zonas && zonas.map((zona,index) =>(
             <button key={index} className='dropdown-item' type="button">{zona.name_group_mark}</button>
         ))}
     </div>
 </div>
  )
}

export default DropdownZones;

/*

*/