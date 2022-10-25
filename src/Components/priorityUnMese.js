import useShow from './BasicComponents/useShow';

export function PriorityUnMese() {
	const { show, setShow } = useShow(false);

	return (
		<div>
			<div className="tablinks ad-1mese ad-1mese-P" type="button" onClick={() => setShow(!show)}>
				1 mese
			</div>
			{show && (
				<div id="unmese" className="tabcontent ad-price">
					<p>
						9<sup>,99 € / mese</sup>
					</p>
				</div>
			)}
		</div>
	);
}
