import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div className='container-botones'>
                <button className='buttonInstagram'>
                    <i className="bi bi-instagram"></i>
                    <a className='parrafo-instagram' href="https://instagram.com/calden_bordados?igshid=MzRlODBiNWFlZA==">Instagram</a>
                </button>
                <button className='buttonWhatsapp'>
                    <i className="bi bi-whatsapp"></i>
                    <p className='parrafo-whatsapp'>Whatsapp</p>
                </button>
            </div>
            <div className='footer-link'>
                <a href="#">Inicio</a>
                <a href="#">Galeria</a>
                <a href="nosotros">Nosotros</a>
                <br />
                <br />
                <i className='bi bi-c-circle copyright'>2023 Calden Bordados</i>
            </div>
        </footer>
    );
}

export default Footer;
