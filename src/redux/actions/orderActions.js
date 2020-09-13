import uuid from 'uuid';
import moment from 'moment'
import * as  OrderStatus  from '../../OrderStatus';


export const addOrder = ({
    personName = '',
    personMobile = '',
    personAddress = '',
    itemName = '',
    orderDate = moment(),
    itemPrice = 0.0,
    itemQty = 0,
    itemStatus = OrderStatus.OrderStatus.ORDER_RECEIVED
} = {}) => (
        {
            type: 'ADD_ORDER',
            order: {
                id: uuid(),
                personName,
                personMobile,
                personAddress,
                itemName,
                orderDate,
                itemPrice,
                itemQty,
                itemStatus
            }

        })

// REMOVE_ORDER
export const removeOrder= ({ id } = {}) => ({
    type: 'REMOVE_ORDER',
    id
});

// EDIT_EXPENSE
export const editOrder = (id, updates) => ({
    type: 'EDIT_ORDER',
    id,
    updates
})
