import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import Log from '../Components/LogAbb';
import {NavNera} from '../Components/NavNera';


export function Home() {
	return (
		<React.Fragment>
			<NavNera />
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<Fortnite />
			<Joystick />
		</React.Fragment>
	);
}
