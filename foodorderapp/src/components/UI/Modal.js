import React from 'react'
import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM  from 'react-dom';

const BackDrop = props => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}


export default function Modal(props) {

    const portalElement = document.getElementById('overlay-cart');

  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )

}
