import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react';
import cartContext from '../../../store/Cart-context';

export default function MealItem(props) {

  const cartCtx = useContext(cartContext)

  const price = `${props.price} DKK`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>

        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
  )
}
