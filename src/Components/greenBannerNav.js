import { Link } from "react-router-dom";

function GreenBannerNav() {
	return (
		<div className="alert sv-alert-warning alert-dismissible fade show " role="alert">
			<strong>
				Fortnite in streaming su dispositivi mobili con controlli touch disponibili per tutti.{' '}
				<Link id="sv-banner" to="https://www.nvidia.com/it-it/geforce-now/fortnite-mobile/">
					GIOCA ORA!
				</Link>
			</strong>
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
		</div>
	);
}

export default GreenBannerNav;