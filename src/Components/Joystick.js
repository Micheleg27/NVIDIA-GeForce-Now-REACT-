import React from 'react';

function Joystick() {
	return (
		<React.Fragment>
			<div className="container">
                <hr className="mb-4 text-light" />
                </div>
			<section id="MG-sec-porta-esperienza">
				<div id="MG-container-esperienza">
					{/* <img src="./Source/M.G.Src/banner-joystick.jpeg" alt="banner-joystick" id="MG-bg-joystick-img"> */}
					<div id="MG-esperienza-par">
						<h1 id="MG-h1-porta-esperienza">PORTA LA TUA ESPERIENZA DI CLOUD GAMING SU UN ALTRO LIVELLO</h1>
						<p id="MG-p-porta-esperienza">
							Abbiamo collaborato con i migliori produttori per offrirti una raccolta di gamepad,
							tastiere, mouse e router perfetti per completare la tua esperienza con GeForce NOW.
						</p>
						<div id="MG-div-btn">
							<a href="https://www.nvidia.com/it-it/geforce-now/recommended/" id="MG-link-div-btn">
								<p id="MG-p-inner-btn">Raccomandati da GeForce Now</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Joystick;
