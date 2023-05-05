import React, {useState} from 'react';
import cards from '../../data.json'
import '../Item/item.css'
function Card(){
    const [carrito, setCarrito] = useState([])

    function agregarAlCarrito(card) {
        setCarrito([...carrito, card])
    }

    return(

        <div className='cardContainer'>
        <div className="cardBox">
            
        {cards.map((card) => (
            
            <div className='cardsita' key={card.id}>
                <h2 className="card-title allTitles">{card.marca}</h2>
                <img className="card-img-top" src={card.img} alt="#"/>
                <p className="card-text fs-5">Valor: ${card.valor}</p> 
                <button className="btn btn-primary" onClick={() => agregarAlCarrito(card)}>Agregar al Carrito</button>
            </div>
            ))}
            
      </div>
      </div>
    )
}


export default Card;
