import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import { useNavigate } from 'react-router-dom';
import useShow from './BasicComponents/useShow';
import '../SASS/button.css';

function FooterForm() {
	const { show, setShow } = useShow(false);
	const navigate = useNavigate();
	return (
		<div>
			<Button
				type="button"
				buttonSize="BTN--medium"
				buttonStyle="btn--primary--green"
				onClick={() => setShow(!show)}
			>
				Registrati
			</Button>
			{show && (
				<div className="ad-window-form">
					{/* <div className="overlay" /> */}
					<div className="ad-wf-container">
						<div className="ad-wf-content">
							<button id="ad-box-close" onClick={() => setShow(!show)}>
								x
							</button>
							<h2>SCOPRI LE ULTIME NOVITÀ DI GEFORCE NOW</h2>
							<p>
								Iscriviti per ricevere offerte, annunci e altro su giochi e intrattenimento da NVIDIA.
							</p>
							<form className=" was-validated">
								<div className="form-floating ad-mail">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="Email"
										required
									/>
									<label htmlFor="floatingInput">Email</label>
									<div className="invalid-feedback">l'indirizzo Email è obbligatorio.</div>
								</div>
								<div className="ad-a-btn">
									<a href="https://www.nvidia.com/it-it/about-nvidia/privacy-policy/" target="_blank">
										Informativa sulla privacy NVIDIA
									</a>
									<Button
										type="submit"
										buttonSize="BTN--medium"
										buttonStyle="btn--primary--green"
										onClick={() => navigate('/thanks')}
									>
										INVIA
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default FooterForm;
