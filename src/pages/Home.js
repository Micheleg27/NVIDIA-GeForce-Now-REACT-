import React from 'react';
import Alert from '../Components/Alert';
import Lingua from '../Components/Lingua';
import Fortnite from '../Components/Fortnite';
import Joystick from '../Components/Joystick';
import { NavNera } from '../Components/NavNera';
import { NewGeneration } from '../Components/NewGeneration';
import { GetIn } from '../Components/GetIn';
import SystemRequired from '../Components/SystemRequired';
import FooterBianco from '../Components/FooterBianco';
import { FollowSocial } from '../Components/FollowSocial';
import GreenBannerNav from '../Components/GreenBannerNav';
import { FooterNero } from '../Components/FooterNero';
import { SoloGeforce } from '../Components/SoloGeforce';
import Citazioni from '../Components/Citazioni';
import CaroselloHome from '../Components/CaroselloHome';
import { TuttiGiocano } from '../Components/TuttiGiocano';
import { CloudGaming } from '../Components/CloudGaming';
import { OltreMille } from '../Components/OltreMille';
import NavBianca from '../Components/NavBianca';
import { NuoviGiochi } from '../Components/NuoviGiochi';
import CardAbbonamento from '../Components/CardAbbonamento';

function Home() {
	return (
		<React.Fragment>
			<Lingua />
			<Alert />
			<NavBianca />
			<GreenBannerNav />
			<NavNera />
			<CaroselloHome />
			<NewGeneration />
			<OltreMille />
			<Fortnite />
			<NuoviGiochi />
			<CloudGaming />
			<TuttiGiocano />
			<SoloGeforce />
			<Citazioni />
			<CardAbbonamento />
			<GetIn />
			<Joystick />
			<FollowSocial />
			<SystemRequired />
			<FooterNero />
			<FooterBianco />
		</React.Fragment>
	);
}

export default Home;
