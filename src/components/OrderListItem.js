import React, { Component } from 'react'

import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import * as  OrderStatus from '../OrderStatus'
import indian from 'indian-number-format'



class OrderListItem extends Component {
    constructor(props) {
        super(props);

        this.renderIcon = this.renderIcon.bind(this);

    }





    renderIcon(data) {


        if (data.data === OrderStatus.OrderStatus.ORDER_RECEIVED) {
            return <span className="label label-success">{data.data}</span>
        } if (data.data === OrderStatus.OrderStatus.ORDER_COMPLETED) {
            return <span className="label label-info">{data.data}</span>
        } if (data.data === OrderStatus.OrderStatus.ORDER_DELIVERED) {
            return <span className="label label-warning">{data.data}</span>
        } if (data.data === OrderStatus.OrderStatus.ORDER_IN_PROCESS) {
            return <span className="label label-important">{data.data}</span>
        }
    }
    render() {



        return (
            <tr>
                <td><Link to={`/edit/${this.props.id}`}>
                    {this.props.personName}
                </Link> </td>
                <td>{this.props.itemName}</td>
                <td>
                    {moment(this.props.orderDate).format('MMM Do, YYYY')}
                </td>
                {/* <td>
                    &#8377; {numeral(this.props.itemPrice).format('0,0.00')}
                    </td> */}

                <td>
                    &#8377; {indian.format(this.props.itemPrice)}
                </td>
                <td>{this.props.itemQty}</td>
                <td>
                    {this.renderIcon({ data: this.props.itemStatus })}

                </td>
                <td><Link to={`/summary/${this.props.id}`}>
                <i class="fa fa-print" aria-hidden="true"></i>

                </Link> </td>

            </tr>
        )
    }
}




export default connect()(OrderListItem)