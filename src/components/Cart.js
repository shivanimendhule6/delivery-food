import React from 'react';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    console.log("data cart"  , cartItems)
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
             <div className="w-6/12 m-auto">
              {cartItems.map((list)=>(<ItemList data={list} key={list?.card?.info?.id} showAddButton={false} />)) }
             </div>
        </div>
    );
}
export default Cart;