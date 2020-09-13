import React from 'react'
import { connect } from 'react-redux'
import selector from '../redux/selector'
import OrderListItem from './OrderListItem'

const Search = (props) => (

    
        <div className="row">
        
            <div className="span12">
                    <div className="input-append span12">
                        <input type="text" className="search-query mac-style" placeholder="Search" />
                        <button type="submit" className="btn"><i className="fa fa-search"/></button>
                    </div>
                </div>
            <div className="row"></div>
        </div>
         
)

const mapStateToProps = (state) => {
    return {
        orders: selector(state.orders, state.filters)
    }
}

export default connect(mapStateToProps)(Search)
