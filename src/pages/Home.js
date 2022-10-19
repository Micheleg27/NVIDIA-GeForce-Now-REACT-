import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import Log from '../Components/LogAbb';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';
import  SystemRequired  from '../Components/SystemRequired';
import FooterBianco from '../Components/FooterBianco';
import { FollowSocial } from '../Components/FollowSocial';
import { GreenBanner } from '../Components/greenBannerNav';


export function Home() {
	return (
		<React.Fragment>
			<GreenBanner />
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<NewGeneration />
			<GetIn />
			<Fortnite />
			<Joystick />
			<FollowSocial />
			{/* <Log /> */}
			<FooterBianco />
		</React.Fragment>
	);
}
