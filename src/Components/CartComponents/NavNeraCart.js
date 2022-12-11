import React from 'react';
import { Link } from 'react-router-dom';

export function NavNeraCart() {
	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						GeForce NOW
					</Link>
				</div>
			</nav>
		</div>
	);
}
