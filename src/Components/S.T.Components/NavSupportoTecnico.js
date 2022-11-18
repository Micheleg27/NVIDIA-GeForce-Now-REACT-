import { Link } from 'react-router-dom';

export function NavSupportoTecnico() {
	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg">
				<div className="container-fluid">
					<Link className="navbar-brand" to="">
						Supporto
					</Link>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
								<li className="nav-item" style={{width:'330px'}}>
									<Link className="nav-link active" aria-current="page" to="">
										assistenza ai consumatori
									</Link>
								</li>
								<li className="nav-item" style={{width:'330px'}}>
									<Link className="nav-link" to="">
										supporto aziendale
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="bho">
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
			</nav>
		</div>
	);
}
