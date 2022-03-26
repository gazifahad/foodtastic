import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Seafood from '../Seafood/Seafood';
import './Shop.css'

const MyShop = () => {
    const [seafood, setSeafood] = useState([]);
    const [cart, setCart] = useState([]);    

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSeafood(data))
    },[]);

    const addToCart = (item) => {
        if(cart.length<4){
            if(!cart.includes(item)){
                const newCart = [...cart, item];
                setCart(newCart)
            }
        }
        document.getElementById('title').innerText = "Selected Items:";  
    }
    const chooseOne = () => {
        if((cart.length>0)){
        const index = parseInt(Math.random()*(cart.length));
        const choosedItem = [cart[index]];
        setCart(choosedItem);
        document.getElementById('title').innerText = "You should choose:";
        }
    }
    const cleatCart = () => {
        const clear = [];
        setCart(clear);
        document.getElementById('title').innerText = "Choose Items";
    }

    return (
        <div>
            <h3>Select your <span style={{"color":"rgb(255,0,255)"}}>most favorite</span> food!</h3>            
            
            <div className='shop-container'>
                <div className='food-container'>
                {
                seafood.map(item =>  <Seafood key={item.id} item={item} addToCart={addToCart}></Seafood>) 
                }
                </div>
                <div className='cart-container'>
                    <h3 id='title'>Choose Items &#8595; </h3>
                    {
                        cart.map(food => <Cart key={food.id} food={food}></Cart>)
                    }
                    <button onClick={chooseOne} className='choose-btn'>Select One For me!<FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={cleatCart} className='add-to-cart-btn'>Reset and Select Again <FontAwesomeIcon icon={faClose} /></button>
                </div>
            </div>
        </div>
    );
};

export default MyShop;