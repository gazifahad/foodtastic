import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Seafood.css'

const Seafood = ({item, addToCart}) => {
    const {id, name, price, img} = item;
    return (
        <div>
            <div className='food-item'>                
                <img src={img} alt="" />                
                <div className='item-details'>
                    <small>Food Id: {id}</small>
                    <h3 className='food-name'>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <button onClick={()=> addToCart(item)} className='add-to-cart-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Seafood;