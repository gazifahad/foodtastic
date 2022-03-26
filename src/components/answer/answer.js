import React from 'react';
import './answer.css'

const Answer = () => {
    return (
        <div className='ans'>
            <p>
                <h2>answer no 1</h2>
                
                states are treated to be the heart of the components,It acts whenever something changes in a component, It is used for those components which are meant to be changed over time,Whenever the value of a certain component changes the state also changes, so state is updatable.
                On the other hand props are objects which is immutabe,It only can be read,it carries the data from a parent component to it's child components.By passing data from one element to another prop makes components reusable.
            </p>
        </div>
    );
};

export default Answer;