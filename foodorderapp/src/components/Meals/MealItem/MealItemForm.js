import React, { useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef } from 'react';

export default function MealItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountAsNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountAsNumber < 1 || enteredAmountAsNumber > 5 ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountAsNumber);
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label={'Amount'} 
        input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Tilføj</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}
