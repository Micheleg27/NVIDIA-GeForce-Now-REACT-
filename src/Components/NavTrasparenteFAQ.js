import { Link } from "react-router-dom";

function NavTrasparenteFAQ() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-md">
				<Link className="navbar-brand text-light" to='#'>
					FAQ
				</Link>
			</div>
		</nav>
	);
}

export default NavTrasparenteFAQ;