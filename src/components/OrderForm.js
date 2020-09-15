
import React, { Component } from 'react';

import * as  OrderStatus from '../OrderStatus';


import moment from 'moment'


class OrderForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

            personName: props.order ? props.order.personName : '',
            personMobile: props.order ? props.order.personMobile : '',
            personAddress: props.order ? props.order.personAddress : '',
            itemName: props.order ? props.order.itemName : '',
            orderDate: props.order ? moment(props.order.orderDate) : '',
            itemPrice: props.order ? props.order.itemPrice : '',
            itemQty: props.order ? props.order.itemQty : '',
            error: '',
            calendarFocused: false,
        }
    }

    onPersonNameChange = (e) => {
        const personName = e.target.value;
        this.setState(() => ({ personName }))
    }

    onPersonMobileChange = (e) => {
        const personMobile = e.target.value;
        this.setState(() => ({ personMobile }))
    }
    onPersonAddressChange = (e) => {
        const personAddress = e.target.value;
        this.setState(() => ({ personAddress }))
    }
    onItemNameChange = (e) => {
        const itemName = e.target.value;
        this.setState(() => ({ itemName }))
    }
    onItemPriceChange = (e) => {
        const itemPrice = e.target.value;
        this.setState(() => ({ itemPrice }))
    }
    onItemQtyChange = (e) => {
        const itemQty = e.target.value;
        this.setState(() => ({ itemQty }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        if (!this.state.personName || !this.state.personMobile || !this.state.itemPrice || !this.state.itemQty) {
            this.setState(() => ({ error: "Person Name, mobile and Item price, quantity are mandatory" }))
        }
        else {
            this.setState(() => (
                { error: '' }
            ))
            this.props.onSubmit({
                personName: this.state.personName,
                personMobile: this.state.personMobile,
                personAddress: this.state.personAddress,
                itemName: this.state.itemName,
                orderDate: moment(),
                itemPrice: parseFloat(this.state.itemPrice),
                itemQty: this.state.itemQty,
                itemStatus: OrderStatus.OrderStatus.ORDER_RECEIVED


            })
        }
    }




    render() {
        const title = this.props.title ? this.props.title : 'Add Delivery Order'
        const removeButton = this.props.title ? <button onClick={this.props.onRemove} className="btn btn-danger text-right">Remove Order</button> : ''
        const buttonString = this.props.title ? 'Update the Order' : 'Add Delivery Order'
        
        return (


            <div className="container" style={{ width: '60%' }}>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <i className="fa fa-plus-circle"></i> {title}
                            </div>
                            <div className="card-body">
                                <div className="alert alert-danger">
                                    {this.state.error && <p>{this.state.error}</p>}
                                </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter the Person Name"
                                            autoFocus
                                            value={this.state.personName}
                                            onChange={this.onPersonNameChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Mobile</label>
                                        <input type="text" className="form-control" placeholder="Enter the Person Mobile"
                                            value={this.state.personMobile}
                                            onChange={this.onPersonMobileChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Address</label>
                                        <textarea className="form-control" id="message" rows="3" value={this.state.personAddress}
                                            onChange={this.onPersonAddressChange}
                                            placeholder="Enter the Address" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Item Name</label>
                                        <input type="text" className="form-control" placeholder="Enter the Item Name"
                                            value={this.state.itemName}
                                            onChange={this.onItemNameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Item Price</label>
                                        <input type="text" className="form-control" placeholder="Enter the Item Price"
                                            value={this.state.itemPrice}
                                            onChange={this.onItemPriceChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Item Quantity</label>
                                        <input type="text" className="form-control" placeholder="Enter the Item Quantity"
                                            value={this.state.itemQty}
                                            onChange={this.onItemQtyChange}
                                        />
                                    </div>
                                    <div className="mx-auto">
                                        <button type="submit" className="btn btn-primary text-right">{buttonString}</button>



                                        {removeButton}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        );
    }
}


export default OrderForm;