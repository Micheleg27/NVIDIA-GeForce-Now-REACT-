import React from 'react';
import Alert from '../Components/Alert';
import Lingua from '../Components/Lingua';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import {NavNera} from '../Components/NavNera';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';
import  SystemRequired  from '../Components/SystemRequired';
import FooterBianco from '../Components/FooterBianco';
import { FollowSocial } from '../Components/FollowSocial';
import { GreenBannerNav, greenBannerNav } from '../Components/greenBannerNav';
import { FooterNero } from '../Components/FooterNero';
import { SoloGeforce } from '../Components/SoloGeforce';
import { MicroCard } from '../Components/BasicComponents/MicroCard';
import Citazioni from '../Components/Citazioni';
import CaroselloHome from '../Components/CaroselloHome';
import NavBianca from '../Components/NavBianca';
import ThanksForRegister from '../Components/ThanksForRegister';


function Home() {
	return (
		<React.Fragment>
			{/* <Lingua /> */}
			{/* <Alert /> */}
			<NavBianca />
			<GreenBannerNav />
			<NavNera />
			<CaroselloHome />
			<NewGeneration />
			<Fortnite />
			<GetIn />
			<Joystick />
			<SoloGeforce />
			<Citazioni />
			<FollowSocial /> 
			<SystemRequired />
			<FooterNero />
			<FooterBianco />
		</React.Fragment>
	);
}

export default Home;
