import React from "react";
import NavBianca from "../Components/NavBianca";
import { NavNera } from "../Components/NavNera";
import GreenBannerNav from "../Components/GreenBannerNav";
import HeaderScarica from "../Components/ScaricaComponents/HeaderScarica";
import FooterBianco from "../Components/FooterBianco";
import { FooterNero } from "../Components/FooterNero";
import { SupportoCard } from "../Components/SupportoComponents/SupportoCard";
import { Link } from "react-router-dom";

export function Supporto() {
  return (
    <React.Fragment>
      <NavBianca />
      <GreenBannerNav />
      <NavNera />
      <HeaderScarica titleHeader={"Supporto"} />

      <section className="section-support">
        <div className="container-support">
          <div className="container-support-card">
            <SupportoCard
              link={"https://www.nvidia.com/it-it/geforce-now/download/"}
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/support/icon-download.svg"
              }
              title={"Scarica App"}
              paragraph={
                "Scarica l'ultima versione dell'App GeForce NOW per tutti i tuoi dispositivi."
              }
            />
            <SupportoCard
              link={
                "https://www.nvidia.com/en-us/geforce/forums/gfn-beta-updates/20/"
              }
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/support/icon-forum.svg"
              }
              title={"Forum"}
              paragraph={
                "Entra in contatto con la community per discutere degli ultimi giochi, delle novità, di consigli e soluzioni."
              }
            />
            <SupportoCard
              link={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/geforce-geforce-now-mobile-qsg-mac-itIT.pdf"
              }
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/support/icon-quick-start-guide.svg"
              }
              title={"Guida rapida"}
              paragraph={
                "Scopri come iniziare subito a giocare con GeForce NOW su PC e Mac."
              }
            />
            <SupportoCard
              link={"https://www.nvidia.com/it-it/support/"}
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/support/technical-support.svg"
              }
              title={"Supporto Tecnico"}
              paragraph={
                "Trova le risposte alle domande e ai problemi più frequenti. La nostra knowledge base è disponibile ogni giorno a tutte le ore."
              }
            />
          </div>

          <div className="container-support-card" id="container-due">
            <SupportoCard
              link={"https://www.nvidia.com/it-it/geforce-now/system-reqs/"}
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
              }
              title={"Requisiti di sistema"}
              paragraph={
                "Scopri i requisiti internet e di sistema per giocare con GeForce NOW."
              }
            />
            <SupportoCard
              link={"https://www.nvidia.com/it-it/geforce-now/faq/"}
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
              }
              title={"FAQ"}
              paragraph={
                "Trova le risposte alle domande più frequenti su GeForce NOW."
              }
            />
            <SupportoCard
              link={"https://status.geforcenow.com/"}
              img={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
              }
              title={"Stato del servizio"}
              paragraph={
                "Visualizza lo stato del servizio e dei server GeForce NOW in tutto il mondo."
              }
            />
          </div>
        </div>
      </section>

      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}
