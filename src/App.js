 import './App.css';
import 'react-bootstrap';
import 'bootstrap';
import {useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import obtenerGPS from './components/utilities/getCoords.js';

function App() {
  const [position, setPosition]=useState(null);

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

  const handleObtenerCoordenadas = () => {
    setCoordenadas();
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
      <Form method='POST' className='pb-5'>
        <div className="form-group pb-2">
          <label for="lat">Latitud:</label>
          <input className='form-control' value={position?position.lat:''} readOnly />
        </div>
        <div className="form-group pb-2">
          <label for="lng">Longitud:</label>
          <input className='form-control' type='text' value={position?position.lng:''} readOnly />
        </div>
        
      </Form>
      <p>Si no conoces tus coordenadas haz click aquí:</p>
      <button className="btn btn-primary" onClick={handleObtenerCoordenadas}>Obtener Coordenadas</button>
    </div>
  </div>
  );
}

export default App;
