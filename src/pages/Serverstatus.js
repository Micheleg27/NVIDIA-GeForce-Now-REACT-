import React from "react";
import { IssueSection } from "../Components/ServerStatusComponents/IssueSection";
import { NavServer } from "../Components/ServerStatusComponents/NavServer";
import { TitleServer } from "../Components/ServerStatusComponents/TitleServer";
import { AccordionElement } from "../Components/BasicComponents/AccordionElement";
import {AccordionItem} from "../Components/BasicComponents/AccordionItem";
import ListaServer from "../Components/BasicComponents/ListaServer";

export function ServerStatus(){

    return(
        <React.Fragment >
            <NavServer />
            <TitleServer />
            <IssueSection />

            <AccordionElement>
                <div className="li-server">
                    <p className="all-server">NVIDIA Global Services</p>
                    <p className="p-status">Operational</p>
                </div>
                <AccordionItem accordionKey={'1'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'2'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
            </AccordionElement>
            
        </React.Fragment>
    )
}
