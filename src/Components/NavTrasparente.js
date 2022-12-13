import { Link } from "react-router-dom";

function NavTrasparente() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-md">
				<Link className="navbar-brand text-light" to="#">
					Download
				</Link>
			</div>
		</nav>
	);
}

export default NavTrasparente;
