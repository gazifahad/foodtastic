import React from 'react';
import './answer.css'

const Answer = () => {
    return (
        <div className='ans'>
            <p>
                <h2>State vs props</h2>
                
                states are treated to be the heart of the components,It acts whenever something changes in a component, It is used for those components which are meant to be changed over time,Whenever the value of a certain component changes the state also changes, so state is updatable.
                On the other hand props are objects which is immutabe,It only can be read,it carries the data from a parent component to it's child components.By passing data from one element to another prop makes components reusable.
            </p>
            <p>
                <h2>
                    How does react work?
                </h2>
                React is an efficient, and flexible,open-source, component-based front-end JavaScript library for building UIS,which is declarative.React always maintains a tree for us and it does efficient difficult computations on the nodes,react uses virtual DOM which is lightweight and more efficient than browser DOM.
                React applications are made of multiple components, every component is responsible for rendering a bit, and these components acts as reusable pieces of of HTML. 
                JSX is used to make the react code like html.
            </p>
        </div>
    );
};

export default Answer;