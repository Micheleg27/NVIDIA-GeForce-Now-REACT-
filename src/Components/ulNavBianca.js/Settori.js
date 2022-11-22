import useShow from '../BasicComponents/useShow';

function Settori() {
	const { show, setShow } = useShow(false);
	return (
		<div style={{ cursor: 'pointer' }}>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Settori
			</a>
			{show && (
				<div
					style={{
						position: 'absolute',
						zIndex: '9999',
						backgroundColor: 'whiteSmoke',
						width: '100%',
						left: '0'
					}}
				>
					<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'column' }}>
						<div style={{ padding: '15px', marginLeft: '250px' }}>
							<div>
								<h6>Settori</h6>
								<div style={{ width: '900px' }}>
									<hr />
								</div>
							</div>
							<div style={{ display: 'flex' }}>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<a id='a' href="#">Panoramica</a>
									</li>
									<li>
										<a id='a' href="#">
											Architettura, ingegneria, <br /> edilizia e procedure <br /> operative
										</a>
									</li>
									<li>
										<a id='a' href="#">Internet per consumatori</a>
									</li>
									<li>
										<a id='a'href="#">Cybersecurity</a>
									</li>
								</ul>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<a id='a' href="#">Energia</a>
									</li>
									<li>
										<a id='a'  href="#">Servizi finanziari</a>
									</li>
									<li>
										<a id='a' href="#">Sanità e bioscienze</a>
									</li>
									<li>
										<a id='a' href="#">Istituzioni accademoche</a>
									</li>
									<li>
										<a id='a' href="#">Sviluppo di giochi</a>
									</li>
								</ul>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<a id='a' href="#">Produzione industriale</a>
									</li>
									<li>
										<a id='a' href="#">Media e intrsttenimento</a>
									</li>
									<li>
										<a id='a' href="#">Pubblica amministrazione</a>
									</li>
									<li>
										<a id='a' href="#">Ristoranti</a>
									</li>
									<li>
										<a id='a' href="#">Vendite al dettaglio</a>
									</li>
								</ul>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<a id='a' href="#">Robotica</a>
									</li>
									<li>
										<a id='a' href="#">Smart city</a>
									</li>
									<li>
										<a id='a' href="#">Supercomputing</a>
									</li>
									<li>
										<a id='a' href="#">
											Settore delle <br /> Telecomunicazioni
										</a>
									</li>
									<li>
										<a id='a' href="#">Trasporti</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Settori;
