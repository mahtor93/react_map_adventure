import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    
    const zonasFlat = Array.isArray(zonas) ? zonas.flat() : [];

    return(
<div>
    <select className="form-select" aria-label='Default select example'>
            <option selected>Selecciona una Zona</option>
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