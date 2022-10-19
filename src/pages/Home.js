import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import Log from '../Components/LogAbb';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';
import { MicroCard } from '../Components/MicroCard';


export function Home() {
	return (
		<React.Fragment>
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<NewGeneration />
			{/* <GetIn /> */}
			{/* <MicroCard /> */}
			<Fortnite />
			<Joystick />
			{/* <Log /> */}
		</React.Fragment>
	);
}
