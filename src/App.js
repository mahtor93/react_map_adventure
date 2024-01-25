 import './App.css';
import 'react-bootstrap';
import 'bootstrap';
import {useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import obtenerGPS from './components/utilities/getCoords.js';
import DropdownZones from './components/utilities/zoneDropdown.js';
import { setMarker } from './services/mark.service.js';

function App() {
  const [position, setPosition]=useState(null);
  const[zoneCoords, setZoneCoords] = useState(null);
  const[zoneId, setZoneId] = useState(null);
  const [nameMark, setNameMark] = useState('placeholder');


  const setCoordenadas = async () => {
    try {
      const result = await obtenerGPS({ timeout: 5000 });
      setPosition(result);
      
    } catch (error) {
      console.error('Inicio: Error al obtener las coordenadas:', error);
    }
  };

  useEffect(() => {
    setCoordenadas();
  }, []);

  useEffect(()=>{
    /*Estos parámetros son para configurar el paneo del mapa hacia una zona en particular */
    if(zoneCoords){
      console.log(zoneCoords.id_group_mark);
      setZoneId({
        id_group_mark: zoneCoords.id_group_mark,
      });
    }else{
      console.log('zoneCoords puede que sea nulo');
    }
  },[zoneCoords]);

  const handleObtenerCoordenadas = () => {
    setCoordenadas();
  };

  const handleZonesData = (zoneData) =>{
    setZoneCoords(zoneData);
  };

  const handleCreateMarker = async () =>{
    const enviarDatos = {
      lat: parseFloat(position? position.lat:0),
      lng: parseFloat(position? position.lng:0),
      label: document.getElementsByName('label')[0].value,
      name_mark: nameMark,
      id_group_mark: zoneId ? zoneId.id_group_mark:0,
    };
    console.log('Datos a enviar:', enviarDatos);
    try{
      await setMarker(enviarDatos);
    }catch(error){
      console.error('Inicio: Error al crear el marcador:',error);
    }
  };

  return (
  <div className="App">
      <div className='container pt-5 d-flex flex-column '>
      <h1>Mapaventuras</h1>
      <h2 className='pt-5'>Ingresa una ubicación</h2>
      <p className='pb-5'>
        Ingresa una ubicación para verla en el mapa posteriormente.
        Puedes revisar los otros marcadores en la sección de Mapa
      </p>
      <Form method='POST' action='/' className='pb-5'>
        <div className='form-group pb-2'>
          <label for='label'>Nombre del lugar:</label>
          <input className='form-control' name='label'></input>
        </div>
        <div className="form-group pb-2">
          <label for="lat">Latitud:</label>
          <input className='form-control' value={position?position.lat:''} readOnly />
        </div>
        <div className="form-group pb-2">
          <label for="lng">Longitud:</label>
          <input className='form-control' type='text' value={position?position.lng:''} readOnly />
        </div>
        <div className='form-group pb-2'>
          <label for='zone'>Zona donde estás:</label>
          <DropdownZones sendZoneData={handleZonesData} />
        </div>
        <button className="btn btn-success" onClick={handleCreateMarker}>Crear Marcador</button>
      </Form>
      <p>Si no aparecen tus coordenadas haz click aquí:</p>
      <button className="btn btn-warning" onClick={handleObtenerCoordenadas}>Obtener Coordenadas</button>
    </div>
  </div>
  );
}

export default App;
