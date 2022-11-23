import React from "react";
import { Accordion } from "../Components/ServerStatusComponents/Accordion";
import { IssueSection } from "../Components/ServerStatusComponents/IssueSection";
import { NavServer } from "../Components/ServerStatusComponents/NavServer";
import { TitleServer } from "../Components/ServerStatusComponents/TitleServer";

export function ServerStatus(){

    return(
        <React.Fragment >
            <NavServer />
            <TitleServer />
            <IssueSection />
            <Accordion serverName={'US Central [RTX 3080 Ready]'} serverStatus={'Ready'}/>
        </React.Fragment>
    )
}
