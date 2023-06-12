import React from 'react';
import '../AboutMe/aboutMe.css'

const AboutMe = () => {
    return (
        <div className='containerAboutMe' id='acercade'>
            <div className='boxAboutMe'>

                <div className='iconsAbout'>

                    <div className="icon">
                        <div id='acerca'></div>
                        <h3>Acerca</h3>
                    </div>

                    <div className="icon">
                        <div id='galeria'></div>
                        <h3>Galeria</h3>
                    </div>

                    <div className="icon">
                        <div id='tienda'></div>
                        <h3>Pedido</h3>
                    </div>

                    <div className="icon">
                        <div id='contacto'></div>
                        <h3>Contacto</h3>
                    </div>


                </div>


                <div className='historyAbout'>
                    <div className='imgAbout'></div>
                    <div className='textAbout'>
                        <h3 id='nosotros'>¿Quien está detrás de Calden?</h3>
                        <p>
                        Mi nombre es Ana fundadora de calden bordados, nací en Trenque Lauquen, provincia de Bs.As. Vine a Caba a estudiar a los 18 años, la carrera de Profesorado de Expresión Corporal.
                         (Desde los 5 años tomé clases de  danza clásica hasta que vine a Caba). Forme mi familia.
                          Siempre tengo presente en mis días a mi ciudad, tengo familia allá. Paso los veranos en la quinta. Disfruto del Aire de  campo,  naturaleza, flores, animales.
                           Siempre me gustaron las manualidades e ir descubriendo técnicas nuevas.  He realizado velas, como emprendimiento cuando tenía 20 años. 
                           Me gusta la danza, las obras de arte, la música, la fotografía; hace unos años retomé clases de danza. 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
