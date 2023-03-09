import React from 'react'
import classes from './Card.module.css';

export default function Card(props) {

        const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name: 'sushi', price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;



  return (
    <div>

    {cartItems}
    <div className={classes.total}>
        <span>total amount</span>
        <span>35.62</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}></button>
    </div>

    </div>
  )
}
