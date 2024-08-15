import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductContext } from './ProductProvider';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const {dicreaseQuantity, increaseQuantity, backQuantity, backProductsQuantity} = useContext(ProductContext);

useEffect(() => {
    if(cart){
        const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        }, 0);
        setItemAmount(amount);
    }
})
useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.presentPrice * currentItem.amount;
    }, 0);
    setTotal(total);
})
    const addToCart = (product, id) => {
        dicreaseQuantity(id);
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id == id ;
        });
  
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id == id) {
                    const newItem = item;
                    newItem.quantity = item.quantity - 1;
                    return { ...item, newItem, amount: cartItem.amount + 1};
                }
                else {
                    return item;
                }
            });
            setCart(newCart);
        }
        else {
            setCart([...cart, newItem]);
        }
    }

    const removeFromCart = (id, amount) => {

        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
        backQuantity(id, amount);
    }

    const clearCart = () => {
    cart.forEach(item => {
        backQuantity(item.id, item.amount);
        })
        setCart([]);
    }


    const increaseAmount = (id) => {
        const cartItem = cart.find(item =>  {
            return  item.id === id
          });  
   
        addToCart(cartItem, id);
    }
  
    const dicreaseAmount = (id, amount) => {
        increaseQuantity(id)
        const cartItem = cart.find(item => {
            return item.id === id
        });
        if(cartItem){
            const newCart = cart.map(item => {
                if(item.id === id){
                    const newItem = item;
                    newItem.quantity = item.quantity + 1;
                    return {...item, newItem, amount:cartItem?.amount - 1};
                }
                else{
                    return item;
                }
            });
            setCart(newCart);
        }
        if(cartItem.amount == 1){
            removeFromCart(id);
            backProductsQuantity(id);
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, dicreaseAmount, itemAmount, total }}>
            {children}
        </CartContext.Provider>);
};

export default CartProvider;

