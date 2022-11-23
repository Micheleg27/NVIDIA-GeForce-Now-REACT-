import React from "react";
import NavBianca from "../Components/NavBianca";
import GreenBannerNav from "../Components/GreenBannerNav";
import { NavNera } from "../Components/NavNera";
import { FooterNero } from "../Components/FooterNero";
import FooterBianco from "../Components/FooterBianco";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import NavTrasparenteFAQ from "../Components/NavTrasparenteFAQ";
import { Title } from "../Components/Title";
import AccordionElement from '../Components/BasicComponents/AccordionElement'
import AccordionItem from '../Components/BasicComponents/AccordionItem'
import { Accordion } from "react-bootstrap";

function FAQ() {
  return (
    <React.Fragment>
      <NavBianca />
      <GreenBannerNav />
      <NavNera />
      <NavTrasparenteFAQ />
      <HeaderScarica titleHeader={"FAQ su GeForce NOW"} />
      <Title h1title={"Domande generali"} />

      <Accordion className='container-accordion'>
        <AccordionElement>
            <AccordionItem accordionKey={0} accordionHeader={"Che Cos'è GeForce NOW?"} accordionBody={"GeForce NOW è il servizio di game streaming basato su cloud di NVIDIA e offre la possibilità di giocare in tempo reale direttamente dal cloud al tuo laptop, desktop, Mac, Chromebook, SHIELD TV, alcune TV Samsung e LG, iPhone, iPad e dispositivi Android. Collega gli account dei tuoi store e gioca in streaming dal tuo catalogo oppure apri i tuoi giochi preferiti gratuiti. Chiudi e salva la partita per i giochi supportati nel cloud e continua dal punto in cui l'avevi interrotta, su qualsiasi dispositivo supportato, ovunque ti trovi."} />
            <AccordionItem accordionKey={1} accordionHeader={"Che Cos'è GeForce NOW?"} accordionBody={"GeForce NOW è il servizio di game streaming basato su cloud di NVIDIA e offre la possibilità di giocare in tempo reale direttamente dal cloud al tuo laptop, desktop, Mac, Chromebook, SHIELD TV, alcune TV Samsung e LG, iPhone, iPad e dispositivi Android. Collega gli account dei tuoi store e gioca in streaming dal tuo catalogo oppure apri i tuoi giochi preferiti gratuiti. Chiudi e salva la partita per i giochi supportati nel cloud e continua dal punto in cui l'avevi interrotta, su qualsiasi dispositivo supportato, ovunque ti trovi."} />
            <AccordionItem accordionKey={2} accordionHeader={"Che Cos'è GeForce NOW?"} accordionBody={"GeForce NOW è il servizio di game streaming basato su cloud di NVIDIA e offre la possibilità di giocare in tempo reale direttamente dal cloud al tuo laptop, desktop, Mac, Chromebook, SHIELD TV, alcune TV Samsung e LG, iPhone, iPad e dispositivi Android. Collega gli account dei tuoi store e gioca in streaming dal tuo catalogo oppure apri i tuoi giochi preferiti gratuiti. Chiudi e salva la partita per i giochi supportati nel cloud e continua dal punto in cui l'avevi interrotta, su qualsiasi dispositivo supportato, ovunque ti trovi."} />
            <AccordionItem accordionKey={3} accordionHeader={"Che Cos'è GeForce NOW?"} accordionBody={"GeForce NOW è il servizio di game streaming basato su cloud di NVIDIA e offre la possibilità di giocare in tempo reale direttamente dal cloud al tuo laptop, desktop, Mac, Chromebook, SHIELD TV, alcune TV Samsung e LG, iPhone, iPad e dispositivi Android. Collega gli account dei tuoi store e gioca in streaming dal tuo catalogo oppure apri i tuoi giochi preferiti gratuiti. Chiudi e salva la partita per i giochi supportati nel cloud e continua dal punto in cui l'avevi interrotta, su qualsiasi dispositivo supportato, ovunque ti trovi."} />
            <AccordionItem accordionKey={4} accordionHeader={"Che Cos'è GeForce NOW?"} accordionBody={"GeForce NOW è il servizio di game streaming basato su cloud di NVIDIA e offre la possibilità di giocare in tempo reale direttamente dal cloud al tuo laptop, desktop, Mac, Chromebook, SHIELD TV, alcune TV Samsung e LG, iPhone, iPad e dispositivi Android. Collega gli account dei tuoi store e gioca in streaming dal tuo catalogo oppure apri i tuoi giochi preferiti gratuiti. Chiudi e salva la partita per i giochi supportati nel cloud e continua dal punto in cui l'avevi interrotta, su qualsiasi dispositivo supportato, ovunque ti trovi."} />
        </AccordionElement>
      </Accordion>
      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}

export default FAQ;
