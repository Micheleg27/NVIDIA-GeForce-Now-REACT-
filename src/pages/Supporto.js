import React from "react";
import NavBianca from "../Components/NavBianca";
import { NavNera } from "../Components/NavNera";
import GreenBannerNav from "../Components/GreenBannerNav";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import FooterBianco from "../Components/FooterBianco";
import { FooterNero } from "../Components/FooterNero";
import { SupportoCardContainer } from "../Components/SupportoComponents/SupportoCardsContainer";

export function Supporto() {
  return (
    <React.Fragment>
      <NavBianca />
      <GreenBannerNav />
      <NavNera />
      <HeaderScarica titleHeader={"Supporto"} />
      <SupportoCardContainer />
      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}
