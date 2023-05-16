import React, {useState} from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import Cartcontext from '../../store/Cart-context';
import CartItem from './Cartitem';
import CheckOut from './CheckOut';

export default function Cart(props) {

  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(Cartcontext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} DKK`;

  const showOrder = cartCtx.totalAmount > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem(item);
  }

  const orderHandler = () => {
    setIsCheckout(true)
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

  const modalActions = (
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Luk</button>
    {showOrder && <button onClick={orderHandler} className={classes.button}>Order!</button>}
  </div>
  );



  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total pris:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <CheckOut onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  )
}
