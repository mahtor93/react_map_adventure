import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getZonesMap } from '../../services/map.service.js';

const DropdownZones=({sendZoneData})=> {
    const[zonas,setZonas] = useState(null);
    const[zonasFetched,setZonasFetched] = useState(null);
    const[locateZone, setLocateZone] = useState('');
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
    
    const zonasFlat = Array.isArray(zonas) ? zonas.flat() : [];

    const handleZoneChange = (e) =>{
        const index = e.target.selectedIndex-1;
        const selectedZone = zonasFlat[index] 
        setLocateZone(selectedZone);
        sendZoneData(selectedZone);
    }

    return(
<div>
    <select className="form-select" onChange={handleZoneChange} aria-label='Default select example'>
            <option defaultValue>Selecciona una Zona</option>
                {zonasFlat.map((zona) => (
                    <option key={zona.id_group_mark} value={zona.id_group_mark}>
                        {zona.name_group_mark}
                    </option>
                ))}
    </select>
</div>
  )
}

export default DropdownZones;

/*

*/