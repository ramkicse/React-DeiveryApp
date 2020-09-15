import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => (
  <div className="page-wrap d-flex flex-row align-items-center">
  <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">The page you are looking for was not found.</div>
              <NavLink className="nav-link" to="/" activeClassName="is-active">
          <i className="fa fa-home"></i> Back to Home </NavLink>
             
          </div>
      </div>
  </div>
</div>

  );

export default NotFoundPage