import React, { useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItems from './CartItems';


const Cart = (props) => {
  var total =parseFloat(0);
  const data=props.totalData;
  console.log("cart",data);
  
    const cartItem=(
        <ul className={classes['cart-items']}>
        {data.map((item)=>{
          total=total+parseFloat(item.price);
          return (
           <CartItems key={Math.random().toString()} item={item}/>
          )
        })}
            {/* {data.map((item)=>{
              
              <li key={Math.random().toString()}>{item.name}</li>))} */}
        </ul>
    )
  return (
    <Modal onClose={props.onClose}>
    {cartItem}
    <div className={classes.total}><span>Total Amount</span>
    <span> ${total?total.toFixed(2):"0.00"}</span></div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart
