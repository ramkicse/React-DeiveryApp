import React from 'react'
import OrderList from './OrderList'
import Search from './Search'

function Dashboard() {
    return (
        <div className="container" style={{ width: '80%' }}>

            <Search />
            <OrderList />
        </div>
    )
}

export default Dashboard
