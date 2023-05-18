import React, { useState } from 'react';
import classes from './CheckOut.module.css';

export default function CheckOut(props) {

    const [name, setName] = useState();
    const [street, setStreet] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        zip: true
    });

    const isEmpty = (value) => value === '';
    const isRealZip = (value) => value.length === 4;

    const confirmHandler = (event) => {

        event.preventDefault();

        const enteredNameIsValid = !isEmpty(name);
        const enteredStreetIsValid = !isEmpty(street);
        const enteredZipIsValid = isRealZip(zip);
        const enteredCityIsValid = !isEmpty(city);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            zip: enteredZipIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = 
        enteredNameIsValid && 
        enteredStreetIsValid && 
        enteredZipIsValid && 
        enteredCityIsValid;

        if(!formIsValid) {
            return;
        }
        // console.log(name);
        // console.log(street);
        // console.log(zip);
        // console.log(city);
        props.onConfirm({
            name: name,
            street: street,
            zip: zip,
            city: city

        })

    }

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const streetChangeHandler = (event) => {
        setStreet(event.target.value)
    }
    const postalChangeHandler = (event) => {
        setZip(event.target.value)
    }

    const cityChangeHandler = (event) => {
        setCity(event.target.value)
    }

    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const zipControlClasses = `${classes.control} ${formInputsValidity.zip ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;



    return (
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input 
            type='text' 
            id='name' 
            onChange={nameChangeHandler}
            />
            {!formInputsValidity.name && <p>Indtast et gyldigt navn</p>}
          </div>
          <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input 
            type='text' 
            id='street' 
            onChange={streetChangeHandler}
            />
            {!formInputsValidity.street && <p>Indtast en gyldig adresse</p>}
          </div>
          <div className={zipControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input 
            type='text' 
            id='postal'
            onChange={postalChangeHandler}
            />
            {!formInputsValidity.zip && <p>Indtast et gyldigt postnummer</p>}
          </div>
          <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input 
            type='text' 
            id='city' 
            onChange={cityChangeHandler}
            />
            {!formInputsValidity.city && <p>Indtast en gyldig by</p>}
          </div>
          <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
      );
}
