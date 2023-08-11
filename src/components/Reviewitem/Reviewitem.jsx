import React from 'react';
import "./Reviewitem.css";

const Reviewitem = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    return (
        < div className='review-item' >
            <h2>Review Items</h2>
            <img src={img} alt=''></img>
            <div className='review-details'>
                <p className='product-titel'>{nane}</p>
                <p>price:<span className='orange-text'>${price}</span></p>
                <p>Orderd Quantity:<span className='orange-text'>{quantity}</span></p>

            </div>
            <button>d</button>
        </div >
    );
};

export default Reviewitem;

