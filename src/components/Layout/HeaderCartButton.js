import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/CartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
const numberOfCartItems = cartCtx.items.reduce((cuNumber,item)=>{return cuNumber+item.amount},0);

  return (
    <button className={classes.button} onClick={props.onClick} >
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>

      <span className={classes.badge}>3 </span>
    </button>
  )
}

export default HeaderCartButton
