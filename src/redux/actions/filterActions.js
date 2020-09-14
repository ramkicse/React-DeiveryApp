// / 
//Filters : PersonName, OrderDate, ItemName, Mobile, Address


// SET_PERSON_NAME_FILTER
export const setPersonNameFilter = (personName = '') => ({
    type: 'SET_PERSON_NAME_FILTER',
    personName
})


// SET_ORDER_DATE_FILTER
export const setOrderDateFilter = ({ orderDate }) => ({
    type: 'SET_ORDER_DATE_FILTER',
    orderDate
})


// SET_ITEM_NAME_FILTER
export const setItemNameFilter = ( itemName = '') => ({
    type: 'SET_ITEM_NAME_FILTER',
    itemName
})

// SET_PERSON_MOBILE_FILTER
export const setPersonMobileFilter = ( personMobile ) => ({
    type: 'SET_PERSON_MOBILE_FILTER',
    personMobile
})

// SET_PERSON_ADDRESS_FILTER
export const setPersonAddressFilter = ( personAddress ) => ({
    type: 'SET_PERSON_ADDRESS_FILTER',
    personAddress
})


//Sorting : orderdate, price,personname, itemname 
// SORT_BY_ORDER_DATE
export const sortByOrderDate = () => ({
    type: 'SORT_BY_ORDER_DATE'
})

// SORT_BY_ITEM_PRICE
export const sortByItemPrice = () => ({
    type: 'SORT_BY_ITEM_PRICE'
})
// SORT_BY_PERSON_NAME
export const sortByPersonName = () => ({
    type: 'SORT_BY_PERSON_NAME'
})
// SORT_BY_ITEM_NAME
export const sortByItemName = () => ({
    type: 'SORT_BY_ITEM_NAME'
})
