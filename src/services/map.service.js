//Obtener set de marcas desde el mapa. (Son varias)
export const getMapData = async (zoneId) =>{
    try{
        const res = await fetch(`http://localhost:3001/markers/${zoneId}`) //obtiene datos desde endpoint declarado index.js
        if(!res.ok){
            throw new Error('Error en la red');
        }

        const data = await res.json();
        const marcas = Object.values(data);
        return {marks:marcas};


    }catch(error){
        console.error('Error al obtener datos: ',error)
        throw error;
    }
}

export const getZonesMap = async () =>{
    try{
        const res = await fetch('http://localhost:3001/group-markers')
        if(!res.ok){
            throw new Error('Error en la red');
        }
        const data = await res.json();
        const zonas = Object.values(data);
        return {zones:zonas};
    }catch(error){
        console.error('Error al obtener Zonas: ', error);
        throw error;
    }
}