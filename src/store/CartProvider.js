import React from 'react'
import CartContext from './Cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {

        const exsistingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id);

        const exsistingCartItem = state.items[exsistingCartItemIndex];
        let updatedItems;


        if(exsistingCartItem) {
            const updatedItem = {
                ...exsistingCartItem,
                amount: exsistingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[exsistingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if(action.type === 'REMOVE') {

        const exsistingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const exsistingItem = state.items[exsistingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exsistingItem.price;
        let updatedItems;
        if(exsistingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...exsistingItem, amount: exsistingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[exsistingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}

export default function CartProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,

        addItem: addItemToCartHandler,

        removeItem: removeItemFromCartHandler
    }

  return (
    <CartContext.Provider value={cartContextHelper}>
        {props.children}
    </CartContext.Provider>
  )
}
