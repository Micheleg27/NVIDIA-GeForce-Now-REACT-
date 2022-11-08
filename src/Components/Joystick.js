import React from 'react';
import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import bannerJoystick from '../Source/M.G.Src/bannerJoystick.jpeg';
import { Title } from './Title';

function Joystick() {
	return (
		<React.Fragment>
			<hr className="mb-4 text-light resw" />
			<section id="MG-sec-porta-esperienza">
				<div id="MG-container-esperienza">
					<img src={bannerJoystick} alt="banner-joystick" id="MG-bg-joystick-img" />
					<div id="MG-esperienza-par">

						<Title titlecolor='title-color-white' h1title={'PORTA LA TUA ESPERIENZA DI CLOUD GAMING SU UN ALTRO LIVELLO'} h3title={'Abbiamo collaborato con i migliori produttori per offrirti una raccolta di gamepad, tastiere, mouse e router perfetti per completare la tua esperienza con GeForce NOW.'}/>

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