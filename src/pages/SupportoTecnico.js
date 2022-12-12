import React from "react";
import NavBianca from '../Components/NavBianca';
import { NavSupportoTecnico } from "../Components/S.T.Components/NavSupportoTecnico";
import FooterBianco from '../Components/FooterBianco';
import CardSupportoTecnico from "../Components/S.T.Components/CardSupportoTecnico";
import { STFooter } from "../Components/S.T.Components/STFooter";
import TitleST from "../Components/S.T.Components/TitleST";




function SupportoTecnico() {
    return ( 
        <React.Fragment>
            <NavBianca />
            <NavSupportoTecnico />
            <TitleST />
            <CardSupportoTecnico />
            <STFooter />
            <FooterBianco />
        </React.Fragment>
     );
}

export default SupportoTecnico;