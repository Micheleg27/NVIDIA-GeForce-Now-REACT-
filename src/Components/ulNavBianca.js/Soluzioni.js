import { Link } from 'react-router-dom';
import useShow from '../BasicComponents/useShow';

function Soluzioni() {
	const { show, setShow } = useShow(false);
	return (
		<div style={{cursor:'pointer'}}>
			<Link id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Soluzioni
			</Link>
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
                    <ul style={{display:'flex', gap:'10px', listStyleType:'none', justifyContent:'center'}}>
                    <li style={{ padding:'25px'}}>
						<h6>AI and Data Science</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<Link id='a' to="#">Panoramica</Link>
							</li>
							<li>
								<Link id='a' to="#">Analisi dei dati</Link>
							</li>
							<li>
								<Link id='a' to="#">Machine Learning</Link>
							</li>
							<li>
								<Link id='a' to="#">Teaining su Deep Learning</Link>
							</li>
							<li>
								<Link id='a' to="#">Inferenza su deep learing</Link>
							</li>
							<li>
								<Link id='a' to="#">IA conversazione</Link>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Data center e cloud computing</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<Link id='a' to="#">Panoramica</Link>
							</li>
							<li>
								<Link id='a' to="#">Computing accelerato per l'IT aziendale</Link>
							</li>
							<li>
								<Link id='a' to="#">NVIDIA LaunchPad</Link>
							</li>
							<li>
								<Link id='a' to="#">Cloud Computing</Link>
							</li>
							<li>
								<Link id='a' to="#">Co-localizzazione</Link>
							</li>
							<li>
								<Link id='a' to="#">Edge Computing</Link>
							</li>
							<li>
								<Link id='a' to="#">Rete</Link>
							</li>
							<li>
								<Link id='a' to="#">In sede</Link>
							</li>
							<li>
								<Link id='a'to="#">Virtualizzazione</Link>
							</li>
							<li>
								<Link id='a' to="#">MLOps</Link>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Design e visualizzazione</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<Link id='a' to="#">Panoramica</Link>
							</li>
							<li>
								<Link id='a' to="#">Realtà aumenteta e virtuale</Link>
							</li>
							<li>
								<Link id='a' to="#">Multi-Display</Link>
							</li>
							<li>
								<Link id='a' to="#">Rendering</Link>
							</li>
							<li>
								<Link id='a' to="#">Collaborazione 3D</Link>
							</li>
							<li>
								<Link id='a' to="#">Virtualizzazione della grafica</Link>
							</li>
							<li>
								<Link id='a' to="#">Simulazione ingegneristica</Link>
							</li>
							<li>
								<Link id='a' to="#">Trasmissione</Link>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Edge Computing</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<Link id='a' to="#">Panoramica</Link>
							</li>
							<li>
								<Link id='a' to="#">IA su 5G</Link>
							</li>
							<li>
								<Link id='a' to="#">Intelligent Video Analytics</Link>
							</li>
							<li>
								<Link id='a' to="#">Industrial</Link>
							</li>
							<li>
								<Link id='a' to="#">Robotics</Link>
							</li>
							<li>
								<Link id='a' to="#">Edge Deployment Management</Link>
							</li>
							<li>
								<Link id='a' to="#">Edge Solutions</Link>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Calcolo ad alte prestazioni</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<Link id='a' to="#">Panoramica</Link>
							</li>
							<li>
								<Link id='a' to="#">HPC e IA</Link>
							</li>
							<li>
								<Link id='a' to="#">Simulazione e modellazione</Link>
							</li>
							<li>
								<Link id='a' to="#">visualizzazione scientifica</Link>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Self-Driving Cars</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<Link id='a' to="#">Panoramica</Link>
							</li>
							<li>
								<Link id='a' to="#">Chauffeur</Link>
							</li>
							<li>
								<Link id='a' to="#">Concierge</Link>
							</li>
							<li>
								<Link id='a' to="#">Training</Link>
							</li>
							<li>
								<Link id='a' to="#">Mappatura HD</Link>
							</li>
							<li>
								<Link id='a' to="#">Simulazione</Link>
							</li>
							<li>
								<Link id='a' to="#">Robotaxi</Link>
							</li>
							<li>
								<Link id='a' to="#">Autotrasporto</Link>
							</li>
							<li>
								<Link id='a' to="#">ADAS</Link>
							</li>
						</ul>
					</li>
                    </ul>
					
				</div>
			)}
		</div>
	);
}

export default Soluzioni;
