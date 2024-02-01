import './index.css';
//import 'react-bootstrap';
import 'bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './Navbar.jsx';
import reportWebVitals from './reportWebVitals';
import Login from './login.jsx';
import Map from './mapContainer.jsx';
import Console from './console.jsx';
import ErrorPage from '../src/errorPage.jsx';


const router = createBrowserRouter([{
  path:'/',
  element:<Console />,
  errorElement:<ErrorPage />
},{
  path:'/mapa',
  element:<Map />
},{
  path:'/login',
  element:<Login />
},{
  path:'/crear-marcador',
  element:<App/>
}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
