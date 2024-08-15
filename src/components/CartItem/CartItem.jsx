import React, { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';

const CartItem = ({ item }) => {
    const {removeFromCart, increaseAmount, dicreaseAmount} = useContext(CartContext);
    return (
        <div className='px-2 py-1 grid max-sm:grid-cols-1 md:grid-cols-2 max-md:grid-cols-2 w-full gap-5 items-center bg-white shadow-lg'>
            <div className='flex gap-5 w-full md:order-1 max-md:order-1 max-sm:order-2'>
                <div className='grid grid-cols-1 bgColor text-xl min-w-7 font-semibold rounded-sm text-white'>
                { item?.quantity == 0 ? <button disabled onClick={() => increaseAmount(item?.id)}>+</button> : <button onClick={() => increaseAmount(item?.id)}>+</button>}
                   <span disabled className='bg-white text-black'>{item?.amount}</span>
                    <span onClick={() => dicreaseAmount(item?.id, item?.amount)}>-</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='h-[60px] w-[60px]'>
                        <img className='w-full h-full' src={item?.img} alt="" srcset="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='w-full text-[15px] font-semibold'>{item?.phoneName}</h1>
                    </div>
                </div>
            </div>
            <div className='flex  max-sm:justify-between md:justify-around max-md:justify-around items-center w-full md:order-2 max-md:order-2 max-sm:order-1'>
                <div>
                    <h2 className='textColor font-semibold'>{`$ ${parseFloat(item?.presentPrice * item?.amount).toFixed(2)}`}</h2>
                    <p className='text-sm'>Avb, Qnt, <span>{item?.quantity}</span> Pcs</p>
                </div>
                <div onClick={() => removeFromCart(item?.id, item?.amount)} className='bg-white shadow-2xl rounded-md text-red-500 h-8 w-8 flex items-center justify-center'>
                    <i class="fas fa-times"></i>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
