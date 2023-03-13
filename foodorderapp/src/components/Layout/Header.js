import React from 'react'
import mealsImage from '../../Assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

export default function Header(props) {

  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Meals4u</h1>
            <HeaderCardButton handlingClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img alt='mealsImage' src={mealsImage} />
        </div>
    </React.Fragment>
  )

}
