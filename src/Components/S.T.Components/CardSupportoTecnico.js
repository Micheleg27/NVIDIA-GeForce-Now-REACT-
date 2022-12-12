import { Link } from "react-router-dom";

function CardSupportoTecnico() {
	return (
		<div className="d-flex justify-content-center bg-light" style={{gap:'30px', flexWrap:'wrap'}}>
			<div className="">
				<div className="card shadow p-3 mb-5 bg-body" style={{ borderRadius: '0' }}>
					<div className="card-body">
						<h5 className="card-title">assistenza ai consumatori</h5>
						<p className="card-text">Trova il supporto per prodotti come:</p>
						<p>
							Schede grafiche <br />
							GeForce GeForce <br />
							NOW NVIDIA SHIELD <br />
							Kit Jetson
						</p>
						<Link to="#" className="text-success">
							ESPLORA LE OPZIONI DI SUPPORTO &gt;
						</Link>
					</div>
				</div>
			</div>
			<div className="">
				<div className="card shadow p-3 mb-5 bg-body" style={{ borderRadius: '0' }}>
					<div className="card-body">
						<h5 className="card-title">Servizi Enterprise</h5>
						<p className="card-text">Trova il supporto per prodotti come:</p>
						<p>
							Sistemi NVIDIA DGX <br />
							Virtual GPU (vGPU) <br />
							NVIDIA Networking
						</p>
						<Link to="#" className="text-success">
							ESPLORA LE OPZIONI DI SUPPORTO &gt;
						</Link>
                        <br/>
						<Link to="#" className="text-success">
							INVIA UNA RICHIESTA DI SUPPORTO &gt;
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardSupportoTecnico;
