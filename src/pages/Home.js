import React from 'react';
import Alert from '../Components/Alert';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import Lingua from '../Components/Lingua';
import {NavNera} from '../Components/NavNera';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';
import  SystemRequired  from '../Components/SystemRequired';
import FooterBianco from '../Components/FooterBianco';
import { FollowSocial } from '../Components/FollowSocial';
import { greenBannerNav } from '../Components/greenBannerNav';
import { FooterNero } from '../Components/FooterNero';
import { SoloGeforce } from '../Components/SoloGeforce';
import { MicroCard } from '../Components/BasicComponents/MicroCard';
import Citazioni from '../Components/Citazioni';
import CaroselloHome from '../Components/CaroselloHome';
import ThanksForRegister from '../Components/ThanksForRegister'


function Home() {
	return (
		<React.Fragment>
			{/* <Lingua /> */}
			{/* <Alert /> */}
			{/* <greenBannerNav />
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
			<FooterBianco /> */}
			<ThanksForRegister/>
		</React.Fragment>
	);
}

export default Home;
