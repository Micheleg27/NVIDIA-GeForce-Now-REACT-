import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import Log from '../Components/LogAbb';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';


export function Home() {
	return (
		<React.Fragment>
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<NewGeneration />
			<GetIn />
			<Fortnite />
			<Joystick />
			{/* <Log /> */}
		</React.Fragment>
	);
}
