import React from 'react'
import { connect } from 'react-redux'
import OrderList from './OrderList'
import Search from './Search'
import numwords from 'num-words'

function OrderSummary(props) {

    if(!props.order){
        props.history.push('/')
        return null;
    }
    console.log(" order : ",props.order)
    const total = Math.floor(props.order.itemPrice * props.order.itemQty)
    console.log(total)

    
    return (

        <section className="content content_content" style={{ width: "70%", margin: "auto" }}>
            <section className="invoice">

                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="page-header">
                            <i className="fa fa-globe"></i> Delivery App.
                                    <small className="pull-right">   </small>
                        </h2>
                    </div>
                </div>

                <div className="row invoice-info">
                    <div className="col-sm-4 invoice-col">
                        From
                                <address>
                            <strong> </strong>
                        </address>
                    </div>
                    <div className="col-sm-4 invoice-col">
                        To
                                <address>
                            <strong>
                                {props.order.personName}
                            </strong>
                            <br />
                                    Address:
                                    {props.order.personAddress}
                                </address>
                    </div>
                    <div className="col-sm-4 invoice-col">
                        <b>Invoice </b><br />
                        <br />
                        <b>Order ID:</b> {props.order.id}<br />
                       
                            </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Item Total</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr>
                                    <td>{props.order.itemName}</td>
                                    <td>{props.order.itemQty}</td>
                                    <td>{props.order.itemPrice}</td>
                                    <td>{props.order.itemPrice * props.order.itemQty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                      
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>


                                    <tr>
                                        <th>Total:</th>
                                        <td><blink> <b>{numwords(total).toUpperCase()} RUPEES</b></blink></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </section>
        </section>
    )
}

const mapStateToProps = (state, oldProps) => ({
    order: state.orders.find((order) => order.id === oldProps.match.params.id)

})

export default connect(mapStateToProps)(OrderSummary)
