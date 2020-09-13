import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import MenuHeader from './MenuHeader'

import CreateOrder from '../components/CreateOrder'
import Dashboard from '../components/Dashboard'
import Footer from './Footer'

const Routers = () =>(
<BrowserRouter>
  <div>
  <MenuHeader/>
  <Switch>
    <Route path="/" component={Dashboard} exact={true}/>
    <Route path="/create" component={CreateOrder}/>
    {/* <Route path="/edit/:id" component={EditExpense}/>
    <Route path="/help" component={Help}/>
    <Route component={NotFoundPage} /> */}
  </Switch>
  <Footer/>
  </div>
  </BrowserRouter>
)

export default Routers