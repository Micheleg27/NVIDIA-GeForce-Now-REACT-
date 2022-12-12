import { BiUserCircle } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { Prodotti } from './ulNavBianca.js/Prodotti';
import Settori from './ulNavBianca.js/Settori';
import Soluzioni from './ulNavBianca.js/Soluzioni';
import PerTe from './ulNavBianca.js/PerTe';
import { Link } from 'react-router-dom';

export default function NavBianca() {
	return (
		<div className="bg-light">
			<nav className="navbar navbar-expand-lg navcolor">
				<div className="container-fluid" style={{ width: '1400px' }}>
					<div>
						<div className="btn-doppio">
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasNavbarr"
								aria-controls="offcanvasNavbarr"
							>
								<span className="navbar-toggler-icon" />
							</button>

							<svg
								id="lente1"
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								fill="currentColor"
								class="bi bi-search"
								viewBox="0 0 16 16"
							>
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</div>
					</div>

					<div id="sv-logo-nvidia">
						<svg
							enable-background="new 0 0 974.7 179.7"
							version="1.1"
							viewBox="0 0 974.7 179.7"
							xmlns="http://www.w3.org/2000/svg"
							width="110"
							height="44"
						>
							<title>Leadership nell'elaborazione basata su intelligenza artificiale con NVIDIA</title>
							<path d="m962.1 144.1v-2.7h1.7c0.9 0 2.2 0.1 2.2 1.2s-0.7 1.5-1.8 1.5h-2.1m0 1.9h1.2l2.7 4.7h2.9l-3-4.9c1.5 0.1 2.7-1 2.8-2.5v-0.4c0-2.6-1.8-3.4-4.8-3.4h-4.3v11.2h2.5v-4.7m12.6-0.9c0-6.6-5.1-10.4-10.8-10.4s-10.8 3.8-10.8 10.4 5.1 10.4 10.8 10.4 10.8-3.8 10.8-10.4m-3.2 0c0.2 4.2-3.1 7.8-7.3 8h-0.3c-4.4 0.2-8.1-3.3-8.3-7.7s3.3-8.1 7.7-8.3 8.1 3.3 8.3 7.7c-0.1 0.1-0.1 0.2-0.1 0.3z" />
							<path d="m578.2 34v118h33.3v-118h-33.3zm-262-0.2v118.1h33.6v-91.7l26.2 0.1c8.6 0 14.6 2.1 18.7 6.5 5.3 5.6 7.4 14.7 7.4 31.2v53.9h32.6v-65.2c0-46.6-29.7-52.9-58.7-52.9h-59.8zm315.7 0.2v118h54c28.8 0 38.2-4.8 48.3-15.5 7.2-7.5 11.8-24.1 11.8-42.2 0-16.6-3.9-31.4-10.8-40.6-12.2-16.5-30-19.7-56.6-19.7h-46.7zm33 25.6h14.3c20.8 0 34.2 9.3 34.2 33.5s-13.4 33.6-34.2 33.6h-14.3v-67.1zm-134.7-25.6l-27.8 93.5-26.6-93.5h-36l38 118h48l38.4-118h-34zm231.4 118h33.3v-118h-33.3v118zm93.4-118l-46.5 117.9h32.8l7.4-20.9h55l7 20.8h35.7l-46.9-117.8h-44.5zm21.6 21.5l20.2 55.2h-41l20.8-55.2z" />
							<path
								fill="#76B900"
								d="m101.3 53.6v-16.2c1.6-0.1 3.2-0.2 4.8-0.2 44.4-1.4 73.5 38.2 73.5 38.2s-31.4 43.6-65.1 43.6c-4.5 0-8.9-0.7-13.1-2.1v-49.2c17.3 2.1 20.8 9.7 31.1 27l23.1-19.4s-16.9-22.1-45.3-22.1c-3-0.1-6 0.1-9 0.4m0-53.6v24.2l4.8-0.3c61.7-2.1 102 50.6 102 50.6s-46.2 56.2-94.3 56.2c-4.2 0-8.3-0.4-12.4-1.1v15c3.4 0.4 6.9 0.7 10.3 0.7 44.8 0 77.2-22.9 108.6-49.9 5.2 4.2 26.5 14.3 30.9 18.7-29.8 25-99.3 45.1-138.7 45.1-3.8 0-7.4-0.2-11-0.6v21.1h170.2v-179.7h-170.4zm0 116.9v12.8c-41.4-7.4-52.9-50.5-52.9-50.5s19.9-22 52.9-25.6v14h-0.1c-17.3-2.1-30.9 14.1-30.9 14.1s7.7 27.3 31 35.2m-73.5-39.5s24.5-36.2 73.6-40v-13.2c-54.4 4.4-101.4 50.4-101.4 50.4s26.6 77 101.3 84v-14c-54.8-6.8-73.5-67.2-73.5-67.2z"
							/>
						</svg>
					</div>

					<div
						className="offcanvas offcanvas-start"
						tabindex="-1"
						id="offcanvasNavbarr"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-body">
							<div className="d-flex align-items-center">
								<ul className="ul-left-nav navbar-nav flex-grow-1 pe-3 d-flex align-items-center ad-none">
									<li className="nav-item">
										<Prodotti />
									</li>

									<li className="nav-item">
										<Soluzioni />
									</li>

									<li className="nav-item">
										<Link id="a" className="nav-link" to="#">
											<Settori />
										</Link>
									</li>

									<li>
										<Link id="a" className="nav-link" to="#">
											<PerTe />
										</Link>
									</li>
								</ul>

								<div
									className="accordion d-xl-none d-lg-none"
									id="accordionPanelsStayOpenExample"
									style={{ width: '100%' }}
								>
									<div>
										<h2 className="accordion-header" id="panelsStayOpen-headingOne">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseOne"
												aria-expanded="true"
												aria-controls="panelsStayOpen-collapseOne"
											>
												Prodotti
											</button>
										</h2>
										<div
											id="panelsStayOpen-collapseOne"
											class="accordion-collapse collapse"
											aria-labelledby="panelsStayOpen-headingOne"
										>
											<div className="accordion-body">
												<div>
													<h2 className="accordion-header" id="flush-headingFive">
														<button
															class="accordion-button collapsed"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#panelsStayOpen-collapseFive"
															aria-expanded="true"
															aria-controls="panelsStayOpen-collapseFive"
														>
															Hard
														</button>
													</h2>
													<div
														id="panelsStayOpen-collapseFive"
														class="accordion-collapse collapse"
														aria-labelledby="panelsStayOpen-headingFive"
													>
														<div className="accordion-body">
															<ul
																style={{
																	display: 'flex',
																	flexDirection: 'column',
																	gap: '10px',
																	listStyleType: 'none',
																	justifyContent: 'center',
																	backgroundColor: 'whitesmoke'
																}}
															>
																<li>
																	<span>Giochi e intrattenimento</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Schede grafiche GeForce
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Laptop Gaming
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Monitor G-SYNC
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				SHIELD
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Laptop e Workstation</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Laptop Gaming
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Workstation desktop NVIDIA
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA RTX nei laptop professionali
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				DGX Station
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Workstation per la scienza dei dati
																				NVIDIA RTx
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Laptop Studio
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Cloud e data center</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Panoramica
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Grace CPU
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Sistemi DGX
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA OVX
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Piattaforma EGX
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Piattaforma HGX
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				DRIVE Costellation
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Rete</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Panoramica
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				DPU
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Ethernet
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				InfiniBand
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>GPUs</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				GeForce
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA RTX / Quadro
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Data Center
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Titan RTX
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Embedded System</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Jetson
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				DRIVE AGX
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Clara
																			</Link>
																		</li>
																	</ul>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div>
													<h2 className="accordion-header" id="flush-headingSix">
														<button
															class="accordion-button collapsed"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#panelsStayOpen-collapseSix"
															aria-expanded="true"
															aria-controls="panelsStayOpen-collapseSix"
														>
															Soft
														</button>
													</h2>
													<div
														id="panelsStayOpen-collapseSix"
														class="accordion-collapse collapse"
														aria-labelledby="panelsStayOpen-headingSix"
													>
														<div className="accordion-body">
															<ul
																style={{
																	display: 'flex',
																	flexDirection: 'column',
																	gap: '10px',
																	listStyleType: 'none',
																	justifyContent: 'center',
																	backgroundColor: 'whitesmoke'
																}}
															>
																<li>
																	<span>Frameworks Applicativi</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Collaborazione 3D - Omniverse
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Settore automobilistico - DRIVE
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Streaming video cloud-IA - Maxine
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				IA vocale - Riva
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Analisi dei dati - RAPIDS
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Sanità - Clara
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Calcolo aad alte prestazioni (HPC)
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Analisi video intelligente - Metropolis
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Sistemi recommender - Merlin
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Robotica - Isaac
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Telecomunicazioni - Aerial
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>App e strumenti</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				cATALOGO NCG
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA NGC
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Collaborazione 3D - Omniverse
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Data Center
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Monitoraggio coìon GPU
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA RTX Experience
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA RTX DesktopMAnager
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				RTX Accelereted Creative Apps
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				VIdeoconferenze
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				NVIDIA Woekbench
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Giochi e intrattenimento</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				GeForce NOW
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				GeForce Experience
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				App NVIDIA Broadcast
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				(Omniverse) Machinima
																			</Link>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Infrastruttura</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<Link id="a" to="#">
																				Al Enterprice Suite
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Supporto cloud nativo
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Gestione cluster
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Gestione distribuzione Edge
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Servizio di inferenza
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Accelerazione IO
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Rete
																			</Link>
																		</li>
																		<li>
																			<Link id="a" to="#">
																				Virtual GPU
																			</Link>
																		</li>
																	</ul>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseTwo"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseTwo"
											>
												Soluzioni
											</button>
										</h2>
										<div
											id="panelsStayOpen-collapseTwo"
											class="accordion-collapse collapse"
											aria-labelledby="panelsStayOpen-headingTwo"
										>
											<div className="accordion-body">
												<ul
													style={{
														display: 'flex',
														flexDirection: 'column',
														backgroundColor: 'whitesmoke',
														gap: '10px',
														listStyleType: 'none',
														justifyContent: 'center'
													}}
												>
													<li style={{ padding: '25px' }}>
														<h6>AI and Data Science</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<Link id="a" to="#">
																	Panoramica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Analisi dei dati
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Machine Learning
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Teaining su Deep Learning
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Inferenza su deep learing
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	IA conversazione
																</Link>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Data center e cloud computing</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<Link id="a" to="#">
																	Panoramica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Computing accelerato per l'IT aziendale
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	NVIDIA LaunchPad
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Cloud Computing
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Co-localizzazione
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Edge Computing
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Rete
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	In sede
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Virtualizzazione
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	MLOps
																</Link>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Design e visualizzazione</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<Link id="a" to="#">
																	Panoramica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Realtà aumenteta e virtuale
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Multi-Display
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Rendering
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Collaborazione 3D
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Virtualizzazione della grafica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Simulazione ingegneristica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Trasmissione
																</Link>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Edge Computing</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<Link id="a" to="#">
																	Panoramica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	IA su 5G
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Intelligent Video Analytics
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Industrial
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Robotics
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Edge Deployment Management
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Edge Solutions
																</Link>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Calcolo ad alte prestazioni</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<Link id="a" to="#">
																	Panoramica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	HPC e IA
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Simulazione e modellazione
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	visualizzazione scientifica
																</Link>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Self-Driving Cars</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<Link id="a" to="#">
																	Panoramica
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Chauffeur
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Concierge
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Training
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Mappatura HD
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Simulazione
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Robotaxi
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	Autotrasporto
																</Link>
															</li>
															<li>
																<Link id="a" to="#">
																	ADAS
																</Link>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div>
										<h2 className="accordion-header" id="panelsStayOpen-headingThree">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseThree"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseThree"
											>
												Settori
											</button>
										</h2>
										<div
											id="panelsStayOpen-collapseThree"
											class="accordion-collapse collapse"
											aria-labelledby="panelsStayOpen-headingThree"
										>
											<div
												classNameName="accordion-body"
												style={{ backgroundColor: 'whitesmoke' }}
											>
												<div>
													<h6>Settori</h6>
													<div>
														<hr />
													</div>
												</div>
												<div
													style={{ display: 'flex', flexDirection: 'column', width: '328px' }}
												>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<Link id="a" to="#">
																Panoramica
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Architettura, ingegneria, <br /> edilizia e procedure{' '}
																<br /> operative
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Internet per consumatori
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Cybersecurity
															</Link>
														</li>
													</ul>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<Link id="a" to="#">
																Energia
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Servizi finanziari
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Sanità e bioscienze
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Istituzioni accademoche
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Sviluppo di giochi
															</Link>
														</li>
													</ul>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<Link id="a" to="#">
																Produzione industriale
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Media e intrsttenimento
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Pubblica amministrazione
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Ristoranti
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Vendite al dettaglio
															</Link>
														</li>
													</ul>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<Link id="a" to="#">
																Robotica
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Smart city
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Supercomputing
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Settore delle <br /> Telecomunicazioni
															</Link>
														</li>
														<li>
															<Link id="a" to="#">
																Trasporti
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div>
										<h2 className="accordion-header" id="panelsStayOpen-headingFour">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#panelsStayOpen-collapseFour"
												aria-expanded="false"
												aria-controls="panelsStayOpen-collapseFour"
											>
												Per Te
											</button>
										</h2>
										<div
											id="panelsStayOpen-collapseFour"
											class="accordion-collapse collapse"
											aria-labelledby="panelsStayOpen-headingFour"
										>
											<div
												classNameName="accordion-body"
												style={{ backgroundColor: 'whitesmoke' }}
											>
												<ul
													style={{
														display: 'flex',
														flexDirection: 'column',
														gap: '40px',
														listStyleType: 'none',
														justifyContent: 'center',
														width: '328px'
													}}
												>
													<li>
														<Link id="a" to="#">
															Creativi/Designer
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Esperti di dati
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Sviluppatori
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Giocatori
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Professionisti
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Ricercatori
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Roboticists
														</Link>
													</li>
													<li>
														<Link id="a" to="#">
															Startups
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="d-flex">
								<ul className="navbar-nav justify-content-end ms-3">
									<li>
										<Link id="a" className="nav-link" to="/acquista">
											Acquista
										</Link>
									</li>
									<li>
										<Link id="a" className="nav-link" to="">
											Driver
										</Link>
									</li>
									<li>
										<Link id="a" className="nav-link" to="">
											Assistenza
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
						<svg
							style={{ cursor: 'pointer' }}
							id="lente2"
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>

						<Link to="/carrello">
							<BsCart3 size="25px" style={{ cursor: 'pointer', color: 'black' }} />
						</Link>
						<Link to="/register">
							<BiUserCircle size="25px" style={{ cursor: 'pointer', color: 'black' }} />
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}
