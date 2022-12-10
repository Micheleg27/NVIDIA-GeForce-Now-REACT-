import { Button } from '../BasicComponents/Button';

function Login() {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center register-container">
			<div className="d-flex flex-column align-items-center justify-content-center form-button-container">
				<h2 className="text-light">Il Tuo Account NVIDIA</h2>
				<p className="text-light mb-5">Inserisci la tua email per creare un account.</p>
				<form className="text-light was-validated" action="/login" method="POST" novalidate>
					<div>
						<label for="validationCustom03" className="form-label">
							E-mail
						</label>
						<input
							type="email"
							className="form-control"
							id="validationCustom03"
							placeholder="E-mail"
							required
						/>
						<div className="invalid-feedback">E-mail is required!</div>
					</div>
					
					<div>
						<label for="validationCustom02" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="validationCustom02"
							placeholder="Password"
							required
						/>
						<div className="invalid-feedback">Password needs minimum 8 characters!</div>
					</div>

					<div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" />
							<label className="form-check-label">Rimani connesso</label>
						</div>
					</div>
					<div className="text-light text-center mt-5 mb-3">
						Procedendo, accetto i
						<a id="ad-a-green" href="https://www.nvidia.com/it-it/about-nvidia/nv-accounts/">
							Termini d'uso dell'account NVIDIA
						</a>
						e <br />
						<a id="ad-a-green" href="https://www.nvidia.com/it-it/about-nvidia/privacy-policy/">
							Informativa sulla privacy
						</a>
					</div>
					<div className="mt-4">
						<Button type="submit" buttonSize="BTN--medium">
							Continua
						</Button>
					</div>
				</form>
			</div>

			<div>
				<div>
					<div className="mt-5 ad-block-one">
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
					<div className="text-end ad-block-tow mt-3">
						<span>Copyright © 2022 NVIDIA Corporation</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
