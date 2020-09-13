import * as  OrderStatus  from '../../OrderStatus';
import uuid from 'uuid';
import moment from 'moment'



const sampleDate = [
    {
        id: uuid(),
        personName : 'Ramakrishnan',
        personMobile : '8605429395',
        personAddress : 'Pune',
        itemName : 'Mac Pro',
        orderDate : moment(),
        itemPrice : 150000.75,
        itemQty : 2,
        itemStatus : OrderStatus.OrderStatus.ORDER_COMPLETED
    },
    {
        id: uuid(),
        personName : 'Kumar',
        personMobile : '2423424',
        personAddress : 'Salem',
        itemName : 'PC',
        orderDate : moment(),
        itemPrice : 75000.25,
        itemQty : 1,
        itemStatus : OrderStatus.OrderStatus.ORDER_IN_PROCESS
    },
    {
        id: uuid(),
        personName : 'Rajesh',
        personMobile : '2423424',
        personAddress : 'Salem',
        itemName : 'Unix',
        orderDate : moment(),
        itemPrice : 50000.25,
        itemQty : 1,
        itemStatus : OrderStatus.OrderStatus.ORDER_DELIVERED
    },
    {
        id: uuid(),
        personName : 'Anil',
        personMobile : '2423424',
        personAddress : 'Salem',
        itemName : 'Linux',
        orderDate : moment(),
        itemPrice : 40000.25,
        itemQty : 1,
        itemStatus : OrderStatus.OrderStatus.ORDER_RECEIVED
    }
]


const orderReducerDefaultState = sampleDate;


export default (state = orderReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return [
                ...state,
                action.order
            ];
        case 'REMOVE_ORDER':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_ORDER':
            return state.map((order) => {
                if (order.id == action.id) {
                    return {
                        ...order,
                        ...action.updates
                    }
                }
                else {
                    return order;
                }
            })
        default:
            return state;
    }
};
