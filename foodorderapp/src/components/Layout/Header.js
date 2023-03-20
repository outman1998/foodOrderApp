import React from 'react'
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
            <img alt='mealsImage' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" />
        </div>
    </React.Fragment>
  )

}