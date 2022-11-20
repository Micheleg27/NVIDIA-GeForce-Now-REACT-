import React from "react";
import { IssueSection } from "../Components/ServerStatusComponents/IssueSection";
import { NavServer } from "../Components/ServerStatusComponents/NavServer";
import { TitleServer } from "../Components/ServerStatusComponents/TitleServer";

export function ServerStatus(){

    return(
        <React.Fragment >
            <NavServer />
            <TitleServer />
            <IssueSection />
        </React.Fragment>
    )
}
