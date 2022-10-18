import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import Log from '../Components/LogAbb';


export function Home() {
	return (
		<React.Fragment>
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<Fortnite />
			<Joystick />
			{/* <Log /> */}
		</React.Fragment>
	);
}
