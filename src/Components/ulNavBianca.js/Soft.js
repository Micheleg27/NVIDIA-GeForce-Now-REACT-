import { Link } from 'react-router-dom';
import useShow from '../BasicComponents/useShow';

function Soft() {
	const { show, setShow } = useShow(false);
	return (
		<div>
			<Link id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Soft
			</Link>
			{show && (
				<div style={{
                    position: 'absolute',
                    zIndex: '999999',
                    backgroundColor: 'whiteSmoke',
                    width: '100%',
                    left: '0'
                }}>
					<ul style={{display:'flex', gap:'10px', listStyleType:'none', justifyContent:'center'}}>
						<li>
							<span>Frameworks Applicativi</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<Link id='a' to="#">Collaborazione 3D - Omniverse</Link>
								</li>
								<li>
									<Link id='a' to="#">Settore automobilistico - DRIVE</Link>
								</li>
								<li>
									<Link id='a' to="#">Streaming video cloud-IA - Maxine</Link>
								</li>
								<li>
									<Link id='a' to="#">IA vocale - Riva</Link>
								</li>
								<li>
									<Link id='a' to="#">Analisi dei dati - RAPIDS</Link>
								</li>
								<li>
									<Link id='a' to="#">Sanità - Clara</Link>
								</li>
								<li>
									<Link id='a' to="#">Calcolo aad alte prestazioni (HPC)</Link>
								</li>
								<li>
									<Link id='a' to="#">Analisi video intelligente - Metropolis</Link>
								</li>
								<li>
									<Link id='a' to="#">Sistemi recommender - Merlin</Link>
								</li>
								<li>
									<Link id='a' to="#">Robotica - Isaac</Link>
								</li>
								<li>
									<Link id='a' to="#">Telecomunicazioni - Aerial</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>App e strumenti</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<Link id='a' to="#">cATALOGO NCG</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA NGC</Link>
								</li>
								<li>
									<Link id='a' to="#">Collaborazione 3D - Omniverse</Link>
								</li>
								<li>
									<Link id='a' to="#">Data Center</Link>
								</li>
								<li>
									<Link id='a' to="#">Monitoraggio coìon GPU</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA RTX Experience</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA RTX DesktopMAnager</Link>
								</li>
								<li>
									<Link id='a' to="#">RTX Accelereted Creative Apps</Link>
								</li>
								<li>
									<Link id='a' to="#">VIdeoconferenze</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA Woekbench</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>Giochi e intrattenimento</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<Link id='a' to="#">GeForce NOW</Link>
								</li>
								<li>
									<Link id='a' to="#">GeForce Experience</Link>
								</li>
								<li>
									<Link id='a' to="#">App NVIDIA Broadcast</Link>
								</li>
								<li>
									<Link id='a' to="#">(Omniverse) Machinima</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>Infrastruttura</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<Link id='a' to="#">Al Enterprice Suite</Link>
								</li>
								<li>
									<Link id='a' to="#">Supporto cloud nativo</Link>
								</li>
								<li>
									<Link id='a' to="#">Gestione cluster</Link>
								</li>
								<li>
									<Link id='a' to="#">Gestione distribuzione Edge</Link>
								</li>
								<li>
									<Link id='a' to="#">Servizio di inferenza</Link>
								</li>
								<li>
									<Link id='a' to="#">Accelerazione IO</Link>
								</li>
								<li>
									<Link id='a' to="#">Rete</Link>
								</li>
								<li>
									<Link id='a' to="#">Virtual GPU</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Soft;
