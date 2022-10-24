import { useState } from 'react';

function FooterForm() {
	const [ show, setShow ] = useState(false);

	const X = show;

	// const handleForm = (event) => {
	// 	event.preventDefault();

	// 	const email = event.target.elements.email.value;
	// 	console.log(email);
	// };

	return (
		<div>
			<button onClick={() => setShow(!show)}>Registrati</button>
			{X && (
				<div className="ad-window-form">
					<div className="overlay" />
					<div className="ad-wf-container">
						<div className="ad-wf-content">
							<a href="index.html" id="ad-box-close">
								x
							</a>
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
									<label for="floatingInput">Email</label>
									<div className="invalid-feedback">l'indirizzo Email è obbligatorio.</div>
								</div>
								<div className="ad-a-btn">
									<a href="https://www.nvidia.com/it-it/about-nvidia/privacy-policy/" target="_blank">
										Informativa sulla privacy NVIDIA
									</a>
									<button type="submit">INVIA</button>
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
