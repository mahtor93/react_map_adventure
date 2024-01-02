import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function NavBar(){
    return(
<nav class="navbar navbar-expand-sm align-items-center bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home"><h2>Map Adventure</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#Home">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#About">Acerca de</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contacto">Contacto</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-bg-light" href="#Salir">Salir</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default NavBar;