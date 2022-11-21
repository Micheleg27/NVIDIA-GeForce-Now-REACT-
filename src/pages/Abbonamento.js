import React from "react";
import CarteRegalo from "../Components/AbbonamentoComponents/CarteRegalo";
import NuovaGenerazione from "../Components/AbbonamentoComponents/NuovaGenerazione";
import VantaggiPerAbbonati from "../Components/AbbonamentoComponents/VantaggiPerAbbonati";
import CardAbbonamento from "../Components/CardAbbonamento";
import FooterBianco from "../Components/FooterBianco";
import { FooterNero } from "../Components/FooterNero";
import GreenBannerNav from "../Components/GreenBannerNav";
import NavBianca from "../Components/NavBianca";
import { NavNera } from "../Components/NavNera";
import NavTrasparente from "../Components/NavTrasparente";
import ResizerApp from "../Components/ResizerComponent/ResizerApp";


function Abbonamento() {
    return ( 
        <React.Fragment>
             <NavBianca />
            <GreenBannerNav />
            <NavNera />
            <NavTrasparente />
            <CardAbbonamento />
            <NuovaGenerazione />
            <VantaggiPerAbbonati />
            <CarteRegalo />
            {/* <ResizerApp /> */}
            <FooterNero />
            <FooterBianco />
        </React.Fragment>
     );
}

export default Abbonamento;