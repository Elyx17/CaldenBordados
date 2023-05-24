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
                    <div className='imgAbout'></div>
                    <div className='textAbout'>
                        <h3>¿Cómo nace Calden?</h3>
                        <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam accusantium, 
                       tenetur sed commodi corrupti est repellat necessitatibus inventore, iste neque tempore adipisci doloremque, aperiam officiis. 
                       Exercitationem, deserunt fuga! Odio atque, aliquam voluptate similique quo modi aspernatur quam! Beatae, architecto?
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, nostrum asperiores consequuntur, iusto quisquam repudiandae 
                       vel necessitatibus cumque assumenda dicta ex debitis animi voluptate similique vero ab. Sequi, natus aspernatur.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
