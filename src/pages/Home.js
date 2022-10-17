import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';


export function Home() {
	return (
		<React.Fragment>
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<Fortnite />
			<Joystick />
		</React.Fragment>
	);
}
