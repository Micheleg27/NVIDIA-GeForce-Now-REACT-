import useShow from './BasicComponents/useShow';

export function PrioritySeiMesi() {
	const { show, setShow } = useShow(false);

	return (
		<div>
			<div className="tablinks ad-1mese ad-1mese-P" type="button" onClick={() => setShow(!show)}>
				6 mesi
			</div>
			{show && (
				<div id="seimesi" className="tablinks ad-6mesi ad-6mesi-P">
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
		</div>
	);
}
