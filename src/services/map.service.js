

//Obtener set de marcas desde el mapa. (Son varias)
const getMapData = async () =>{
    try{
        const res = await fetch('http://localhost:3001/users')
        if(!res.ok){
            throw new Error('Error en la red');
        }

        const data = await res.json();
        console.log(data);
        const marcas = Object.values(data);
        return {marks:marcas};


    }catch(error){
        console.error('Error al obtener datos: ',error)
        throw error;
    }

}


export default getMapData;