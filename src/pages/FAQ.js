import React from "react";
import NavBianca from "../Components/NavBianca";
import GreenBannerNav from "../Components/GreenBannerNav";
import { NavNera } from "../Components/NavNera";
import { FooterNero } from "../Components/FooterNero";
import FooterBianco from "../Components/FooterBianco";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import NavTrasparenteFAQ from "../Components/NavTrasparenteFAQ";
import { Title } from "../Components/Title";
import AccordionFAQ from "../Components/FAQComponents/AccordionFAQ";

function FAQ() {
  return (
    <React.Fragment>
      <NavBianca />
      <GreenBannerNav />
      <NavNera />
      <NavTrasparenteFAQ />
      <HeaderScarica titleHeader={"FAQ su GeForce NOW"} />
      <Title h1title={"Domande generali"} />
      <AccordionFAQ />
      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}

export default FAQ;
/* <AccordionItem accordionKey={0} accordionHeader={""} accordionBody={""} /> */


