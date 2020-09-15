import React from 'react'
import { connect } from 'react-redux'
import { setItemNameFilter, setOrderDateFilter, setPersonMobileFilter, setPersonNameFilter, setPersonAddressFilter, sortByItemPrice, sortByPersonName, sortByOrderDate, sortByItemName } from '../redux/actions/filterActions'
import  DatePicker from 'react-datepicker'
import moment from 'moment'


const Search = (props) => (


    <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col">

            <div className="card">
                <div className="card-header bg-primary text-white"><i className="fa fa-cart-plus"></i> Search Orders
                            </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row" style={{ marginBottom: '5px' }}>
                            <div className="col">


                                <form className="form-inline">
                                    <label> Person Name </label> &nbsp;&nbsp;
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                                        onChange={(e) => {
                                            props.dispatch(setPersonNameFilter(e.target.value))
                                        }} />
                                </form>
                            </div>
                            <div className="col">
                                <form className="form-inline">
                                    <label> Order Date </label> &nbsp;&nbsp;
                                    {/* <DatePicker onChange={date => props.dispatch(setOrderDateFilter(date))
                                    }
                                     /> */}

                                    <input className="form-control" type="date" placeholder="Search" aria-label="Search"
                                        onChange={(e) => {

                                            console.log(moment(e.target.value))
                                            props.dispatch(setOrderDateFilter(moment(e.target.value)))
                                        }} />
                                </form>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '5px' }}>
                            <div className="col">
                                <form className="form-inline">
                                    <label> Item Name </label> &nbsp;&nbsp;
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            props.dispatch(setItemNameFilter(e.target.value))
                                        }} />
                                </form>
                            </div>
                            <div className="col">
                                <form className="form-inline">
                                    <label> Mobile </label> &nbsp;&nbsp;
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            props.dispatch(setPersonMobileFilter(e.target.value))
                                        }} />
                                </form>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '5px' }}>
                            <div className="col">
                                <form className="form-inline">
                                    <label> Address </label> &nbsp;&nbsp;
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            props.dispatch(setPersonAddressFilter(e.target.value))
                                        }} />
                                </form>
                            </div>
                            <div className="col">
                                <form className="form-inline">
                                    <label> Sort By </label> &nbsp;&nbsp;
                    <select className="browser-default custom-select"
                                        value={props.filters.sortBy}
                                        onChange={(e) => {
                                            if (e.target.value === 'OrderDate') {
                                                props.dispatch(sortByOrderDate());
                                            } else if (e.target.value === 'Price') {
                                                props.dispatch(sortByItemPrice())
                                            } else if (e.target.value === 'Person Name') {
                                                props.dispatch(sortByPersonName())
                                            } else if (e.target.value === 'Item Name') {
                                                props.dispatch(sortByItemName())
                                            }
                                        }}
                                    >
                                        <option selected>Choose Sort By</option>
                                        <option value="OrderDate">OrderDate</option>
                                        <option value="Price">Price</option>
                                        <option value="Person Name">Person Name</option>
                                        <option value="Item Name">Item Name</option>

                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Search)
