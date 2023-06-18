import React, { useState } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const [cartData,setCartData] = useState();
    const price =`$${props.price.toFixed(2)}`;

    const cartDatafn=(data)=>{
      props.totalCartfn(data)
      setCartData(data);
       
    }
  return (
    <li  className={classes.meal}>
      <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      </div>
     <div>
     {/* {console.log(cartData)} */}
    <MealItemForm cartDatafn={cartDatafn}  name={props.name} description={props.description} price={props.price}/>
     </div>
    </li>
  )
}

export default MealItem
