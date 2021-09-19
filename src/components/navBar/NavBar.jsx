import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="navBar">
			<nav>
				<ul>
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<NavLink className="link" to="/students">
							Students
						</NavLink>
					</li>

					<li>
						{' '}
						<NavLink className="link" to="register">
							Register
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
