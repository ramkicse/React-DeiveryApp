

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../redux/actions/orderActions';
import OrderForm from './OrderForm';

class CreateOrder extends Component {
   

    onSubmit = (order) => {
        this.props.addOrder(order)
        this.props.history.push('/')
    } 
    render() {
        return (
            <div>
                <OrderForm onSubmit = {this.onSubmit} />


            </div>
        );
    }

    
}


const mapDispatchtoProps = (dispatch) => ({
    addOrder : (order) => dispatch(addOrder(order))
})



export default connect(undefined,mapDispatchtoProps)(CreateOrder);