import React from 'react'
import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import cartContext from '../../store/Cart-context';


export default function HeaderCardButton(props) {

  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNr, item) => {
    return currentNr + item.amount;
  }, 0);

  return (
    <button onClick={props.handlingClick} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Basket</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
