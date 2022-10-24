import React from 'react';
import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import bannerJoystick from '../Source/M.G.Src/bannerJoystick.jpeg';

function Joystick() {
	return (
		<React.Fragment>
			<div className="container">
				<hr className="mb-4 text-light" />
			</div>
			<section id="MG-sec-porta-esperienza">
				<div id="MG-container-esperienza">
					<img src={bannerJoystick} alt="banner-joystick" id="MG-bg-joystick-img" />
					<div id="MG-esperienza-par">
						<h1 id="MG-h1-porta-esperienza">PORTA LA TUA ESPERIENZA DI CLOUD GAMING SU UN ALTRO LIVELLO</h1>
						<p id="MG-p-porta-esperienza">
							Abbiamo collaborato con i migliori produttori per offrirti una raccolta di gamepad,
							tastiere, mouse e router perfetti per completare la tua esperienza con GeForce NOW.
						</p>
						<Button type="button" buttonSize="BTN--large" buttonStyle="BTN--primary--green">
							<a href="https://www.nvidia.com/it-it/geforce-now/games/" target="_blank">
								Raccomandati da GeForce Now
							</a>
						</Button>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Joystick;