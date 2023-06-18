import React from 'react';
import classes from './CartItems.module.css'

const CartItems = ({item}) => {
  return (
    <li className={classes['cart-item']}>
           <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}> {item.pprice} </span>
              <span className={classes.amount}>X {item.count}</span>
            </div>
           </div>
           <div className={classes.actions}>
            <button >-</button>
            <button >+</button>
           </div>
             </li>
  )
}

export default CartItems
