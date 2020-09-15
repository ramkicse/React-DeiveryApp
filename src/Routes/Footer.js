import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (

	<div className="bottom section-padding">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<div className="copyright">
						<p>© <span>2020</span>
							<NavLink className="transition" to="/" activeClassName="is-active" exact={true}>
								Ramakrishnan <span className="sr-only">(current)</span> </NavLink>
			    All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Footer