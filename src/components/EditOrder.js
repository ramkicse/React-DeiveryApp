import React from 'react'
import { connect } from 'react-redux'
import { editOrder, removeOrder } from '../redux/actions/orderActions'
import OrderForm from './OrderForm'


class EditOrder extends React.Component {

    onSubmit = (order) => {
        this.props.editOrder(this.props.order.id, order)
        this.props.history.push('/')
    }

    onRemoveOrder = () => {
       
        this.props.removeOrder(this.props.order.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div >

                <OrderForm title='Edit Delivery Order'
                    order={this.props.order}
                    onSubmit={this.onSubmit}
                    onRemove = {this.onRemoveOrder}
                />
             
            </div>
        )
    }
}

const mapStateToProps = (state, oldProps) => ({
    order: state.orders.find((order) => order.id === oldProps.match.params.id)

})

const mapDispatchToProps = (dispatch, props) => ({
    editOrder: (id, order) => dispatch(editOrder(id, order)),
    removeOrder: (id) => dispatch(removeOrder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditOrder)
