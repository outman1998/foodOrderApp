import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

export default function Cart(props) {

  const random = Math.floor(Math.random() * 10);

        const cartItems = (
        <ul className={classes['cart-items']}>
          {[{id: 'c1', name: 'sushi', price: 12.99}].map((item) => (<li key={random}>{item.name}</li>))}
          </ul>
        );



  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order!</button>
      </div>
    </Modal>
  )
}
