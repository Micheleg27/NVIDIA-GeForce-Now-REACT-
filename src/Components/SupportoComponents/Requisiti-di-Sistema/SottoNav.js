import { Link } from "react-router-dom";

function SottoNav() {
	return (
		<nav class="navbar navbar-expand-lg">
			<div class="container-md">
				<Link class="navbar-brand text-light" to='/supporto'>
					Requisiti di Sistema
				</Link>
			</div>
		</nav>
	);
}

export default SottoNav;