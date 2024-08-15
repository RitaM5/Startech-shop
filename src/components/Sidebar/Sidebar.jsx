import React, { useContext, useState } from 'react';
import { SidebarContext } from '../../context/SidebarProvider';
import { CartContext } from '../../context/CartProvider';
import CartItem from '../CartItem/CartItem';


const Sidebar = () => {
    const { isOpen, handleClose,} = useContext(SidebarContext);
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);
    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white h-full rounded-md fixed top-26 shadow-2xl lg:max-w-[50vw] xl:max-w-[40vw] max-md:max-w-[80vw] md:max-w-[80vw] max-sm:max-w-[96vw] max-sm:px-12 transition-all duration-300 z-50 px-4 lg:px-[35px]`}>
            <div className='flex justify-between py-5'>
                <p className='text-xl inline-flex items-center gap-3'><i className="fas fa-shopping-bag textColor"></i>
                    <span>{itemAmount}</span>Items</p>
                <button className='bg-red-500 text-white px-3 py-1 rounded-md' onClick={handleClose}>
                    <i class="fas fa-times"></i>
                    <span className='ml-1'>Close</span>
                </button>
            </div>
            <div className='grid grid-cols-1 gap-5 my-10'>
                {
                    cart.map(item => <CartItem item={item} key={item.id}></CartItem>)
                }
            </div>
            <div className='relative bottom-0 md:flex max-md:flex text-white font-semibold text-lg max-sm:flex-col justify-between items-center py-4'>
                <p onClick={clearCart} className='bg-green-500 w-full py-2'>Clear Cart</p>
                <p className='w-full bgColor py-2'>$ {parseFloat(total).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Sidebar;