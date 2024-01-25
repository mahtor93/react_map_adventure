export const setMarker = async (markerData) =>{
    try{
        const res= await fetch('http://localhost:3001/createMarker',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(markerData),
        });

        if(!res.ok){
            console.error('Fend: Error al enviar datos:',res.statusText);
        }else{
            const result = await res.json();
            console.log('Fend: Datos enviados correctamente:', result);
        }
    }catch(error){
        console.error('Fend: Error en la solicitud:',error);
    }
}