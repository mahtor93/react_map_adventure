import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import{ BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';


function NavBar(){
    return(
<>
            <nav className="navbar sticky-top navbar-expand-sm align-items-center navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'><h1>SigilSystem</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" href={`/`}>Inicio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={`/mapa`}>Mapa</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href={`/consola`}>Consola</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-bg-light" style={{borderRadius:10}}  href={`/login`}>Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" hreff={`/salir`}>Salir</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
</>
    );
}

export default NavBar;