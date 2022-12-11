import { BiUserCircle } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { Prodotti } from './ulNavBianca.js/Prodotti';
import Settori from './ulNavBianca.js/Settori';
import Soluzioni from './ulNavBianca.js/Soluzioni';
import PerTe from './ulNavBianca.js/PerTe';
import { Link } from 'react-router-dom';
import Cart from './CartComponents/Cart';

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
										<a id="a" className="nav-link" href="#">
											<Settori />
										</a>
									</li>

									<li>
										<a id="a" className="nav-link" href="#">
											<PerTe />
										</a>
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
																			<a id="a" href="#">
																				Schede grafiche GeForce
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Laptop Gaming
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Monitor G-SYNC
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				SHIELD
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Laptop e Workstation</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				Laptop Gaming
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Workstation desktop NVIDIA
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA RTX nei laptop professionali
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				DGX Station
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Workstation per la scienza dei dati
																				NVIDIA RTx
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Laptop Studio
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Cloud e data center</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				Panoramica
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Grace CPU
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Sistemi DGX
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA OVX
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Piattaforma EGX
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Piattaforma HGX
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				DRIVE Costellation
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Rete</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				Panoramica
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				DPU
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Ethernet
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				InfiniBand
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>GPUs</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				GeForce
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA RTX / Quadro
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Data Center
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Titan RTX
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Embedded System</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				Jetson
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				DRIVE AGX
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Clara
																			</a>
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
																			<a id="a" href="#">
																				Collaborazione 3D - Omniverse
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Settore automobilistico - DRIVE
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Streaming video cloud-IA - Maxine
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				IA vocale - Riva
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Analisi dei dati - RAPIDS
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Sanità - Clara
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Calcolo aad alte prestazioni (HPC)
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Analisi video intelligente - Metropolis
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Sistemi recommender - Merlin
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Robotica - Isaac
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Telecomunicazioni - Aerial
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>App e strumenti</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				cATALOGO NCG
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA NGC
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Collaborazione 3D - Omniverse
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Data Center
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Monitoraggio coìon GPU
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA RTX Experience
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA RTX DesktopMAnager
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				RTX Accelereted Creative Apps
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				VIdeoconferenze
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				NVIDIA Woekbench
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Giochi e intrattenimento</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				GeForce NOW
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				GeForce Experience
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				App NVIDIA Broadcast
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				(Omniverse) Machinima
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<span>Infrastruttura</span>
																	<hr />
																	<ul style={{ listStyleType: 'none' }}>
																		<li>
																			<a id="a" href="#">
																				Al Enterprice Suite
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Supporto cloud nativo
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Gestione cluster
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Gestione distribuzione Edge
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Servizio di inferenza
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Accelerazione IO
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Rete
																			</a>
																		</li>
																		<li>
																			<a id="a" href="#">
																				Virtual GPU
																			</a>
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
																<a id="a" href="#">
																	Panoramica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Analisi dei dati
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Machine Learning
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Teaining su Deep Learning
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Inferenza su deep learing
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	IA conversazione
																</a>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Data center e cloud computing</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<a id="a" href="#">
																	Panoramica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Computing accelerato per l'IT aziendale
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	NVIDIA LaunchPad
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Cloud Computing
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Co-localizzazione
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Edge Computing
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Rete
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	In sede
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Virtualizzazione
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	MLOps
																</a>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Design e visualizzazione</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<a id="a" href="#">
																	Panoramica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Realtà aumenteta e virtuale
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Multi-Display
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Rendering
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Collaborazione 3D
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Virtualizzazione della grafica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Simulazione ingegneristica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Trasmissione
																</a>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Edge Computing</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<a id="a" href="#">
																	Panoramica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	IA su 5G
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Intelligent Video Analytics
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Industrial
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Robotics
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Edge Deployment Management
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Edge Solutions
																</a>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Calcolo ad alte prestazioni</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<a id="a" href="#">
																	Panoramica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	HPC e IA
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Simulazione e modellazione
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	visualizzazione scientifica
																</a>
															</li>
														</ul>
													</li>
													<li style={{ padding: '25px' }}>
														<h6>Self-Driving Cars</h6>
														<hr />
														<ul style={{ listStyleType: 'none' }}>
															<li>
																<a id="a" href="#">
																	Panoramica
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Chauffeur
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Concierge
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Training
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Mappatura HD
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Simulazione
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Robotaxi
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	Autotrasporto
																</a>
															</li>
															<li>
																<a id="a" href="#">
																	ADAS
																</a>
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
															<a id="a" href="#">
																Panoramica
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Architettura, ingegneria, <br /> edilizia e procedure{' '}
																<br /> operative
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Internet per consumatori
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Cybersecurity
															</a>
														</li>
													</ul>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<a id="a" href="#">
																Energia
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Servizi finanziari
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Sanità e bioscienze
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Istituzioni accademoche
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Sviluppo di giochi
															</a>
														</li>
													</ul>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<a id="a" href="#">
																Produzione industriale
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Media e intrsttenimento
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Pubblica amministrazione
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Ristoranti
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Vendite al dettaglio
															</a>
														</li>
													</ul>
													<ul style={{ listStyleType: 'none', padding: '25px' }}>
														<li>
															<a id="a" href="#">
																Robotica
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Smart city
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Supercomputing
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Settore delle <br /> Telecomunicazioni
															</a>
														</li>
														<li>
															<a id="a" href="#">
																Trasporti
															</a>
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
														<a id="a" href="#">
															Creativi/Designer
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Esperti di dati
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Sviluppatori
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Giocatori
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Professionisti
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Ricercatori
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Roboticists
														</a>
													</li>
													<li>
														<a id="a" href="#">
															Startups
														</a>
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
										<Link id="a" className="nav-link" to="/Acquista">
											Acquista
										</Link>
									</li>
									<li>
										<a id="a" className="nav-link" href="">
											Driver
										</a>
									</li>
									<li>
										<a id="a" className="nav-link" href="">
											Assistenza
										</a>
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

						<Link to="/Carrello">
							<BsCart3 size="25px" style={{ cursor: 'pointer', color: 'black' }} />
						</Link>
						<Link to="/Register">
							<BiUserCircle size="25px" style={{ cursor: 'pointer', color: 'black' }} />
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}
