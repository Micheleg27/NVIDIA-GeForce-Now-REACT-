import { Link } from 'react-router-dom';
import useShow from '../BasicComponents/useShow';

function Settori() {
	const { show, setShow } = useShow(false);
	return (
		<div style={{ cursor: 'pointer' }}>
			<Link id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Settori
			</Link>
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
										<Link id='a' to="#">Panoramica</Link>
									</li>
									<li>
										<Link id='a' to="#">
											Architettura, ingegneria, <br /> edilizia e procedure <br /> operative
										</Link>
									</li>
									<li>
										<Link id='a' to="#">Internet per consumatori</Link>
									</li>
									<li>
										<Link id='a'to="#">Cybersecurity</Link>
									</li>
								</ul>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<Link id='a' to="#">Energia</Link>
									</li>
									<li>
										<Link id='a'  to="#">Servizi finanziari</Link>
									</li>
									<li>
										<Link id='a' to="#">Sanità e bioscienze</Link>
									</li>
									<li>
										<Link id='a' to="#">Istituzioni accademoche</Link>
									</li>
									<li>
										<Link id='a' to="#">Sviluppo di giochi</Link>
									</li>
								</ul>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<Link id='a' to="#">Produzione industriale</Link>
									</li>
									<li>
										<Link id='a' to="#">Media e intrsttenimento</Link>
									</li>
									<li>
										<Link id='a' to="#">Pubblica amministrazione</Link>
									</li>
									<li>
										<Link id='a' to="#">Ristoranti</Link>
									</li>
									<li>
										<Link id='a' to="#">Vendite al dettaglio</Link>
									</li>
								</ul>
								<ul style={{ listStyleType: 'none', padding: '25px' }}>
									<li>
										<Link id='a' to="#">Robotica</Link>
									</li>
									<li>
										<Link id='a' to="#">Smart city</Link>
									</li>
									<li>
										<Link id='a' to="#">Supercomputing</Link>
									</li>
									<li>
										<Link id='a' to="#">
											Settore delle <br /> Telecomunicazioni
										</Link>
									</li>
									<li>
										<Link id='a' to="#">Trasporti</Link>
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
