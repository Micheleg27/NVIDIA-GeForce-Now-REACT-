import React from "react";
import { IssueSection } from "../Components/ServerStatusComponents/IssueSection";
import { NavServer } from "../Components/ServerStatusComponents/NavServer";
import { TitleServer } from "../Components/ServerStatusComponents/TitleServer";
import { AccordionElement } from "../Components/BasicComponents/AccordionElement";
import { AccordionItem } from "../Components/BasicComponents/AccordionItem";
import ListaServer from "../Components/BasicComponents/ListaServer";
import { ServerElement } from "../Components/BasicComponents/ServerElement";

export function ServerStatus() {

    return (
        <React.Fragment >
            <NavServer />
            <TitleServer />
            <IssueSection />
            <div className='accordion-server'>
                <AccordionElement>
                    <div className='accordion-title'>
                        <ServerElement name={'NVIDIA Global Services'} />
                    </div>

                    <AccordionItem accordionKey={'1'} accordionHeader={{ server: 'US Central', status: "Operational" }} accordionBody={<ListaServer lista={[{ server: 'NP-DAL-02' }, { server: 'NP-DAL-03' }, { server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance' }]} />} />
                    <AccordionItem accordionKey={'2'} accordionHeader={{ server: 'US East [RTX 3080 Ready] ' }} accordionBody={<ListaServer lista={[{ server: 'NP-ASH-03' }, { server: 'NP-ASH-03' }]} />} />
                    <AccordionItem accordionKey={'3'} accordionHeader={{ server: 'US South [RTX 3080 Ready] ' }} accordionBody={<ListaServer lista={[{ server: 'NP-ATL-01' }, { server: 'NP-ATL-02' }, { server: 'NP-ATL-03 [RTX 3080]' }]} />} />
                    <AccordionItem accordionKey={'4'} accordionHeader={{ server: 'US West [RTX 3080 Ready] ' }} accordionBody={<ListaServer lista={[{ server: 'NP-SJC6-02' }, { server: 'NP-SJC6-04 [RTX 3080]' }]} />} />
                    <AccordionItem accordionKey={'5'} accordionHeader={{ server: 'EU Northeast [RTX 3080 Ready]' }} accordionBody={<ListaServer lista={[{ server: 'NP-AMS-01' }, { server: 'NP-AMS-02' }, { server: 'NP-AMS-03' }, { server: 'NP-AMS-04' }, { server: 'NP-AMS-05 [RTX 3080]' }]} />} />
                    <AccordionItem accordionKey={'6'} accordionHeader={{ server: 'EU Central [RTX 3080 Ready]' }} accordionBody={<ListaServer lista={[{ server: 'NP-FRK-02' }, { server: 'NP-FRK-04' }, { server: 'NP-FRK-05' }, { server: 'NP-FRK-06 [RTX 3080]' }]} />} />
                    <AccordionItem accordionKey={'7'} accordionHeader={{ server: 'EU West [RTX 3080 Ready]' }} accordionBody={<ListaServer lista={[{ server: 'NP-LON-03' }, { server: 'NP-LON-04' }, { server: 'NP-LON-05 [RTX 3080]' }]} />} />
                    <AccordionItem accordionKey={'8'} accordionHeader={{ server: 'EU Southeast' }} accordionBody={<ListaServer lista={[{ server: 'NP-SOF-01' }]} />} />
                    <AccordionItem accordionKey={'9'} accordionHeader={{ server: 'JP East S1 - Alliance Partner' }} accordionBody={<ListaServer lista={[{ server: 'NPA-SBK-OSA-01' }]} />} />
                    <AccordionItem accordionKey={'10'} accordionHeader={{ server: 'JP Central S1 - Alliance Partner' }} accordionBody={<ListaServer lista={[{ server: 'NPA-KDD-TYO-01' }]} />} />
                    <AccordionItem accordionKey={'11'} accordionHeader={{ server: 'RU CENTRAL - Alliance Partner' }} accordionBody={<ListaServer lista={[{ server: 'NPA-SFM-SVO-01' }, { server: 'NPA-SFM-SVO-02' }]} />} />
                    <AccordionItem accordionKey={'12'} accordionHeader={{ server: 'RU URAL - Alliance Partner' }} accordionBody={<ListaServer lista={[{ server: 'NPA-SFM-SVX-01' }]} />} />
                    <AccordionItem accordionKey={'13'} accordionHeader={{ server: ' AU West 1 - Alliance Partner' }} accordionBody={<ListaServer lista={[{ server: 'NPA-PNT-PER-01' }]} />} />

                </AccordionElement>
            </div>
        </React.Fragment>
    )
}
