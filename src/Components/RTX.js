import useShow from './BasicComponents/useShow';

export function RTX () {
	const { show, setShow } = useShow(false);

	return (
		<div>
			<div className="ad-price-option">
				<div className="tabLinks ad-1mese ad-1mese-3080" onClick={() => setShow(!show)}>
					1 mese
				</div>
				<div className="tabLinks ad-6mesi ad-6mesi3080" onClick={() => setShow(!show)}>
					6 mesi
				</div>
			</div>

			{show && (
				<div id="seimesi-RTX" className="tabContent tabcontent ad-price marginSeiMesi">
					<h3 className="AD-text">MASSIME PRESTAZIONI</h3>
					<p>
						99<sup>,99 € / 6 mesi</sup>
					</p>
					<div className="ad-text-content">
						<h3>MIGLIOR RAPPORTO QUALITÀ-PREZZO!</h3>
						<br />
						<span>Uguale 16,67 € / mese</span>
					</div>
				</div>
			)}

			{!show && (
				<div id="unmese-RTX" className="tabContent ad-price marginUnMese">
					<h3 className="AD-text">MASSIME PRESTAZIONI</h3>
					<p>
						19<sup>,99 € / mese</sup>
					</p>
				</div>
			)}
		</div>
	);
}
