import React from 'react';
import './header.css'


const Header = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade carru">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./img/principales/header.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./img/principales/azul.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./img/principales/tusor.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Header;
