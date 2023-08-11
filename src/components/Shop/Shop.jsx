import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     // console.log(storedCart);
    //     // sep-1 get id
    //     for (const id in storedCart) {
    //         //get product using by id
    //         const addededProduct = products.find(product => product.id === id);
    //         //get quentity of the products
    //         const quantity = storedCart[id];
    //         addededProduct.quantity = quantity;
    //         console.log(addededProduct);
    //     }
    // }, [products]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addededProduct = products.find(product => product.id === id)
            // console.log('added product', addededProduct);
            if (addededProduct) {
                const quentity = storedCart[id]
                addededProduct.quentity = quentity;
                savedCart.push(addededProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        // cart.push(product); 
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd.id === product.id)
        if (!exists) {
            product.quentity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quentity = exists.quentity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;