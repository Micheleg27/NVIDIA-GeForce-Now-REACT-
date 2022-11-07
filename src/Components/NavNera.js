import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './BasicComponents/Button';
import '../SASS/button.css';

export function NavNera() {
	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						GeForce NOW
					</Link>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/Abbonamento">
										abbonamento
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/Scarica">
										scarica
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/Giochi">
										giochi
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/Supporto">
										supporto
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="bho">
						<div className="btn-doppio">
							<button type="button"  className='bnt-hidden BTN--primary--green BTN--medium BTN'>
								Gioca Ora
							</button>
							<button type="button" className='bnt-hidden BTN--secondary--outline BTN--medium BTN'>
								Carte Regalo
							</button>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasNavbar"
								aria-controls="offcanvasNavbar"
							>
								<span className="navbar-toggler-icon" />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
