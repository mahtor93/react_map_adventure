import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function NavBar(){
    return(
<nav className="navbar sticky-top navbar-expand-sm align-items-center bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home"><h2>MapAventuras</h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#Home">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#About">Acerca de</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#Contacto">Contacto</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-bg-light" style={{borderRadius:10}}  href="#Salir">Salir</a>
                </li>
            </ul>
        </div>
  </div>
</nav>
    );
}

export default NavBar;