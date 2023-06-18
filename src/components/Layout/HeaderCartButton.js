import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/CartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
const numberOfCartItems = cartCtx.items.reduce((cuNumber,item)=>{return cuNumber+item.amount},0);
console.log("headerCArt",props.totalData);

  return (
    <button className={classes.button} onClick={props.onClick} >
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>

      <span className={classes.badge}>{props.totalData.length} </span>
    </button>
  )
}

export default HeaderCartButton
