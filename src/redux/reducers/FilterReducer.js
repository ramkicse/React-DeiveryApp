
//Filters : PersonName, OrderDate, ItemName, Mobile, Address
//Sorting : orderdate, price,personname, itemname 


const filtersReducerDefaultSate = {
    personName: '',
    personMobile: '',
    personAddress: '',
    orderDate: '',
    itemName: '',
    sortBy: 'orderDate'
};

export default (state = filtersReducerDefaultSate, action) => {
    switch (action.type) {
        case 'SET_PERSON_NAME_FILTER':
            return {
                ...state,
                personName: action.personName
            }
        case 'SET_PERSON_MOBILE_FILTER':
            return {
                ...state,
                personMobile: action.personMobile
            }
        case 'SET_PERSON_ADDRESS_FILTER':
            return {
                ...state,
                personAddress: action.personAddress
            }
        case 'SET_ORDER_DATE_FILTER':
            return {
                ...state,
                orderDate: action.orderDate
            }
        case 'SET_ITEM_NAME_FILTER':
            return {
                ...state,
                itemName: action.itemName
            }

        case 'SORT_BY_ORDER_DATE':
            return {
                ...state,
                sortBy: 'orderDate'
            }
        case 'SORT_BY_ITEM_PRICE':
            return {
                ...state,
                sortBy: 'itemPrice'
            }
        case 'SORT_BY_PERSON_NAME':
            return {
                ...state,
                sortBy: 'personName'
            }
        case 'SORT_BY_ITEM_NAME':
            return {
                ...state,
                sortBy: 'itemName'
            }
        default:
            return state;
    }
};






