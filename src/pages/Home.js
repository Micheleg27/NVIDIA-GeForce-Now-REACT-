import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import Log from '../Components/LogAbb';
import {NavNera} from '../Components/NavNera';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';
import  SystemRequired  from '../Components/SystemRequired';
import FooterBianco from '../Components/FooterBianco';
import { FollowSocial } from '../Components/FollowSocial';
import { greenBannerNav } from '../Components/greenBannerNav';
import { FooterNero } from '../Components/FooterNero';
import {Route, Routes} from 'react-router-dom';
import { SoloGeforce } from '../Components/SoloGeforce';
import { MicroCard } from '../Components/BasicComponents/MicroCard';



function Home() {
	return (
		<React.Fragment>
			<greenBannerNav />
			<NavNera />
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<NewGeneration />
			<Fortnite />
			<GetIn />
			<Joystick />
			<SoloGeforce />
			<FollowSocial /> 
			<SystemRequired />
			<FooterNero />
			<FooterBianco />
		</React.Fragment>
	);
}

export default Home;
