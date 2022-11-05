import { useEffect, useState } from 'react';

function Log() {
	const [ username, setUsername ] = useState('');

	const handleStorage = () => {
		localStorage.setItem('Username', username);
	};

	useEffect(() => {
		setUsername(localStorage.getItem('Username'));
		console.log(localStorage);
	}, []);

	return (
		<div style={{ backgroundColor: '#1a1a1a' }}>
			<nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'black' }}>
				<div class="container-md">
					<h1 class="navbar-brand text-light">GEFORCE NOW</h1>
				</div>
			</nav>

			<div className="ad-container-one">
				<div className="ad-container">
					<div className="d-flex justify-content-center">
						<img className="ad-logo-Nvidia" src="https://login.nvgs.nvidia.com/NVIDIA-Logo.dark.33f4916f178880192ae7.svg" alt="nvidia-logo" />
					</div>
					<div className="ad-text-content">
						<h2 className="text-light text-center fs-4">Il tuo account NVIDIA</h2>
						<p className="text-light text-center fs-6">Scegli un account per continuare</p>
					</div>
					<div className="ad-wf-content">
						<div className="ad-storage">
							<input
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<button className="btn" onClick={handleStorage}>
								Invia
							</button>
						</div>
						<div className="ad-link">
							<a id="ad-a-green" href="#" target="_blank">
								Gestisci account
							</a>
							<a
								id="ad-a-green"
								href="https://login.nvgs.nvidia.com/v1/login/identifier?key=eyJhbGciOiJIUzI1NiJ9.eyJzZSI6Ild5b2MiLCJ0b2tlbklkIjoiMTAwNzI5MDU5NDI1NjIyNDI1NiIsIm90IjoiMTAwNzI5MDYwODMzMzA5OTAwOCIsImV4cCI6MTY2MDMxMzU5NSwiaWF0IjoxNjYwMjI3MTk1LCJqdGkiOiI0MWNjNWE1Ny04NTA0LTQ2NWItODU5My1iNmYyOWU5N2YxZWIifQ.7PoP_uL6PVCwFrpX-hfhwkQot3eQRZv_f2RuKhFZbt4&client_id=310670192232366513&prompt=default&context=reset&theme=Noir&preferred_nvidia=true&locale=it-IT"
								target="_self"
							>
								Usa un altro account
							</a>
						</div>
					</div>
				</div>
			</div>

			<footer style={{width:'100%'}}>
				<div>
					<div className="container ad-block-one">
						<select>
							<option selected>Italiano</option>
							<option value="1">English</option>
							<option value="2">Espanol</option>
							<option value="3">Français</option>
							<option value="4">Deutsch</option>
						</select>
						<div id="ad-footer-link">
							<a id="a-white" href="#">
								Informativa sulla privacy
							</a>
							<a id="a-white" href="#">
								Informazioni legali
							</a>
							<a id="a-white" href="#">
								Contatti
							</a>
						</div>
					</div>
					<div className="container text-end ad-block-tow">
						<span>Copyright © 2022 NVIDIA Corporation</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Log;
