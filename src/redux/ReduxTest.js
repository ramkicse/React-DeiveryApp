import React from 'react'

import store from './store'
import moment from 'moment'


import getVisibleExpenses from './selector'
import { addOrder } from './actions/orderActions';
import * as  OrderStatus  from '../OrderStatus';
import { setPersonMobileFilter, setPersonNameFilter } from './actions/filterActions';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpences = getVisibleExpenses(state.orders, state.filters)
    console.log(visibleExpences)
})

function ReduxTest() {
    const firstExpence = store.dispatch(addOrder({
        personName : 'Ramakrishnna',
        personMobile : '8605429395',
        personAddress : 'Pune',
        itemName :'PC',
        orderDate : moment(),
        itemPrice : 50000.0,
        itemQty : 2,
        itemStatus : OrderStatus.OrderStatus.ORDER_RECEIVED
    }));
    store.dispatch(addOrder({
        personName : 'Ram',
        personMobile : '94044030',
        personAddress : 'Salem',
        itemName :'Mac',
        orderDate : moment(),
        itemPrice : 150000.0,
        itemQty : 1,
        itemStatus : OrderStatus.OrderStatus.ORDER_COMPLETED
    }));
    store.dispatch(setPersonNameFilter('Ram'));
    store.dispatch(setPersonMobileFilter({personMobile:'860'}));

    return (
        <div>
            <h1>Reduct Test Code</h1>
        </div>
    )
}

export default ReduxTest
