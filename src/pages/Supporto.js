import React from "react";
import FooterBianco from "../Components/FooterBianco";
import { FooterNero } from "../Components/FooterNero";
import GreenBannerNav from "../Components/GreenBannerNav";
import NavBianca from "../Components/NavBianca";
import { NavNera } from "../Components/NavNera";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import { SupportoCardContainer } from "../Components/SupportoComponents/SupportoCardsContainer";

export function Supporto(){


    return(
            <React.Fragment >
                <NavBianca />
                <GreenBannerNav />
                <NavNera />
                <HeaderScarica titleHeader={'Supporto'}/>
                <SupportoCardContainer />
                <FooterNero />
                <FooterBianco />
            </React.Fragment>
    )
}
