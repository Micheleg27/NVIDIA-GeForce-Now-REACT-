import React from "react";
import { IssueSection } from "../Components/ServerStatusComponents/IssueSection";
import { NavServer } from "../Components/ServerStatusComponents/NavServer";
import { TitleServer } from "../Components/ServerStatusComponents/TitleServer";
import { AccordionElement } from "../Components/BasicComponents/AccordionElement";
import { AccordionItem } from "../Components/BasicComponents/AccordionItem";
import ListaServer from "../Components/BasicComponents/ListaServer";
import { ServerElement } from "../Components/BasicComponents/ServerElement";

export function ServerStatus(){

    return(
        <React.Fragment >
            <NavServer />
            <TitleServer />
            <IssueSection />

            <AccordionElement>
                <ServerElement name={'NVIDIA Global Services'}/>
                <AccordionItem accordionKey={'1'} accordionHeader={ {server: ' US Central', status: "man"} } accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                {/* <AccordionItem accordionKey={'2'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'3'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'4'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'5'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'6'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'7'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'8'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'9'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'10'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'11'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'12'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'13'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'14'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'15'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'16'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'17'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'18'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'19'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'20'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'21'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'22'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'23'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/>
                <AccordionItem accordionKey={'24'} accordionHeader={' US Central [RTX 3080 Ready]Under Maintenance'} accordionBody={<ListaServer lista={[{server: 'NP-DAL-02', status: 'Operational'}, {server: 'NP-DAL-03', status: 'Operational'}, {server: 'NP-DAL-04 [RTX 3080]', status: 'Under Maintenance'}]}/>}/> */}

            </AccordionElement>
            
        </React.Fragment>
    )
}
