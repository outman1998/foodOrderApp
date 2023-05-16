import React from 'react';
import classes from './CheckOut.module.css';

export default function CheckOut(props) {

    const confirmHandler = (event) => {
        event.preventDefault();
        console.log("hej");
    }


  return (
    <form onSubmit={confirmHandler}>

        <div className={classes.control}>
            <label htmlFor='name'>Your name</label>
            <input type="text" id='name'/>
        </div>

        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type="text" id='street'/>
        </div>

        <div className={classes.control}>
            <label htmlFor='postal'>Postal code</label>
            <input type="text" id='postal'/>
        </div>

        <div className={classes.control}>
            <label htmlFor='city'>city</label>
            <input type="text" id='city'/>
        </div>
        <div className={classes.actions}>
            <button>Confirm</button>
            <button onClick={props.onCancel} type='button'>Cancel</button>
        </div>


    </form>
  )
}
