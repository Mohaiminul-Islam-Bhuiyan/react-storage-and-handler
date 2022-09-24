import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import "./cosmetic.css"

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic

    const addToCart = (_id) => {
        addToDb(_id)
    }

    const removeFromCart = id => {
        removeFromDb(id)
    }

    const addToCartWithParam = () => addToCart(_id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>only for: ${price}</p>
            <p><small>it's id : {_id}</small></p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(_id)}>Add cart new style</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;