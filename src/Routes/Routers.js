import React from 'react'
import {HashRouter,  Route,Switch} from 'react-router-dom'
import MenuHeader from './MenuHeader'

import CreateOrder from '../components/CreateOrder'
import Dashboard from '../components/Dashboard'
import Footer from './Footer'
import Help from '../components/Help'
import Page404 from '../components/Page404'
import EditOrder from '../components/EditOrder'
import OrderSummary from '../components/OrderSummary'

const Routers = () =>(
<HashRouter basename='/'>
  <div>
  <MenuHeader/>
  <Switch>
    <Route path="/" component={Dashboard} exact={true}/>
    <Route path="/create" component={CreateOrder}/>
     <Route path="/edit/:id" component={EditOrder}/>
     <Route path="/summary/:id" component={OrderSummary}/>
    <Route path="/help" component={Help}/>
    <Route component={Page404} /> 
  </Switch>
  <Footer/>
  </div>
  </HashRouter>
)

export default Routers