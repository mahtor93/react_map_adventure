import './App.css';
import React from 'react';

function NavBar(){
    return(
        <div className='navbar-style'>
            <div className="navbar-section-title">
                <h1>Map Adventure</h1>
            </div>
            <div className="navbar-section-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contac</li>
                </ul>
            </div>
            <div className="navbar-section-end">
                <button className="btn-salir">
                    Salir
                </button>
            </div>

        </div>
    );
}

export default NavBar;