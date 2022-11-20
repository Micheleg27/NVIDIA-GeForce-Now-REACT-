import useShow from '../BasicComponents/useShow';

export function Prodotti() {
	const { show, setShow } = useShow(false);

	return (
		<div style={{ cursor: 'pointer' }}>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Prodotti
			</a>
			{show && (
				<div
					style={{
						position: 'absolute',
						zIndex: '999999',
						backgroundColor: 'whiteSmoke',
						width: '100%',
						left: '0'
					}}
				>
					<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
						hard
					</a>
					{show && (
						<div className="hard">
							<ul
								style={{
									display: 'flex',
									gap: '10px',
									listStyleType: 'none',
									justifyContent: 'center'
								}}
							>
								<li>
									<span>Giochi e intrattenimento</span>
									<hr />
									<ul className="ul-giochi-intrattenimento">
										<li>
											<a href="#">Schede grafiche GeForce</a>
										</li>
										<li>
											<a href="#">Laptop Gaming</a>
										</li>
										<li>
											<a href="#">Monitor G-SYNC</a>
										</li>
										<li>
											<a href="#">SHIELD</a>
										</li>
									</ul>
								</li>
								<li>
									<span>Laptop e Workstation</span>
									<hr />
									<ul className="l-w">
										<li>
											<a href="#">Laptop Gaming</a>
										</li>
										<li>
											<a href="#">Workstation desktop NVIDIA</a>
										</li>
										<li>
											<a href="#">NVIDIA RTX nei laptop professionali</a>
										</li>
										<li>
											<a href="#">DGX Station</a>
										</li>
										<li>
											<a href="#">Workstation per la scienza dei dati NVIDIA RTx</a>
										</li>
										<li>
											<a href="#">Laptop Studio</a>
										</li>
									</ul>
								</li>
								<li>
									<span>Cloud e data center</span>
									<hr />
									<ul className="cloud-dc-ul">
										<li>
											<a href="#">Panoramica</a>
										</li>
										<li>
											<a href="#">Grace CPU</a>
										</li>
										<li>
											<a href="#">Sistemi DGX</a>
										</li>
										<li>
											<a href="#">NVIDIA OVX</a>
										</li>
										<li>
											<a href="#">Piattaforma EGX</a>
										</li>
										<li>
											<a href="#">Piattaforma HGX</a>
										</li>
										<li>
											<a href="#">DRIVE Costellation</a>
										</li>
									</ul>
								</li>
								<li>
									<span>Rete</span>
									<hr />
									<ul className="rete-lu">
										<li>
											<a href="#">Panoramica</a>
										</li>
										<li>
											<a href="#">DPU</a>
										</li>
										<li>
											<a href="#">Ethernet</a>
										</li>
										<li>
											<a href="#">InfiniBand</a>
										</li>
									</ul>
								</li>
								<li>
									<span>GPUs</span>
									<hr />
									<ul className="ul-gpu">
										<li>
											<a href="#">GeForce</a>
										</li>
										<li>
											<a href="#">NVIDIA RTX / Quadro</a>
										</li>
										<li>
											<a href="#">Data Center</a>
										</li>
										<li>
											<a href="#">Titan RTX</a>
										</li>
									</ul>
								</li>
								<li>
									<span>Embedded System</span>
									<hr />
									<ul className="ul-em-sy">
										<li>
											<a href="#">Jetson</a>
										</li>
										<li>
											<a href="#">DRIVE AGX</a>
										</li>
										<li>
											<a href="#">Clara</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					)}
					<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
						Soft
					</a>
				</div>
			)}
		</div>
	);
}

{
	/* <div className="soft">
<ul className="d-flex ul-hard">
	<li>
		<span>Frameworks Applicativi</span>
		<hr />
		<ul className="frameworks">
			<li>
				<a href="#">Collaborazione 3D - Omniverse</a>
			</li>
			<li>
				<a href="#">Settore automobilistico - DRIVE</a>
			</li>
			<li>
				<a href="#">Streaming video cloud-IA - Maxine</a>
			</li>
			<li>
				<a href="#">IA vocale - Riva</a>
			</li>
			<li>
				<a href="#">Analisi dei dati - RAPIDS</a>
			</li>
			<li>
				<a href="#">Sanità - Clara</a>
			</li>
			<li>
				<a href="#">Calcolo aad alte prestazioni (HPC)</a>
			</li>
			<li>
				<a href="#" />
				<a href="#">Analisi video intelligente - Metropolis</a>
			</li>
			<li>
				<a href="#">Sistemi recommender - Merlin</a>
			</li>
			<li>
				<a href="#">Robotica - Isaac</a>
			</li>
			<li>
				<a href="#">Telecomunicazioni - Aerial</a>
			</li>
		</ul>
	</li>
	<li>
		<span>App e strumenti</span>
		<hr />
		<ul>
			<li>
				<a href="#">cATALOGO NCG</a>
			</li>
			<li>
				<a href="#">NVIDIA NGC</a>
			</li>
			<li>
				<a href="#">Collaborazione 3D - Omniverse</a>
			</li>
			<li>
				<a href="#">Data Center</a>
			</li>
			<li>
				<a href="#">Monitoraggio coìon GPU</a>
			</li>
			<li>
				<a href="#">NVIDIA RTX Experience</a>
			</li>
			<li>
				<a href="#">NVIDIA RTX DesktopMAnager</a>
			</li>
			<li>
				<a href="#">RTX Accelereted Creative Apps</a>
			</li>
			<li>
				<a href="#">VIdeoconferenze</a>
			</li>
			<li>
				<a href="#">NVIDIA Woekbench</a>
			</li>
		</ul>
	</li>
	<li>
		<span>Giochi e intrattenimento</span>
		<hr />
		<ul>
			<li>
				<a href="#">GeForce NOW</a>
			</li>
			<li>
				<a href="#">GeForce Experience</a>
			</li>
			<li>
				<a href="#">App NVIDIA Broadcast</a>
			</li>
			<li>
				<a href="#">(Omniverse) Machinima</a>
			</li>
		</ul>
	</li>
	<li>
		<span>Infrastruttura</span>
		<hr />
		<ul>
			<li>
				<a href="#">Al Enterprice Suite</a>
			</li>
			<li>
				<a href="#">Supporto cloud nativo</a>
			</li>
			<li>
				<a href="#">Gestione cluster</a>
			</li>
			<li>
				<a href="#">Gestione distribuzione Edge</a>
			</li>
			<li>
				<a href="#">Servizio di inferenza</a>
			</li>
			<li>
				<a href="#">Accelerazione IO</a>
			</li>
			<li>
				<a href="#">Rete</a>
			</li>
			<li>
				<a href="#">Virtual GPU</a>
			</li>
		</ul>
	</li>
</ul>
</div> */
}