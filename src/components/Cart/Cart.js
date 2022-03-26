import React from 'react';
import './Cart.css'

const Cart = ({food}) => {
    const {name} = food;

    
    return (
        <div className='cart-summery'>
            <h4>{name}</h4>           
        
        </div>
    );
};

export default Cart;