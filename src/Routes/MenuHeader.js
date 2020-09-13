import React from 'react'
import { NavLink } from 'react-router-dom'
const MenuHeader = () => (

  <div className="container mt-4">
    <nav className="mb-4 navbar navbar-expand-lg navbar-dark cyan">
      <a className="navbar-brand font-bold" href="#">Delivery App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true}>
              <i className="fa fa-envelope"></i> Dashboard <span className="sr-only">(current)</span> </NavLink>

          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/create" activeClassName="is-active">
          <i className="fa fa-envelope"></i> Orders </NavLink>
            
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to="/help" activeClassName="is-active">
          <i className="fa fa-envelope"></i> Help </NavLink>
            
          </li>
          
        </ul>
      </div>
    </nav>
  </div>

)

export default MenuHeader