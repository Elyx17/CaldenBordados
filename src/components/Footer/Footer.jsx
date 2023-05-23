import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className='container-botones'>
                <button className='buttonInstagram'>
                    <i className="bi bi-instagram"></i>
                    <p className='parrafo-instagram'>Instagram</p>
                </button>
                <button className='buttonWhatsapp'>
                    <i className="bi bi-whatsapp"></i>
                    <p className='parrafo-whatsapp'>Whatsapp</p>
                </button>
            </div>
            <div className='footer-link'>
                <button>Homer</button>
                <button>Galeria</button>
                <button>Acerca</button>
            </div>
        </div>
    );
}

export default Footer;
