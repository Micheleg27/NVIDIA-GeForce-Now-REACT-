import React from "react";
import NavBianca from '../Components/NavBianca';
import GreenBannerNav from '../Components/GreenBannerNav';
import {NavNera} from '../Components/NavNera';
import {FooterNero} from '../Components/FooterNero';
import FooterBianco from '../Components/FooterBianco';
import NavTrasparente from "../Components/NavTrasparente";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import ScaricaCloudGaming from "../Components/ScaricaComponents/ScaricaCloudGaming";
import BrowserMenù from "../Components/ScaricaComponents/BrowserMenù";
import PortaItuoiGiochi from "../Components/ScaricaComponents/PortaItuoiGiochi";
import CollegatiComodamente from "../Components/ScaricaComponents/CollegatiComodamente";

function Scarica() {
    return ( 
        <React.Fragment>
            <NavBianca />
            <GreenBannerNav />
            <NavNera />
            <NavTrasparente />
            <HeaderScarica titleHeader={'Gioca su tutti i dispositivi'}/>
            <ScaricaCloudGaming />
            <BrowserMenù />
            <PortaItuoiGiochi />
            <CollegatiComodamente />
            <FooterNero />
            <FooterBianco />
        </React.Fragment>
     );
}

export default Scarica;