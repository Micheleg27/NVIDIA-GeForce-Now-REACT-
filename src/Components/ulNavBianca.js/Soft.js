import useShow from '../BasicComponents/useShow';

function Soft() {
	const { show, setShow } = useShow(false);
	return (
		<div>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Soft
			</a>
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
									<a id='a' href="#">Collaborazione 3D - Omniverse</a>
								</li>
								<li>
									<a id='a' href="#">Settore automobilistico - DRIVE</a>
								</li>
								<li>
									<a id='a' href="#">Streaming video cloud-IA - Maxine</a>
								</li>
								<li>
									<a id='a' href="#">IA vocale - Riva</a>
								</li>
								<li>
									<a id='a' href="#">Analisi dei dati - RAPIDS</a>
								</li>
								<li>
									<a id='a' href="#">Sanità - Clara</a>
								</li>
								<li>
									<a id='a' href="#">Calcolo aad alte prestazioni (HPC)</a>
								</li>
								<li>
									<a id='a' href="#">Analisi video intelligente - Metropolis</a>
								</li>
								<li>
									<a id='a' href="#">Sistemi recommender - Merlin</a>
								</li>
								<li>
									<a id='a' href="#">Robotica - Isaac</a>
								</li>
								<li>
									<a id='a' href="#">Telecomunicazioni - Aerial</a>
								</li>
							</ul>
						</li>
						<li>
							<span>App e strumenti</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<a id='a' href="#">cATALOGO NCG</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA NGC</a>
								</li>
								<li>
									<a id='a' href="#">Collaborazione 3D - Omniverse</a>
								</li>
								<li>
									<a id='a' href="#">Data Center</a>
								</li>
								<li>
									<a id='a' href="#">Monitoraggio coìon GPU</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA RTX Experience</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA RTX DesktopMAnager</a>
								</li>
								<li>
									<a id='a' href="#">RTX Accelereted Creative Apps</a>
								</li>
								<li>
									<a id='a' href="#">VIdeoconferenze</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA Woekbench</a>
								</li>
							</ul>
						</li>
						<li>
							<span>Giochi e intrattenimento</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<a id='a' href="#">GeForce NOW</a>
								</li>
								<li>
									<a id='a' href="#">GeForce Experience</a>
								</li>
								<li>
									<a id='a' href="#">App NVIDIA Broadcast</a>
								</li>
								<li>
									<a id='a' href="#">(Omniverse) Machinima</a>
								</li>
							</ul>
						</li>
						<li>
							<span>Infrastruttura</span>
							<hr />
							<ul style={{listStyleType:'none'}}>
								<li>
									<a id='a' href="#">Al Enterprice Suite</a>
								</li>
								<li>
									<a id='a' href="#">Supporto cloud nativo</a>
								</li>
								<li>
									<a id='a' href="#">Gestione cluster</a>
								</li>
								<li>
									<a id='a' href="#">Gestione distribuzione Edge</a>
								</li>
								<li>
									<a id='a' href="#">Servizio di inferenza</a>
								</li>
								<li>
									<a id='a' href="#">Accelerazione IO</a>
								</li>
								<li>
									<a id='a' href="#">Rete</a>
								</li>
								<li>
									<a id='a' href="#">Virtual GPU</a>
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
