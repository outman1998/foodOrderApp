import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import Cartcontext from '../../store/Cart-context';
import CartItem from './Cartitem';

export default function Cart(props) {

  const cartCtx = useContext(Cartcontext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} DKK`;

  const hasItems = cartCtx.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem(item);
  }


        const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
          <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
          onRemove={cartItemRemoveHandler.bind(null, item.id)} 
          onAdd={cartItemAddHandler.bind(null, item)} 
          />
          ))}
          </ul>
        );



  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total pris:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Luk</button>
        {hasItems && <button className={classes.button}>Order!</button>}
      </div>
    </Modal>
  )
}
