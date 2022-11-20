import useShow from '../BasicComponents/useShow';

function Soluzioni() {
	const { show, setShow } = useShow(false);
	return (
		<div style={{cursor:'pointer'}}>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Soluzioni
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
                    <ul style={{display:'flex', gap:'10px', listStyleType:'none', justifyContent:'center'}}>
                    <li style={{ padding:'25px'}}>
						<h6>AI and Data Science</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<a id='a' href="#">Panoramica</a>
							</li>
							<li>
								<a id='a' href="#">Analisi dei dati</a>
							</li>
							<li>
								<a id='a' href="#">Machine Learning</a>
							</li>
							<li>
								<a id='a' href="#">Teaining su Deep Learning</a>
							</li>
							<li>
								<a id='a' href="#">Inferenza su deep learing</a>
							</li>
							<li>
								<a id='a' href="#">IA conversazione</a>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Data center e cloud computing</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<a id='a' href="#">Panoramica</a>
							</li>
							<li>
								<a id='a' href="#">Computing accelerato per l'IT aziendale</a>
							</li>
							<li>
								<a id='a' href="#">NVIDIA LaunchPad</a>
							</li>
							<li>
								<a id='a' href="#">Cloud Computing</a>
							</li>
							<li>
								<a id='a' href="#">Co-localizzazione</a>
							</li>
							<li>
								<a id='a' href="#">Edge Computing</a>
							</li>
							<li>
								<a id='a' href="#">Rete</a>
							</li>
							<li>
								<a id='a' href="#">In sede</a>
							</li>
							<li>
								<a id='a'href="#">Virtualizzazione</a>
							</li>
							<li>
								<a id='a' href="#">MLOps</a>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Design e visualizzazione</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<a id='a' href="#">Panoramica</a>
							</li>
							<li>
								<a href="#">Realtà aumenteta e virtuale</a>
							</li>
							<li>
								<a id='a' href="#">Multi-Display</a>
							</li>
							<li>
								<a id='a' href="#">Rendering</a>
							</li>
							<li>
								<a id='a' href="#">Collaborazione 3D</a>
							</li>
							<li>
								<a id='a' href="#">Virtualizzazione della grafica</a>
							</li>
							<li>
								<a id='a' href="#">Simulazione ingegneristica</a>
							</li>
							<li>
								<a id='a' href="#">Trasmissione</a>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Edge Computing</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<a id='a' href="#">Panoramica</a>
							</li>
							<li>
								<a id='a' href="#">IA su 5G</a>
							</li>
							<li>
								<a id='a' href="#">Intelligent Video Analytics</a>
							</li>
							<li>
								<a id='a' href="#">Industrial</a>
							</li>
							<li>
								<a id='a' href="#">Robotics</a>
							</li>
							<li>
								<a id='a' href="#">Edge Deployment Management</a>
							</li>
							<li>
								<a id='a' href="#">Edge Solutions</a>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Calcolo ad alte prestazioni</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<a id='a' href="#">Panoramica</a>
							</li>
							<li>
								<a id='a' href="#">HPC e IA</a>
							</li>
							<li>
								<a id='a' href="#">Simulazione e modellazione</a>
							</li>
							<li>
								<a id='a' href="#">visualizzazione scientifica</a>
							</li>
						</ul>
					</li>
					<li style={{ padding:'25px'}}>
						<h6>Self-Driving Cars</h6>
						<hr />
						<ul style={{listStyleType:'none'}}>
							<li>
								<a id='a' href="#">Panoramica</a>
							</li>
							<li>
								<a id='a' href="#">Chauffeur</a>
							</li>
							<li>
								<a id='a' href="#">Concierge</a>
							</li>
							<li>
								<a id='a' href="#">Training</a>
							</li>
							<li>
								<a id='a' href="#">Mappatura HD</a>
							</li>
							<li>
								<a id='a' href="#">Simulazione</a>
							</li>
							<li>
								<a id='a' href="#">Robotaxi</a>
							</li>
							<li>
								<a id='a' href="#">Autotrasporto</a>
							</li>
							<li>
								<a id='a' href="#">ADAS</a>
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
