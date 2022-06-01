import React from 'react';
import useCart from '../../Hooks/useCart';
import { removeFromDb } from './Utilities/AddToDb';
import Cart from './Cart';
import OrderSummery from './OrderSummery';

const Orders = () => {
    const [cart, setCart] = useCart();
    const handleRemoveFood = food => {
        const rest = cart.filter(pd => pd._id !== food._id);
        setCart(rest);
        removeFromDb(food._id);
    }
    return (
        <div className='shop-container px-20 grid grid-cols-3'>
            <div className=" col-span-2">
                <h1 className='font-bold text-2xl ml-5 mb-4'>Your Cart</h1>
                {
                    cart.map(food => <Cart
                        key={food._id}
                        food={food}
                        handleRemoveFood={handleRemoveFood}
                    ></Cart>)
                }
            </div>
            <div className=''>
                <h1 className='font-bold text-2xl ml-5'>Order Summary</h1>
               <OrderSummery cart={cart}></OrderSummery>
            </div>
        </div>
    );
};

export default Orders;