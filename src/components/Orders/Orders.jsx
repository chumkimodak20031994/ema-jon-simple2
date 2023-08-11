import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import "./Ordders.css"

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <Reviewitem
                        key={product.id}
                        product={product}
                    ></Reviewitem>)
                }

                <h2>Orderd pages:{products.length}</h2>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;