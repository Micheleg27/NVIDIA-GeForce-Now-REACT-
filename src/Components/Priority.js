import useShow from './BasicComponents/useShow';

export function Priority() {
	const { show, setShow } = useShow(false);

	return (
		<div>
			<div className="ad-price-option">
				<div className="tablinks ad-1mese ad-1mese-P" onClick={() => setShow(!show)}
				style={{
					backgroundColor: show ? "gray" : "#76B900",
				  }}>
					1 mese
				</div>
				<div className="tablinks ad-6mesi ad-6mesi-P" onClick={() => setShow(!show)}
				style={{
					backgroundColor: show ? "#76B900" : "gray",
				  }}>
					6 mesi
				</div>
			</div>
			{show && (
				<div id="seimesi" className="tabcontent ad-price marginSeiMesi">
					<p>
						49<sup>,99 € / 6 mesi</sup>
					</p>
					<div className="ad-text-content">
						<h3>MIGLIOR RAPPORTO QUALITà-PREZZO!</h3>
						<br />
						<span>Uguale 8,33 € / mese</span>
					</div>
				</div>
			)}

			{!show && (
				<div id="unmese" className="tabcontent ad-price">
					<p>
						9<sup>,99 € / mese</sup>
					</p>
				</div>
			)}
		</div>
	);
}
