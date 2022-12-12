import { Link } from 'react-router-dom';
import useShow from '../BasicComponents/useShow';

function Hard() {
	const { show, setShow } = useShow(false);
	return (
		<div>
			<Link id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Hard
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
									<Link id='a' to="#">Schede grafiche GeForce</Link>
								</li>
								<li>
									<Link id='a' to="#">Laptop Gaming</Link>
								</li>
								<li>
									<Link id='a' to="#">Monitor G-SYNC</Link>
								</li>
								<li>
									<Link id='a'to="#">SHIELD</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>Laptop e Workstation</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<Link  id='a' to="#">Laptop Gaming</Link>
								</li>
								<li>
									<Link id='a' to="#">Workstation desktop NVIDIA</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA RTX nei laptop professionali</Link>
								</li>
								<li>
									<Link id='a' to="#">DGX Station</Link>
								</li>
								<li>
									<Link id='a' to="#">Workstation per la scienza dei dati NVIDIA RTx</Link>
								</li>
								<li>
									<Link id='a' to="#">Laptop Studio</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>Cloud e data center</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<Link id='a' to="#">Panoramica</Link>
								</li>
								<li>
									<Link id='a' to="#">Grace CPU</Link>
								</li>
								<li>
									<Link id='a' to="#">Sistemi DGX</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA OVX</Link>
								</li>
								<li>
									<Link id='a' to="#">Piattaforma EGX</Link>
								</li>
								<li>
									<Link id='a' to="#">Piattaforma HGX</Link>
								</li>
								<li>
									<Link id='a' to="#">DRIVE Costellation</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>Rete</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<Link id='a' to="#">Panoramica</Link>
								</li>
								<li>
									<Link id='a' to="#">DPU</Link>
								</li>
								<li>
									<Link id='a' to="#">Ethernet</Link>
								</li>
								<li>
									<Link id='a' to="#">InfiniBand</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>GPUs</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<Link id='a' to="#">GeForce</Link>
								</li>
								<li>
									<Link id='a' to="#">NVIDIA RTX / Quadro</Link>
								</li>
								<li>
									<Link id='a' to="#">Data Center</Link>
								</li>
								<li>
									<Link id='a' to="#">Titan RTX</Link>
								</li>
							</ul>
						</li>
						<li>
							<span>Embedded System</span>
							<hr />
							<ul style={{listStyleType: 'none'}}>
								<li>
									<Link id='a' to="#">Jetson</Link>
								</li>
								<li>
									<Link id='a' to="#">DRIVE AGX</Link>
								</li>
								<li>
									<Link id='a' to="#">Clara</Link>
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
