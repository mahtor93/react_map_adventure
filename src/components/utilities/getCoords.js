"use client";
/*Consulta la API para obtener la ubicación del dispositivo*/
export default function obtenerGPS(){
    return new Promise((resolve,reject)=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(
                ({coords:{latitude,longitude}})=>{
                    const coordenadas ={
                        lat:latitude,
                        lng: longitude,
                    };
                    resolve(coordenadas);
                    return coordenadas;
                },
                (error)=>{
                    reject(error.message);
                },{
                    enableHighAccuracy:true,
                    timeout: 5000,
                    maximumAge:0,
                }
            );
        }else{
            reject('Geolocalización no soportada')
        }
    });
}