import { Button } from '../BasicComponents/Button';
import NavBianca from '../NavBianca'
import {NavNeraCart} from '../CartComponents/NavNeraCart'
import { Link } from 'react-router-dom';

function Register() {
	return (
		<div>
			<NavBianca />
			<NavNeraCart />
			<div className="d-flex flex-column align-items-center justify-content-center register-container">
				<div className="d-flex flex-column align-items-center justify-content-center form-button-container">
					<h2 className="text-light">Il Tuo Account NVIDIA</h2>
					<p className="text-light mb-5">Inserisci la tua email per creare un account.</p>
					<form action="/register" method="POST">
						<div className="mb-3">
							<input type="text" id="username" name="username" placeholder="Username" required />
						</div>
						<div className="mb-3">
							<input type="email" id="email" name="email" placeholder="Email" required />
						</div>
						<div className="mb-5">
							<input type="password" id="password" name="password" placeholder="Password" required />
						</div>
						<Button type="submit" buttonSize="BTN--medium">
							register
						</Button>
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
								<Link id="a-white" to="#">
									Informativa sulla privacy
								</Link>
								<Link id="a-white" to="#">
									Informazioni legali
								</Link>
								<Link id="a-white" to="#">
									Contatti
								</Link>
							</div>
						</div>
						<div className="text-end ad-block-tow mt-3">
							<span>Copyright © 2022 NVIDIA Corporation</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
