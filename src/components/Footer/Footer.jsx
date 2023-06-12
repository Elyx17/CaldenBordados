import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='containerFooter' id='footer'>
            <div className='container-botones'>
                <button className='buttonInstagram'>
                    <i className="bi bi-instagram"></i>
                    <a className='parrafo-instagram' href="https://instagram.com/calden_bordados?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer noopener">Instagram</a>
                </button>
                <button className='buttonWhatsapp'>
                    <i className="bi bi-whatsapp"></i>
                    <a className='parrafo-whatsapp' href='https://api.whatsapp.com/send?phone=54 9 1161138759&text=Hola,%20queria%20saber%20mas
%20sobre%20tus%20productos...%20.' target="_blank" rel="noreferrer noopener">Whatsapp</a>
                </button>
            </div>
            <div className='footer-link'>
                <a href="#inicio">Inicio</a>
                <a href="#pics">Galeria</a>
                <a href="#acercade">Nosotros</a>
                <br />
                <br />
                <i className='bi bi-c-circle copyright'>2023 Calden Bordados</i>
            </div>
        </footer>
    );
}

export default Footer;
