import React from 'react'
import { connect } from 'react-redux'
import selector from '../redux/selector'
import OrderListItem from './OrderListItem'

const OrderList = (props) => (

    <div className="container" style={{ width: '80%' }}>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-primary text-white"><i className="fa fa-envelope"></i> Order Details
                            </div>
                    <div className="card-body">

                        <table className="table table-striped table-condensed">
                            <thead>
                                <tr>
                                    <th>Person Name</th>
                                    <th>Item</th>
                                    <th>Order date</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {props.orders.map((order) => (
                                    <OrderListItem key={order.id} {...order} />
                                ))}


                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    </div>





)

const mapStateToProps = (state) => {
    return {
        orders: selector(state.orders, state.filters)
    }
}

export default connect(mapStateToProps)(OrderList)
