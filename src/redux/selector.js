
export default (orders, { personName, personMobile, personAddress, orderDate, itemName, sortBy }) => {
    
    //console.log("orders",orders)
    return orders.filter((order) => {

        const personNameMatch = order.personName.toLowerCase().includes(personName.toLowerCase());

        const personMobileMatch = order.personMobile.includes(personMobile);
        const personAddressMatch = order.personAddress.toLowerCase().includes(personAddress.toLowerCase());
        const itemNameMatch = order.itemName.toLowerCase().includes(itemName.toLowerCase());

        const orderDateMatch = typeof orderDate !== 'number' || order.orderDate >= orderDate;

        return personNameMatch && personMobileMatch && personAddressMatch && itemNameMatch && orderDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'orderDate') {
            return a.orderDate < b.orderDate ? 1 : -1;
        } else if (sortBy === 'itemPrice') {
            return a.itemPrice < b.itemPrice ? 1 : -1;
        } else if (sortBy === 'personName') {
            return a.personName > b.personName ? 1 : -1;
        } else if (sortBy === 'itemName') {
            return a.itemName > b.itemName ? 1 : -1;
        }
    });
};
