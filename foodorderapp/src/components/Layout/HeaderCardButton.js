import React from 'react'
import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';


export default function HeaderCardButton() {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}
