import { useState } from 'react';

function GreenBannerNav() {
	const [ show, setShow ] = useState(sessionStorage.getItem('show-banner') ? false : true);

	const closeBanner = () => {
		sessionStorage.setItem('show-banner', true);
		setShow(false);
	};

	return (
		show && (
			<div className="alert sv-alert-warning alert-dismissible fade show " role="alert">
				<strong>
					Fortnite in streaming su dispositivi mobili con controlli touch disponibili per tutti.{' '}
					<a id="sv-banner" href="https://www.nvidia.com/it-it/geforce-now/fortnite-mobile/">
						GIOCA ORA!
					</a>
				</strong>
				<button type="button" className="btn-close" aria-label="Close" onClick={() => closeBanner()} />
			</div>
		)
	);
}

export default GreenBannerNav;
