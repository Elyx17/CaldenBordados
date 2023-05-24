import React from 'react';
import '../AboutMe/aboutMe.css'

const AboutMe = () => {
    return (
        <div className='containerAboutMe'>
            <div className='boxAboutMe'>

                <div className='iconsAbout'>

                    <div className="icon">
                        <div id='acerca'></div>
                        <h3>Acerca</h3>
                        <i className="bi bi-instagram"></i>
                    </div>

                    <div className="icon">
                        <div id='galeria'></div>
                        <h3>Galeria</h3>
                    </div>

                    <div className="icon">
                        <div id='tienda'></div>
                        <h3>Tienda</h3>
                    </div>

                    <div className="icon">
                        <div id='contacto'></div>
                        <h3>Contacto</h3>
                    </div>


                </div>


                <div className='historyAbout'>

                </div>

            </div>
        </div>
    );
}

export default AboutMe;
