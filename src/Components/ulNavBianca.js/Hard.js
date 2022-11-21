import useShow from '../BasicComponents/useShow';

function Hard() {
	const { show, setShow } = useShow(false);
	return (
		<div>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Hard
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
							<ul style={{listStyleType: 'none'}}>
								<li>
									<a id='a' href="#">Schede grafiche GeForce</a>
								</li>
								<li>
									<a id='a' href="#">Laptop Gaming</a>
								</li>
								<li>
									<a id='a' href="#">Monitor G-SYNC</a>
								</li>
								<li>
									<a id='a'href="#">SHIELD</a>
								</li>
							</ul>
						</li>
						<li>
							<span>Laptop e Workstation</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<a  id='a' href="#">Laptop Gaming</a>
								</li>
								<li>
									<a id='a' href="#">Workstation desktop NVIDIA</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA RTX nei laptop professionali</a>
								</li>
								<li>
									<a id='a' href="#">DGX Station</a>
								</li>
								<li>
									<a id='a' href="#">Workstation per la scienza dei dati NVIDIA RTx</a>
								</li>
								<li>
									<a id='a' href="#">Laptop Studio</a>
								</li>
							</ul>
						</li>
						<li>
							<span>Cloud e data center</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<a id='a' href="#">Panoramica</a>
								</li>
								<li>
									<a id='a' href="#">Grace CPU</a>
								</li>
								<li>
									<a id='a' href="#">Sistemi DGX</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA OVX</a>
								</li>
								<li>
									<a id='a' href="#">Piattaforma EGX</a>
								</li>
								<li>
									<a id='a' href="#">Piattaforma HGX</a>
								</li>
								<li>
									<a id='a' href="#">DRIVE Costellation</a>
								</li>
							</ul>
						</li>
						<li>
							<span>Rete</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<a id='a' href="#">Panoramica</a>
								</li>
								<li>
									<a id='a' href="#">DPU</a>
								</li>
								<li>
									<a id='a' href="#">Ethernet</a>
								</li>
								<li>
									<a id='a' href="#">InfiniBand</a>
								</li>
							</ul>
						</li>
						<li>
							<span>GPUs</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<a id='a' href="#">GeForce</a>
								</li>
								<li>
									<a id='a' href="#">NVIDIA RTX / Quadro</a>
								</li>
								<li>
									<a id='a' href="#">Data Center</a>
								</li>
								<li>
									<a id='a' href="#">Titan RTX</a>
								</li>
							</ul>
						</li>
						<li>
							<span>Embedded System</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<a id='a' href="#">Jetson</a>
								</li>
								<li>
									<a id='a' href="#">DRIVE AGX</a>
								</li>
								<li>
									<a id='a' href="#">Clara</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Hard;
