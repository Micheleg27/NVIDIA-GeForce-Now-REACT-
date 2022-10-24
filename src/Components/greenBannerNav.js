export function GreenBanner() {
	return (
		<div className="alert sv-alert-warning alert-dismissible fade show " role="alert">
			<strong>
				Fortnite in streaming su dispositivi mobili con controlli touch disponibili per tutti.{' '}
				<a id="sv-banner" href="https://www.nvidia.com/it-it/geforce-now/fortnite-mobile/">
					GIOCA ORA!
				</a>
			</strong>
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
		</div>
	);
}