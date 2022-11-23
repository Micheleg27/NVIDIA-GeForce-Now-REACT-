import React from "react";
import FooterBianco from "../Components/FooterBianco";
import { FooterNero } from "../Components/FooterNero";
import NavBianca from "../Components/NavBianca";
import { NavNera } from "../Components/NavNera";
import { Title } from "../Components/Title";
import { CarouselGiochi } from "../Components/GiochiComponents/CarouselGiochi";
import GreenBannerNav from "../Components/GreenBannerNav";
import ListaNuoviGiochi from "../Components/GiochiComponents/ListaNuoviGiochi";
import { AccordionGiochi } from "../Components/GiochiComponents/AccordionGiochi";
import { TitleGiochi } from "../Components/GiochiComponents/TitleGiochi";

export function Giochi() {
  return (
    <React.Fragment>
      <NavBianca />
      <GreenBannerNav />
      <NavNera />
      <CarouselGiochi />
      <Title h1title={"I tuoi giochi. Dove vuoi."} />
      <TitleGiochi h4title={"Nuovi giochi aggiunti ogni GFN Thursday"} h6title={"GeForce NOW si connette ai game store digitali per PC e ti consente di trasmettere in streaming i giochi del tuo catalogo. Per ogni evento GFN Thursday - il giorno dedicato alle novità, tra giochi, funzionalità e notizie - nuovi giochi vengono aggiunti al nostro catalogo*."} />
      <ListaNuoviGiochi />
      <AccordionGiochi />
      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}
