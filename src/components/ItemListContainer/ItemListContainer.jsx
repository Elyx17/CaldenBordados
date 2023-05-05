import  React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';

import '../../data.json'

const ItemListContainer = () => {

    const [products, setProducts] = useState ([])
    

    return (
        <div className='container'>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;
