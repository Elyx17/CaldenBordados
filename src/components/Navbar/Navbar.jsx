import React from 'react';
import '../Navbar/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0 navbarMain">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navbarCalden" id="navbarColor03">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Acerca</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Galeria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tienda</a>
              </li>
            </ul>
            <div>
            <img className='caldenLogo' src="./img/logo/logo.png" alt="CaldenLogotipo"/>
            </div>
          </div>
        </div>
      </nav>
      
    );
}

export default Navbar;
